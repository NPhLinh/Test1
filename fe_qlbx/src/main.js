import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './layout/wrapper/MasterRocker.vue'
import Auth from './layout/wrapper/DangKyDangNhapMaster.vue' 
import Admin from './layout/wrapper/MasterRockerAdmin.vue' 
import $ from 'jquery';

// khong co menu
const app = createApp(App)

app.use(router)
app.component("default-layout", Default);
app.component("auth-layout", Auth);
app.component("admin-layout", Admin);
app.mount("#app")