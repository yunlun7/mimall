<template>
  <div>
    <nav-header></nav-header>
    <!-- router-view  嵌套子视图 -->
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
// 此处的@路径也可以写为 ./../
import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'
export default {
  name: 'Home',
  components: {
    NavHeader,
    NavFooter
  }
}
</script>

<style>

</style>
