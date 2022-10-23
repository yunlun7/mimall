// 商城Vuex-mutations
export default {
  saveUserName (state, username) {
    // 存储
    state.username = username
  },
  saveCartCount (state, cartCount) {
    // 存储
    state.cartCount = cartCount
  }
}
