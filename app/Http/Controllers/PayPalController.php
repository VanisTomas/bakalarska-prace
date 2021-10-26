<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Payment;
use Illuminate\Http\Request;
use PayPalCheckoutSdk\Core\PayPalHttpClient;
use PayPalCheckoutSdk\Core\ProductionEnvironment;
use PayPalCheckoutSdk\Core\SandboxEnvironment;
use PayPalCheckoutSdk\Orders\OrdersCaptureRequest;
use PayPalCheckoutSdk\Orders\OrdersCreateRequest;
use PayPalHttp\HttpResponse;

class PayPalController extends Controller {
	public function createOrder(Request $request) {
		$order = Order::with('product')->where(['order_hash' => $request->orderHash, 'status' => 'pending'])->first();
		if (!$order) {
			return response(['Invalid order'], 422);
		}
		$paypalRequest = new OrdersCreateRequest();
		$paypalRequest->prefer('return=representation');
		$paypalRequest->body = self::buildRequestBody($order);
		$response = self::getClient()->execute($paypalRequest);
		if ($response->statusCode !== 201) {
			return response(['Payment creation failed'], 422);
		}
		Payment::create(self::buildPaymentData($response, $order));
		return response()->json($response);
	}

	public function captureOrder(Request $request) {
		$paypalRequest = new OrdersCaptureRequest($request->orderId);
		$response = self::getClient()->execute($paypalRequest);
		if ($response->statusCode !== 201) {
			return response(['Payment failed'], 422);
		}
		self::updateStatuses($response->result->id);
		return response()->json($response);
	}

	private static function getClient() {
		$clientId = env('PAYPAL_CLIENT_ID');
		$clientSecret = env('PAYPAL_CLIENT_SECRET');
		if (env('PAYPAL_TESTING_MODE', true)) {
			$environment = new SandboxEnvironment($clientId, $clientSecret);
		} else {
			$environment = new ProductionEnvironment($clientId, $clientSecret);
		}
		return new PayPalHttpClient($environment);
	}

	private static function buildRequestBody(Order $order) {
		$description = '';
		foreach ($order->product as $item) {
			$description .= $item->title . ': ' . $item->pivot->quantity . ' x ' . $item->price . ' CZK';
		}
		return [
			'intent' => 'CAPTURE',
			'purchase_units' => [
				[
					'description' => $description,
					'amount' => [
						'value' => $order->amount,
						'currency_code' => 'CZK'
					]
				]
			]
		];
	}

	private static function buildPaymentData(HttpResponse $response, Order $order) {
		$data = [];
		$data['order_id'] = $order->id;
		$data['amount'] = $order->amount;
		$data['payment_code'] = $response->result->id;
		$data['status'] = 'pending';
		$data['description'] = $response->result->purchase_units[0]->description;
		return $data;
	}

	private static function updateStatuses(string $payment_code) {
		$payment = Payment::where(['payment_code' => $payment_code])->first();
		$payment->update(['status' => 'paid']);
		Payment::where([
			['order_id', '=', $payment->order_id],
			['id', '!=', $payment->id]
		])->update(['status' => 'cancelled']);
		Order::find($payment->order_id)->update(['status' => 'paid']);
	}
}
