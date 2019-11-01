import Vue from 'vue'
import 'weui'
import './assets/styles.scss'
import App from './app.vue'
import store from './store/vuex'
new Vue({
    el: '#app',
    store,
    render(h) {
        return h(App)
    }
})