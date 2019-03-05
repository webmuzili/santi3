import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      //设置全局的url可以方便后期的维护
      apiUrl:"http://192.168.1.185:3000",
      cartCount:0
  },
  mutations: {
      add(state,count){
          state.cartCount=count;
      },
      sub(state,count){
        state.cartCount+=count;
      },
      clear(state,count){
        state.cartCount=0;
      },
  },
  getters:{
    showCarCount(state){
        return state.cartCount
    }
  },
  actions: {

  }
})
