<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCategoryAndInStock extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::table('products', function (Blueprint $table) {
			$table->integer('category_id')->after('id');
			$table->integer('in_stock')->after('price');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::table('products', function (Blueprint $table) {
			$table->dropColumn('category_id');
			$table->dropColumn('in_stock');
		});
	}
}
