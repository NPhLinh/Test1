<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BaoCaoController;
use App\Http\Controllers\ChungChiController;
use App\Http\Controllers\CoQuanXacThucController;
use App\Http\Controllers\HocVienController;
use App\Http\Controllers\LichSuGiaoDichController;
use App\Http\Controllers\ThongKeController;
use App\Http\Controllers\ToChucCapChungChiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/admin/dang-ky',[AdminController::class,'dangKy']);
Route::post('/admin/dang-nhap', [AdminController::class,'dangNhap']);


//Học viên
Route::post('/hoc-vien/dang-ky', [HocVienController::class,'dangKy']);
Route::post('/hoc-vien/dang-nhap', [HocVienController::class,'dangNhap']);
Route::get('/hoc-vien/data', [HocVienController::class,'getData']);


//Cơ quan xác thực
Route::post('/co-quan/dang-ky', [CoQuanXacThucController::class,'dangKy']);
Route::post('/co-quan/dang-nhap', [CoQuanXacThucController::class,'dangNhap']);
Route::get('/co-quan/data', [CoQuanXacThucController::class,'getData']);


//Tổ chức cấp chứng chỉ
Route::post('/to-chuc/dang-ky', [ToChucCapChungChiController::class,'dangKy']);
Route::post('/to-chuc/dang-nhap', [ToChucCapChungChiController::class,'dangNhap']);
Route::get('/to-chuc/data', [ToChucCapChungChiController::class,'getData']);

//Quan
