// 此文件用来管理入口
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)
const state = {
  username: '',
  cartCount: 0
}

// 导入变量
export default new Vuex.Store({
  state,
  mutations,
  actions
})
