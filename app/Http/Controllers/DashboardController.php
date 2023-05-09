<?php

namespace App\Http\Controllers;

use App\Models\User;

class DashboardController extends Controller
{
    public function dashboard() {
        $users = User::paginate(10);
        return view('dashboard', compact('users'));
    }

}
