import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import kiemTraDaiLy from './kiemTraTaiKhoanAdmin';
import kiemTraTaiKhoanAdmin from "./kiemTraTaiKhoanAdmin";
import kiemTraTaiKhoanKhachHang from "./kiemTraTaiKhoanKhachHang";
const routes = [
    {
        path : '/',
        component: ()=>import('../components/KhachHang/TrangChu/index.vue'),
        meta:{layout : 'default'}
    },
    {
        path : '/admin/dang-ky',
        component: ()=>import('../components/Admin/DangKy/index.vue'),
        meta:{layout : 'auth'}
    },
    {
        path : '/admin/dang-nhap',
        component: ()=>import('../components/Admin/DangNhap/index.vue'),
        meta:{layout : 'auth'}
    },
    {
        path : '/admin/san-pham',
        component: ()=>import('../components/Admin/SanPham/index.vue'),
        meta:{layout : 'admin'},
        beforeEnter: kiemTraTaiKhoanAdmin
    },
    {
        path : '/admin/danh-muc',
        component: ()=>import('../components/Admin/DanhMuc/index.vue'),
        meta:{layout : 'admin'},
        beforeEnter: kiemTraTaiKhoanAdmin
    },
    {
        path : '/admin/khach-hang',
        component: ()=>import('../components/Admin/KhachHang/index.vue'),
        meta:{layout : 'admin'},
        beforeEnter: kiemTraTaiKhoanAdmin
    },
    {
        path : '/khach-hang/dang-ky',
        component: ()=>import('../components/KhachHang/DangKy/index.vue'),
        meta:{layout : 'auth'}
    },
    {
        path : '/khach-hang/dang-nhap',
        component: ()=>import('../components/KhachHang/DangNhap/index.vue'),
        meta:{layout : 'auth'}
    },  
    {
        path : '/khach-hang/gio-hang',
        component: ()=>import('../components/KhachHang/GioHang/index.vue'),
        meta:{layout : 'default'},
        beforeEnter: kiemTraTaiKhoanKhachHang
    },
    {
        path : '/khach-hang/profile',
        component: ()=>import('../components/KhachHang/ProFile/index.vue'),
        meta:{layout : 'default'},
        beforeEnter: kiemTraTaiKhoanKhachHang
    },
    {
        path : '/khach-hang/cap-nhat',
        component: ()=>import('../components/KhachHang/CapNhat/index.vue'),
        meta:{layout : 'default'},
        beforeEnter: kiemTraTaiKhoanKhachHang
    },
    {
        path : '/khach-hang/danh-gia',
        component: ()=>import('../components/KhachHang/DanhGia/index.vue'),
        meta:{layout : 'default'},
        beforeEnter: kiemTraTaiKhoanKhachHang
    },
    {
        path : '/khach-hang/san-pham/:id_danh_muc-:slug_danh_muc',
        component: ()=>import('../components/KhachHang/SanPham/index.vue'),
        meta:{layout : 'default'},
        props: true
    },
    {
        path : '/khach-hang/chi-tiet-san-pham:id_san_pham-:slug_san_pham',
        component: ()=>import('../components/KhachHang/ChiTietSanPham/index.vue'),
        meta:{layout : 'default'},
        props: true
    },
    {
        path : '/khach-hang/ho-tro',
        component: ()=>import('../components/KhachHang/VanMau/HoTro.vue'),
        meta:{layout : 'default'}
    },
    {
        path : '/khach-hang/gioi-thieu',
        component: ()=>import('../components/KhachHang/VanMau/GioiThieu.vue'),
        meta:{layout : 'default'}
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router