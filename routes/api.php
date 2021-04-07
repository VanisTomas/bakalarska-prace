<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', [UserController::class, 'login']);
Route::post('/register', [UserController::class, 'register']);

Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{product}', [ProductController::class, 'show']);
Route::get('/max-price', [ProductController::class, 'getMaxPrice']);

Route::get('/categories', [CategoryController::class, 'index']);

Route::get('/orders', [OrderController::class, 'index']);
Route::post('/orders', [OrderController::class, 'store']);

Route::middleware('auth:sanctum')->group(function () {
	Route::post('/logout', [UserController::class, 'logout']);
	Route::put('/user', [UserController::class, 'update']);
	Route::put('/password', [UserController::class, 'changePassword']);

	Route::get('/cart', [CartController::class, 'index']);
	Route::post('/cart', [CartController::class, 'store']);
	Route::delete('/cart/{id}', [CartController::class, 'destroy']);
	Route::delete('/cart', [CartController::class, 'destroyAll']);
	Route::put('/cart', [CartController::class, 'updateQuantity']);
});

Route::middleware('auth:sanctum', 'admin')->group(function () {
	Route::post('/categories', [CategoryController::class, 'store']);
	Route::put('/categories/{category}', [CategoryController::class, 'update']);
	Route::delete('/categories/{category}', [CategoryController::class, 'destroy']);

	Route::post('/products', [ProductController::class, 'store']);
	Route::put('/products/{product}', [ProductController::class, 'update']);
	Route::delete('/products/{product}', [ProductController::class, 'destroy']);

	Route::get('/orders-admin', [OrderController::class, 'getAll']);
});
