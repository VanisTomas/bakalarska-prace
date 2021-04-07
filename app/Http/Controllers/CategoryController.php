<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller {
	public function index() {
		return Category::get();
	}

	public function store(Request $request) {
		$request->validate([
			'name' => ['required']
		]);

		return Category::create($request->all());
	}

	public function update(Category $category, Request $request) {
		$request->validate([
			'name' => ['required']
		]);

		$category->update($request->all());
	}

	public function destroy(Category $category) {
		$category->delete();
	}
}
