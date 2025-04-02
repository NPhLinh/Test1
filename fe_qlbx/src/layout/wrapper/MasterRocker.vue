<template>
	<header>
		<div class="topbar d-flex align-items-center"
			style="background: linear-gradient(to right, #accbee, #a8edea, #accbee, #accbee, #a8edea);">
			<nav class="navbar navbar-expand">
				<div class="topbar-logo-header">
					<div class="">
						<img src="../../assets/assets/images/hinh/logo-benxe.png" width="80" alt="" />
					</div>
					<div class="">
					</div>
				</div>
				<div class="mobile-toggle-menu"><i class='bx bx-menu'></i></div>
				<div class="search-bar flex-grow-1">
					<div class="position-relative search-bar-box">
						<input type="text" class="form-control search-control" placeholder="Type to search...">
						<span class="position-absolute top-50 search-show translate-middle-y"><i
								class='bx bx-search'></i></span>
						<span class="position-absolute top-50 search-close translate-middle-y"><i
								class='bx bx-x'></i></span>
					</div>
				</div>
				<div class="top-menu ms-auto">
					<ul class="navbar-nav align-items-center">
						<li class="nav-item mobile-search-icon">
							<a class="nav-link" href="#"> <i class='bx bx-search'></i>
							</a>
						</li>
					</ul>
				</div>
				<div class="">
					<a href="/khach-hang/gio-hang"><i class="fa-solid fa-cart-shopping"></i></a>
				</div>
				<div class="user-box dropdown">
					<a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret" href="#"
						role="button" data-bs-toggle="dropdown" aria-expanded="false">
						<img src="../../assets/assets/images/avatars/avatar-2.png" class="user-img" alt="user avatar">
					</a>
					<ul class="dropdown-menu dropdown-menu-end">
						<router-link to="/admin/dang-nhap">
							<li> <a class="dropdown-item" href="form-elements.html"><i class="bx bx-user"></i>Admin Đăng
									Nhập</a>
							</li>
						</router-link>
						<router-link to="/khach-hang/dang-nhap">
							<li> <a class="dropdown-item" href="form-elements.html"><i class="bx bx-user"></i>Khách Hàng
									Đăng Nhập</a>
							</li>
						</router-link>
						<router-link to="/khach-hang/dang-ky">
							<li> <a class="dropdown-item" href="form-elements.html"><i class="bx bx-user"></i>
									Khách Hàng Đăng Ký</a>
							</li>
						</router-link>

					</ul>
				</div>
				<router-link to="/khach-hang/profile"><div class="user-info ps-3">
					<p class="user-name mb-0"><i class="fa-solid fa-user"></i></p>
				</div></router-link>
			</nav>
		</div>
	</header>
	<div class="nav-container primary-menu">
		<div class="mobile-topbar-header">
			<div>
				<img src="../../assets/assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
			</div>
			<div>
				<h4 class="logo-text">Rukada</h4>
			</div>
			<div class="toggle-icon ms-auto"><i class="bx bx-arrow-to-left"></i>
			</div>
		</div>
		<nav class="navbar navbar-expand-xl w-100">
			<ul class="navbar-nav justify-content-start flex-grow-1 gap-5">
				<li class="" style="display: flex; align-items: center;">
					<router-link to="/" style="text-decoration: none; display: flex; align-items: center;">
						<div class="parent-icon" style="margin-right: 5px;"><i class="bx bx-home-circle"></i></div>
						<div class="menu-title"><b>TRANG CHỦ</b></div>
					</router-link>
				</li>
				<li class="" style="display: flex; align-items: center;">
					<router-link to="/khach-hang/gioi-thieu"
						style="text-decoration: none; display: flex; align-items: center;">
						<div class="parent-icon" style="margin-right: 5px;"><i class="bx bx-line-chart"></i></div>
						<div class="menu-title"><b>GIỚI THIỆU</b></div>
					</router-link>
				</li>
				<li class="nav-item dropdown" style="display: flex; align-items: center;">
					<router-link to="" style="text-decoration: none; display: flex; align-items: center;">
						<div class="parent-icon" style="margin-right: 5px;"><i class="bx bx-cart"></i></div>
						<div class="menu-title"><b>NHÀ XE</b></div>
					</router-link>
					<ul class="dropdown-menu">
						<template v-for="(v, k) in list_danh_muc">
							<li>
								<router-link :to="'/khach-hang/san-pham/' + v.id + '-' + v.slug_danh_muc">
									<a class="dropdown-item" href="#"><i class="bx bx-right-arrow-alt"></i><b>{{
							v.ten_danh_muc }}</b></a>
								</router-link>
							</li>
						</template>
					</ul>
				</li>
				
				<li class="" style="display: flex; align-items: center;">
					<router-link to="" style="text-decoration: none; display: flex; align-items: center;">
						<div class="parent-icon" style="margin-right: 5px;"><i class="bx bx-line-chart"></i></div>
						<div class="menu-title"><b>CHUYẾN XE</b></div>
					</router-link>
				</li>
				<li class="" style="display: flex; align-items: center;">
					<router-link to="" style="text-decoration: none; display: flex; align-items: center;">
						<div class="parent-icon" style="margin-right: 5px;"><i class="bx bx-line-chart"></i></div>
						<div class="menu-title"><b>TÀI XẾ</b></div>
					</router-link>
				</li>
				<li class="" style="display: flex; align-items: center;">
					<router-link to="/khach-hang/ho-tro"
						style="text-decoration: none; display: flex; align-items: center;">
						<div class="parent-icon" style="margin-right: 5px;"><i class="bx bx-line-chart"></i></div>
						<div class="menu-title"><b>HỖ TRỢ</b></div>
					</router-link>
				</li>
			</ul>
		</nav>
	</div>
	<div class="page-wrapper">
		<div class="page-content">
			<router-view>
			</router-view>
		</div>
	</div>
	<footer class="page-footer" style="background-color: aqua;">
    <p class="mb-0">Copyright © 2021. All right reserved.</p>
</footer>
</template>
<script>
//
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/65f37ccd8d261e1b5f6dc1d4/1hovhv1fs';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();
//
import '../../assets/assets/js/bootstrap.bundle.min.js';
import '../../assets/assets/js/jquery.min.js';
import '../../assets/assets/plugins/simplebar/js/simplebar.min.js';
import '../../assets/assets/plugins/metismenu/js/metisMenu.min.js';
import '../../assets/assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js';
import '../../assets/assets/js/index.js';
import '../../assets/assets/js/app.js';
///////////////////////////////////////////////////////
import axios from 'axios';


export default {
	data() {
		return {
			list_danh_muc: []
		}
	},
	mounted() {
		this.loadDanhMuc();
	},
	methods: {
		loadDanhMuc() {
			axios
				.get('http://127.0.0.1:8000/api/khach-hang/danh-muc')
				.then((res) => {
					this.list_danh_muc = res.data.data
				})
		}
	}
}




</script>

<style>
@import '../../assets/assets/plugins/simplebar/css/simplebar.css';
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
@import '../../assets/assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css';
@import '../../assets/assets/css/bootstrap.min.css';
@import '../../assets/assets/css/bootstrap-extended.css';
@import '../../assets/assets/css/app.css';
@import '../../assets/assets/css/icons.css';
@import '../../assets/assets/css/dark-theme.css';
@import '../../assets/assets/css/semi-dark.css';
@import '../../assets/assets/css/header-colors.css';
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');
</style>