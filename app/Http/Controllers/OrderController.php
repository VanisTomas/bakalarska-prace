<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class OrderController extends Controller {
	public function index() {
		return Order::with('product')->where(['user_id' => Auth::user()->id])->latest()->paginate(10);
	}

	public function store(Request $request) {
		$order = Order::create(['user_id' => Auth::check() ? Auth::user()->id : 0, 'amount' => $request->amount]);

		foreach ($request->items as $item) {
			$order->product()->attach($item['product']['id'], ['quantity' => $item['quantity']]);
		}
	}

	public function getAll() {
		return Order::with('product')->with('user')->latest()->paginate(10);
	}
}
