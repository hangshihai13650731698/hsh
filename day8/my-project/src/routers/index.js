import Vue from 'vue'
// import VueRouter from '../assets/vue-router'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../pages/Home.vue'
import Recover from '../pages/Recover.vue'
import Order from '../pages/Order.vue'
import Mine from '../pages/Mine.vue'
import Detail from '../pages/Detail.vue'
import Main from '../pages/Main.vue'
import Login from '../pages/Login.vue'
// import axios from 'axios'
const routes = [{
        // 当页面为http://localhost:8080/home 在<router-view>加载Home组件
        path: '/main',
        name: 'main',
        component: Main,
        children: [{
                // 当页面为http://localhost:8080/recover 在<router-view>加载Recover组件
                path: 'home',
                name: 'home',
                component: Home,
                // component: Home,
                // 别名
                alias: 'h',
            }, {
                // 当页面为http://localhost:8080/recover 在<router-view>加载Recover组件
                path: 'recover',
                name: 'recover',
                component: Recover
            },
            {
                path: 'order',
                name: 'order',
                component: Order
            },
            {
                path: 'mine',
                name: 'mine',
                component: Mine
            },
        ]
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    // 默认重定向
    {
        path: '/',
        redirect: '/main/home'
    }
]
const router = new VueRouter({
    // hash
    mode: 'history',
    routes
})
// 路由守卫
// 进所有路由之前都要判断
router.beforeEach((to, from, next) => {
    // axios.get('http://localhost:3000/login',{
    //     params:{
    //         token: sessionStorage.getItem('token')
    //     }
    // })
    // to 将要进去的路由
    // from 将要的路由
    // next 函数，如果执行了，那就往下通行
    window.console.log(to, from, next)
    // 如果登录信息是正确的，或者你所在登录页，那就触发next放行，否则，回跳到login页面，重新获取登录信息
    if (window.sessionStorage.getItem('token') === '12345678' || to.name === 'login') {
        next()
    } else {
        // 如果不成功，回跳登录页
        router.push({
            name: 'login'
        })
    }

})
export default router