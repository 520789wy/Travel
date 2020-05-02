import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)


export default new Vuex.Store({
    state: state,
    mutations:mutations,
    getters:{//类似vue中的computed计算属性的作用
        doubleCity(state){
            return state.city
        }
    }

    // actions:{
    //     changeCity(ctx,city){
    //         ctx.commit('changeCity',city)
    //     }
    // },
    
})