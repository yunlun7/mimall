<template>
  <div>
    <order-header></order-header>
    <!-- router-view  嵌套子视图 -->
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from '@/components/OrderHeader'
import NavFooter from '@/components/NavFooter'
export default {
  name: 'Order',
  components: {
    OrderHeader,
    NavFooter
  }
}
</script>

<style>

</style>
