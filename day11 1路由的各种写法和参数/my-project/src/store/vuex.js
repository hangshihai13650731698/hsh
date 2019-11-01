import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) //仓库
export default new Vuex.Store({
    state: {
        author: 'jing',
      
        seachText: {
            value:''
        }
    },
    mutations: {
        setText(state, data) {
            state.seachText = data
        }
    },
    actions: {
        setText(context, data) {
            // 触发mutations
            context.commit('setText', data)
        }
    },
    getters: {
        getText(state) {
            return state.seachText
        },
    }
})