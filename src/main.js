// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 注意：只有插件才不需要加目录./ ，但是自己定义的文件必须加入./
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import env from './env'

// 引入路由
import router from '@/router'
// 在发请求的时候，要设置一些基础的值。根据前端的跨域方式做调整。此处比如：/a/b: /api/a/b => /a/b
axios.defaults.baseURL = ' https://mock.mengxuegu.com/mock/63498de1ba6bdb4f54a8650c/example'
// 设置超时时间
axios.defaults.timeout = 8000
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL

// 接口错误拦截代码
/*
interceptors 是拦截器
respond 是axios封装返回的，并不代表是接口返回的值
respond.data才是接口返回的值。而data是axios内部做的封装，也叫data

*/
axios.interceptors.response.use(function (response) {
  // 获取接口返回值
  let res = response.data
  // 判断状态码是否是0，  0才代表成功
  if (res.status === 0) {
    // 这个data是接口的返回值，将请求的值返回给axios
    return res.data
  // eslint-disable-next-line brace-style
  }
  // 登录拦截，判断状态码是否为10（自定义），实际项目中为1008
  else if (res.status === 10) {
    // 未登录的话，将页面跳转至登陆页面
    window.location.href = '/#/login'
  // eslint-disable-next-line brace-style
  }
  // 真正的报错信息处理
  else {
    alert(res.msg)
  }
})

// 加载插件
Vue.use(VueAxios, axios)

// 生产环境的提示，默认为false
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 使用路由，此处由于文件命名和router一样，可以省略不写
  // 但是如果不是命名为router，就要使用router:路由文件名
  router,
  render: h => h(App)
}).$mount('#app')
