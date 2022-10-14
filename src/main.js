// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入路由
import router from '@/router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 使用路由，此处由于文件命名和router一样，可以省略不写
  // 但是如果不是命名为router，就要使用router:路由文件名
  router,
  components: { App },
  template: '<App/>'
})
