import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        author: 'jing',
        gallery: {
            // 画廊状态
            status: false,
            // 画廊图片地址
            imgUrl: ""
        },
        toast: {
            // 加载圈圈状态
            status: false
        }
    },
    mutations: {
        setGallery(state, newValue) {
            state.gallery = newValue
        },
        setToast(state, newValue) {
            state.toast = newValue
        }
    },
    actions: {
        setGallery(context, newValue) {
            context.commit('setGallery', newValue)
        },
        setToast(context, newValue) {
            context.commit('setToast', newValue)
        }
    },
    getters: {
        getGallery(state) {
            return state.gallery
        },
        getToast(state) {
            return state.toast
        }
    }
})