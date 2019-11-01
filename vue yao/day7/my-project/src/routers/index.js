import Vue from 'vue'
// import VueRouter from '../assets/vue-router'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../pages/Home.vue'
import Recover from '../pages/Recover.vue'
import Order from '../pages/Order.vue'
import Mine from '../pages/Mine.vue'
import Detail from '../pages/Detail.vue'
const routes = [{
        // 当页面为http://localhost:8080/home 在<router-view>加载Home组件
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        // 当页面为http://localhost:8080/recover 在<router-view>加载Recover组件
        path: '/recover',
        name: 'recover',
        component: Recover
    },
    {
        path: '/order',
        name: 'order',
        component: Order
    },
    {
        path: '/mine',
        name: 'mine',
        component: Mine
    },
    {
        path: '/detail',
        name: 'detail',
        component: Detail
    }
]
const router = new VueRouter({
    routes
})
export default router