<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ManageController;
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
Route::get('/login', [AuthController::class, 'login'])->name('auth.login');

Route::get('/signup',[AuthController::class, 'signup'])->name('auth.signup');

//Route::get('/dashboard', function () {
//    return view('dashboard');
//});
Route::get('/dashboard',[DashboardController::class,'dashboard'])->name('dashboard)');

