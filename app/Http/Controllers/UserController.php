<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function showFormUpdate($id)
   {
        $user = User::find($id);
        return view('update_user', compact('user'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email,'.$id,
            'phone' => 'required',
            'address' => 'required',
            'date_created' => 'required',
        ]);

        $user = User::find($id);
        // Kiểm tra và cập nhật các trường thông tin
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->address = $request->address;
        $user->date_created = $request->date_created;
        // Lưu lại thông tin cập nhật
        $user->save();
        return redirect('dashboard')->withSuccess('You have update_user');
    }
    public function delete($id)
    {
        $user =User::find($id);

        $user->delete();
        return back()->withSuccess('You have deleted user');
    }
}
