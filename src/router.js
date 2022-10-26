// 动态路由配置
import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
// import Login from './pages/login'
// import Product from './pages/product'
// import Detail from './pages/detail'
// import Cart from './pages/cart'
// import Order from './pages/order'
// import OrderConfirm from './pages/orderConfirm'
// import OrderList from './pages/orderList'
// import OrderPay from './pages/orderPay'
// import AliPay from './pages/alipay'

// 加载插件固定的语法，这样代表已经将vue插件加载进去了
Vue.use(Router)

// 导入对象，将其路由导出来
export default new Router({
  // routes是子路由列表
  routes: [
    {
      // 路由路径
      path: '/',
      // 组件名字，先使其加载home组件
      name: 'home',
      // 引入组件，这里的component不能加s
      component: Home,
      // 加入一个重定向，是网页默认加载index
      redirect: '/index',
      // redirect: '/login',
      // 加载子路由
      children: [
        {
          // 引入首页
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          // 引入产品站，此处是一个动态的子路由
          path: '/product/:id',
          name: 'product',
          component: () => import('./pages/product.vue') // 路由按需加载方案二
          // component: resolve => require(['./pages/product.vue'], resolve) // 路由按需加载方案一
        },
        {
          // 引入详情页面,此处是一个动态的子路由
          path: '/detail/:id',
          name: 'detail',
          component: () => import('./pages/detail.vue')
        }
      ]
    },
    {
      // 定义登录路由
      path: '/login',
      name: 'login',
      component: () => import('./pages/login.vue')
    },
    // 因为部分的页面视图和home渲染的不一样，需要再定义一个路由
    {
      // 定义购物车路由
      path: '/cart',
      name: 'cart',
      component: () => import('./pages/cart.vue')
    },
    {
      // 定义订单页面
      path: '/order',
      name: 'order',
      component: () => import('./pages/order.vue'),
      children: [
        {
          // 订单详情
          path: 'confirm',
          name: 'OrderConfirm',
          component: () => import('./pages/orderConfirm.vue')
        },
        {
          // 订单列表
          path: 'list',
          name: 'OrderList',
          component: () => import('./pages/orderList.vue') // 路由按需加载方案二
        },
        {
          // 订单支付
          path: 'pay',
          name: 'OrderPay',
          component: () => import('./pages/orderPay.vue')
        },
        {
          path: 'alipay',
          name: 'AliPay',
          component: () => import('./pages/alipay.vue')
        }
      ]
    }
  ]
})
