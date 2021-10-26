<?php

namespace App\Models;

use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model {
	use HasFactory;

	protected $fillable = [
		'user_id',
		'amount',
		'status',
		'order_hash'
	];

	public function product() {
		return $this->belongsToMany(Product::class)->withPivot('quantity')->withTimestamps();
	}

	public function user() {
		return $this->belongsTo(User::class);
	}
}
