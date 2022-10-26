<template>
  <div>
    <!-- router-view  嵌套子视图 -->
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import ServiceBar from '@/components/ServiceBar'
import NavFooter from '@/components/NavFooter'
export default {
  name: 'Order',
  data () {
    return {
      title: '',
      tip: ''
    }
  },
  components: {
    NavFooter,
    ServiceBar
  }
}
</script>

<style>

</style>
