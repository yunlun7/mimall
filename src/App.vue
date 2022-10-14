<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      res: {}

    }
  },
  mounted () {
    // this.axios是通过vue-axios，axios上挂载到vue实例上，因此可以使用这个作用于去通过.get()方法
    // 请求数据文件
    /* 本地加载请求静态json文件的形式
      this.axios.get('/mock/user/login.json').then((res) => {
      this.res = res
    }) */

    // 通过easy-mock 平台实现数据mock
    this.axios.get('/mock/user/login.json').then((res) => {
      this.res = res
    })
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
