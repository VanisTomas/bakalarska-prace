<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;

class ProductController extends Controller {
	public function index(Request $request) {
		$filter = json_decode($request->filter, true);
		$conditions = [];
		if ($filter) {
			if ($filter['title']) {
				$conditions[] = ['title', 'like', '%' . $filter['title'] . '%'];
			}
			if ($filter['category']) {
				$conditions[] = ['category_id', '=', $filter['category']];
			}
			if ($filter['in_stock']) {
				$conditions[] = ['in_stock', '>', '0'];
			}
			if ($filter['price']) {
				$conditions[] = ['price', '<=', $filter['price']];
			}
		}
		$order_by = 'title';
		$order_direction = 'ASC';
		switch ($request->order_by) {
			case 'title':
				$order_by = 'title';
				$order_direction = 'ASC';
				break;
			case 'category':
				$order_by = 'category_id';
				$order_direction = 'ASC';
				break;
			case 'price_ascending':
				$order_by = 'price';
				$order_direction = 'ASC';
				break;
			case 'price_descending':
				$order_by = 'price';
				$order_direction = 'DESC';
				break;
			default:
				break;
		}
		return Product::with('category')->where($conditions)->orderBy($order_by, $order_direction)->paginate(10);
	}

	public function show(Product $product) {
		$product->category;
		return $product;
	}

	public function store(Request $request) {
		$request->validate([
			'title' => ['required'],
			'description' => ['required'],
			'image' => ['required', 'file', 'image', 'max:1024'],
			'price' => ['required']
		]);

		$imageName = time() . '.' . $request->image->extension();
		$request->image->move(public_path('images'), $imageName);
		$imageName = '/images/' . $imageName;

		Product::create([
			'title' => $request->title,
			'category_id' => $request->category_id,
			'description' => $request->description,
			'image' => $imageName,
			'price' => $request->price,
			'in_stock' => $request->in_stock
		]);
	}

	public function update(Product $product, Request $request) {
		$request->validate([
			'title' => ['required'],
			'description' => ['required'],
			'price' => ['required']
		]);

		if ($request->image instanceof UploadedFile) {
			if (file_exists(public_path() . $product->image)) {
				unlink(public_path() . $product->image);
			}

			$imageName = time() . '.' . $request->image->extension();
			$request->image->move(public_path('images'), $imageName);
			$imageName = '/images/' . $imageName;
		} else {
			$imageName = $request->image;
		}

		$product->update([
			'title' => $request->title,
			'category_id' => $request->category_id,
			'description' => $request->description,
			'image' => $imageName,
			'price' => $request->price,
			'in_stock' => $request->in_stock
		]);
	}

	public function destroy(Product $product) {
		$product->delete();
	}

	public function getMaxPrice() {
		return Product::max('price');
	}
}
