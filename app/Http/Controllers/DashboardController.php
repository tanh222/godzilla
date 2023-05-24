<?php

namespace App\Http\Controllers;

use App\Models\User;

class DashboardController extends Controller
{
    public function dashboard() {
        $users = User::with('role')->paginate(10);
        return view('dashboard', compact('users'));
    }

}
