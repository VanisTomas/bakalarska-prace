<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class UserController extends Controller {
	public function register(Request $request) {
		$request->validate([
			'name' => ['required'],
			'surname' => ['required'],
			'birthdate' => ['required', 'date'],
			'email' => ['required', 'email', 'unique:users'],
			'password' => ['required', 'min:8', 'confirmed']
		]);

		User::create([
			'name' => $request->name,
			'surname' => $request->surname,
			'birthdate' => $request->birthdate,
			'email' => $request->email,
			'password' => Hash::make($request->password)
		]);
	}

	public function login(Request $request) {
		$request->validate([
			'email' => ['required', 'email'],
			'password' => ['required']
		]);

		if (Auth::attempt($request->only('email', 'password'))) {
			return Auth::user();
		}

		throw ValidationException::withMessages([
			'email' => ['The provided credentials are incorrect']
		]);
	}

	public function logout() {
		Auth::guard('web')->logout();
	}

	public function update(Request $request) {
		$rules = [
			'name' => ['required'],
			'surname' => ['required'],
			'birthdate' => ['required', 'date'],
		];
		if ($request->email !== Auth::user()->email) {
			$rules['email'] = ['required', 'email', 'unique:users'];
		}
		$request->validate($rules);

		$user = User::find(Auth::user()->id);
		$user->update($request->all());
		return $user;
	}

	public function changePassword(Request $request) {
		$request->validate([
			'old' => ['required'],
			'password' => ['required', 'min:8', 'confirmed']
		]);

		$user = User::find(Auth::user()->id);
		if (Hash::check($request->old, $user->password)) {
			$user->update(['password' => Hash::make($request->password)]);
			return $user;
		}

		throw ValidationException::withMessages([
			'old' => ['The provided password is incorrect']
		]);
	}
}
