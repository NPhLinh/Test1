<template>
    <div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
        <div class="container">
            <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2" style="background-color: #e6e9f0;">
                <div class="col mx-auto">
                    <div class="my-4 text-center">
                        <img src="https://vareno.vn/wp-content/uploads/2021/07/logo-noi-that-9.jpg" width="180"
                            alt="" />
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="border p-4 rounded">
                                <div class="text-center">
                                    <h3 class="">ADMIN ĐĂNG</h3>
                                </div>
                                <div class="login-separater text-center mb-4">
                                    <hr />
                                </div>
                                <div class="form-body">
                                    <div class="row g-3">
                                        <div class="col-12">
                                            <label class="form-label">Email</label>
                                            <div class="input-group">
                                                <div class="input-group-text bg-transparent">
                                                    <i class="fa-solid fa-envelope"></i>
                                                </div>
                                                <input v-model="tai_khoan_admin.email" type="email"
                                                    class="form-control border-end-0">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <label class="form-label">Password</label>
                                            <div class="input-group">
                                                <div class="input-group-text bg-transparent"><i
                                                        class="fa-solid fa-lock"></i></div>
                                                <input v-model="tai_khoan_admin.password" type="password"
                                                    class="form-control border-end-0">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="d-grid">
                                                <button v-on:click="dangNhap()" type="button"
                                                    class="btn btn-outline-primary"><i
                                                        class="fa-solid fa-lock-open"></i>Đăng Nhập</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
import baseRequest from '../../../core/baseRequest';
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            tai_khoan_admin: {}
        }
    },
    methods: {
        dangNhap() {
            baseRequest
                .post('admin/dang-nhap', this.tai_khoan_admin)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message);
                        this.$router.push('/admin/san-pham');
                        localStorage.setItem('chia_khoa_16', res.data.chia_khoa);
                    } else {
                        toaster.error(res.data.message);
                    }
                })
        }
    }
}
</script>

<style></style>
