import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd, { message } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './mock'
const app = createApp(App)
app.config.globalProperties.$message = message

app.use(store)
app.use(router)
app.use(Antd)
app.mount('#app')