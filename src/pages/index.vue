<!-- 这是一个首页
尽可能的将能复用的组件复用好
-->
<template>
  <div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from '@/components/ServiceBar'
export default{
  name: 'Index',
  components: {
    ServiceBar
  }
}
</script>

<style>
</style>
