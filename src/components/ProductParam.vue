<template>
  <div class="nav-bar" :class="{'is_fixed':isFixed}">
    <div class="container">
      <div class="pro-title">
        {{title}}
      </div>
      <div class="pro-param">
        <a href="javascript:;">概述</a><span>|</span>
        <a href="javascript:;">参数</a><span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductParam',
  props: {
    title: String
  },
  data () {
    return {
      isFixed: false
    }
  },
  mounted () {
    // 监听滚动事件，第三个参数是行为的处理方式：true为滚动，false为冒泡
    window.addEventListener('scroll', this.initHeight)
  },
  methods: {
    initHeight () {
      // 获取滚动条滚动的高度
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // 不知道这里为什么不能使用三目运算符
      // this.isFixed = scrollTop > 152 ? true : false
      if (scrollTop > 152) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  },
  destroyed () {
    // 当不使用滚动条的时候，需要将其销毁
    window.removeEventListener('scroll', this.initHeight, false)
  }
}
</script>

<style lang="scss">
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
.nav-bar{
  height: 70px;
  line-height: 70px;
  border-top: 1px solid $colorH;
  background-color: $colorG;
  z-index: 10;
  &.is_fixed{
    position: fixed;
    top: 0;
    // 使nav-bar撑满浏览器，否则小米8这个字会跑到左上角
    width: 100%;
    // 添加阴影值： x轴 y轴  阴影模糊值  阴影颜色
    box-shadow: 0 5px 5px $colorE;
  }
  .container{
    @include flex();
    .pro-title{
      font-size: $fontH;
      color: $colorB;
      font-weight: bold;
    }
    .pro-param{
      font-size: $fontJ;
      span{
        margin: 0 10px;
      }
      a{
        color: $colorC;
      }
    }
  }
}
</style>
