// 商城Vuex-actions
export default {
  saveUserName (context, username) {
    // 触发commit
    context.commit('saveUserName', username)
  },
  saveCartCount (context, cartCount) {
    // 触发commit
    context.commit('saveCartCount', cartCount)
  }
}
