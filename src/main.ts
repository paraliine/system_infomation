import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {createPinia} from "pinia";
import './assets/normalize.min.css'
import './assets/open-props.min.css'


createApp(App)
    .use(ElementPlus)
    .use(router)
    .use(createPinia())
    .mount('#app')
