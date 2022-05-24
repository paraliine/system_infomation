import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import CPUView from '../views/CPUView.vue'
import MemoryView from '../views/MemoryView.vue'
import OverView from '../views/OverView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'overview',
        component: OverView
    },
    {
        path:'/cpu',
        name:'cpu',
        component:CPUView
    },
    {
        path:'/memory',
        name:'memory',
        component: MemoryView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router