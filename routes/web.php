<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/signup', [AuthController::class, 'signup'])->name('auth.signup');

Route::get('/dashboard', [DashboardController::class, 'dashboard'])->name('dashboard)');

Route::get('/login', [AuthController::class, 'login'])->name('auth.login');

Route::post('custom-login', [AuthController::class, 'customLogin'])->name('login.custom');

Route::get('/register', [AuthController::class, 'register'])->name('auth.register');

Route::post('custom-register', [AuthController::class, 'customRegister'])->name('register.custom');

Route::get('/creat_user', [AuthController::class, 'create_user'])->name('create_user');

Route::post('custom-creat', [AuthController::class, 'customCreate'])->name('create.custom');

Route::get('sign-out', [AuthController::class, 'signOut'])->name('sign-out');
