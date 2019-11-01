// 3.引入页面组件
import Home from '../pages/home.vue'
import Recover from '../pages/cover.vue'
import my from '../pages/my.vue'
import shezhi from '../pages/shezhi.vue'
import page from '../pages/page.vue'
import main from '../pages/main.vue'
import Vue from 'vue';
// 使用VueRouter步骤
// 1.引入vue-router
import VueRouter from 'vue-router';

// 2.使用(安装)vue-router（VueRouter是作为插件增强Vue的功能）
Vue.use(VueRouter);

// 4配置路由规则和参数
const routes = [{
        // 路径
        path: '/main',
        component: main,
        name: 'main',
        //路由的嵌套，main里面嵌套，嵌套后路径不用加/
        children: [{
                path: 'home',
                component: Home,
                name: 'home'
            },
            {
                path: 'cover',
                component: Recover,
                name: 'Recover'
            }, {
                path: 'my',
                component: my,
                name: 'my'
            }, {
                path: 'shezhi',
                component: shezhi,
                name: 'shezhi'
            },
        ]
    },
    // 一开始进入到页面时要显示的主页主键
    { //重定向不用放在嵌套里面
        path: '/', //当浏览器地址为/home时，显示Home组件的内容
        redirect: '/main/home'
    },
    //  {
    //     path: '/cover',
    //     component: Recover,
    //     name:'Recover'
    // }, {
    //     path: '/my',
    //     component: my,
    //     name:'my'
    // }, {
    //     path: '/shezhi',
    //     component: shezhi,
    //     name:'shezhi'
    // },
    // 详情页不用嵌套
    {       //动态路由传参数类似列表页传id跳到详情页
        path: '/page/:id',
        component: page,
        name: 'page'
    },
    // // 一开始进入到页面时要显示的主页主键
    // {
    //     path: '/', //当浏览器地址为/home时，显示Home组件的内容
    //     redirect: '/home'
    // }
]
const router = new VueRouter({
    routes
})
export default router