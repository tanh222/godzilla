<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\UserController;
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

Route::get('dashboard', [DashboardController::class, 'dashboard'])->name('dashboard)');

Route::get('login', [AuthController::class, 'login'])->name('auth.login');

Route::post('custom-login', [AuthController::class, 'customLogin'])->name('login.custom');

Route::get('register', [AuthController::class, 'register'])->name('auth.register');

Route::post('custom-register', [AuthController::class, 'customRegister'])->name('register.custom');

Route::get('create_user', [AuthController::class, 'createUser'])->name('create-user');

Route::post('custom-creat', [AuthController::class, 'customCreate'])->name('create.custom');

Route::get('sign-out', [AuthController::class, 'signOut'])->name('sign-out');

Route::get('update-user/{id}', [UserController::class, 'showFormUpdate'])->name('show.form-update');
Route::put('update-user/{id}', [UserController::class, 'update'])->name('update.user');
Route::get('delete-user/{id}', [UserController::class, 'delete'])->name('delete.user');

Route::get('roles', [RolesController::class, 'roles'])->name('roles');
Route::get('create-roles', [RolesController::class, 'showFormRoles'])->name('create-roles');
Route::post('create-roles', [RolesController::class, 'createRoles'])->name('create.roles');
Route::get('update-roles/{id}', [RolesController::class, 'updateRoles'])->name('update-roles');
Route::put('update-roles/{id}', [RolesController::class, 'rolesUpdate'])->name('update.roles');
Route::get('delete-roles/{id}', [RolesController::class, 'deleteRoles'])->name('delete.roles');
