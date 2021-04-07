<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class CartController extends Controller {
	public function index() {
		$items = Cart::with('product')->where(['user_id' => Auth::user()->id])->latest()->get();
		$response = [];
		foreach ($items as $item) {
			$response[] = ['product' => $item->product, 'quantity' => $item->quantity];
		}
		return $response;
	}

	public function store(Request $request) {
		$item = Cart::where(['product_id' => $request->product_id, 'user_id' => $request->user()->id]);
		if ($item->count()) {
			$item->increment('quantity', $request->quantity);
			$item->first();
		} else {
			Cart::create([
				'user_id' => $request->user()->id,
				'product_id' => $request->product_id,
				'quantity' => $request->quantity
			]);
		}
	}

	public function destroy($id) {
		Cart::where(['product_id' => $id, 'user_id' => Auth::user()->id])->delete();
	}

	public function destroyAll() {
		Cart::where(['user_id' => Auth::user()->id])->delete();
	}

	public function updateQuantity(Request $request) {
		$request->validate([
			'quantity' => ['required', 'integer', 'min:1'],
		]);

		Cart::where(['product_id' => $request->product_id, 'user_id' => $request->user()->id])->update(['quantity' => $request->quantity]);
	}
}
