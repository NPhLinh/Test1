<template>
	<header>
		<div class="topbar d-flex align-items-center">
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
				<div class="user-box dropdown">
					<a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret" href="#"
						role="button" data-bs-toggle="dropdown" aria-expanded="false">
						<img src="../../assets/assets/images/avatars/avatar-2.png" class="user-img" alt="user avatar">
						<div class="user-info ps-3">
							<p class="user-name mb-0">Admin</p>
						</div>
					</a>
					<ul class="dropdown-menu dropdown-menu-end">
						<li><a class="dropdown-item" href="javascript:;"><i class='bx bx-log-out-circle'></i><span><a href="/">Logout</a>
								</span></a>
						</li>
					</ul>
				</div>
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
					<router-link to="/admin/danh-muc"
						style="text-decoration: none; display: flex; align-items: center;">
						<div class="parent-icon" style="margin-right: 5px;"><i class="bx bx-line-chart"></i></div>
						<div class="menu-title"><b>DANH MỤC</b></div>
					</router-link>
				</li>
				<li class="" style="display: flex; align-items: center;">
					<router-link to="/admin/san-pham"
						style="text-decoration: none; display: flex; align-items: center;">
						<div class="parent-icon" style="margin-right: 5px;"><i class="bx bx-line-chart"></i></div>
						<div class="menu-title"><b>SẢN PHẨM</b></div>
					</router-link>
				</li>
				<li class="" style="display: flex; align-items: center;">
					<router-link to="" style="text-decoration: none; display: flex; align-items: center;">
						<div class="parent-icon" style="margin-right: 5px;"><i class="bx bx-line-chart"></i></div>
						<div class="menu-title"><b>THỐNG KÊ</b></div>
					</router-link>
				</li>
				<li class="" style="display: flex; align-items: center;">
					<router-link to="/admin/khach-hang" style="text-decoration: none; display: flex; align-items: center;">
						<div class="parent-icon" style="margin-right: 5px;"><i class="bx bx-line-chart"></i></div>
						<div class="menu-title"><b>TÀI KHOÁN KHÁCH HÀNG</b></div>
					</router-link>
				</li>
				<li class="" style="display: flex; align-items: center;">
					<router-link to="" style="text-decoration: none; display: flex; align-items: center;">
						<div class="parent-icon" style="margin-right: 5px;"><i class="bx bx-line-chart"></i></div>
						<div class="menu-title"><b>XEM ĐÁNH GIÁ</b></div>
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
</template>

<script>
import '../../assets/assets/js/bootstrap.bundle.min.js';
import '../../assets/assets/js/jquery.min.js';
import '../../assets/assets/plugins/simplebar/js/simplebar.min.js';
import '../../assets/assets/plugins/metismenu/js/metisMenu.min.js';
import '../../assets/assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js';
import '../../assets/assets/js/index.js';
import '../../assets/assets/js/app.js';
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
</style>.
