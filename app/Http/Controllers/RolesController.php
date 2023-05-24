<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;

class RolesController extends Controller
{
    public function roles() {
        $roles = Role::paginate(10);
        return view('roles.roles', compact('roles'));
    }

    public function showFormRoles()
    {

        return view('roles.create_roles');
    }
    public function createRoles(Request $request)
    {
        $request->validate([
            'name' => 'required',
        ]);

        $data = $request->all();
        $this->create($data);
        return redirect('roles')->withSuccess('You have create_roles');
    }
    public function create(array $data)
    {
        return Role::create([
            'name' => $data['name'],
        ]);
    }
    public function  updateRoles($id)
    {
        $roles = Role::find($id);
        return view('roles.update_roles', compact('roles'));
    }

    public function rolesUpdate(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
        ]);

        $roles = Role::find($id);
        // Kiểm tra và cập nhật các trường thông tin
        $roles->name = $request->name;
        // Lưu lại thông tin cập nhật
        $roles->save();
        return redirect('roles')->withSuccess('You have roles_update');
    }

    public function deleteRoles($id)
    {
        $roles =Role::find($id);

        $roles->delete();
        return back()->withSuccess('You have deleted roles');
    }
}
