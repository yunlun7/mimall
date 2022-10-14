<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from '@/storage'
export default {
  name: 'App',
  components: {

  },
  data () {
    return {

    }
  },
  mounted () {
    // storage.setItem('a', 1)

    // 往user中加入
    // storage.setItem('user', {a: 1})

    // 在user模块上加入abc属性，值为{a: 1}
    // storage.setItem('abc', {a: 1}, 'user')

    // 删除
    storage.clear('a', 'user')
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
