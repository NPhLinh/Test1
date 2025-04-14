<?php

namespace App\Http\Controllers;

use App\Models\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function dangKy(Request $request)
    {
        Admin::create([
            'email'                 =>  $request->email,
            'password'              =>  bcrypt($request->password),
        ]);
        return response()->json([
            'message'  =>   'Đăng ký tài khoản thành công.',
            'status'   =>   true
        ]);
    }
    public function dangNhap(Request $request){
        $check = Auth::guard('admin')->attempt([
            'email' => $request->email,
            'password' => $request->password,
        ]);
        if($check){
            $user = Auth::guard('admin')->user();
            return response()->json([
                'message'  =>   'Đăng nhập thành công.',
                'status'   =>   true,
            ]);
        }else{
            return response()->json([
                'message'  =>   'Sai thông tin đăng nhập.',
                'status'   =>   false,
            ]);
        }

    }
}
