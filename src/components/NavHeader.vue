<!-- 此部分主要实现顶部和导航栏 -->
<template>
  <div class="header">
    <div class="nav-topbar">
      <!-- container是定义安全距离的 -->
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <!-- container是定义安全距离的 -->
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavHeader'
}
</script>

<style lang="scss">
$img: '../assets/imgs';
  @import './../assets/scss/base.scss';
  .header{
  .nav-topbar{
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #B0B0B0;
    .container{
    display: flex;
    // 两边对齐
    justify-content: space-between;
    // 水平放居中
    align-items: center;
    // 定义a标签
    a{
      display: inline-block;
      // 虽然上面也是这个颜色，但是只有span标签才有用，a标签的样式优先级大于上面的class样式
      color:#B0B0B0;
      // 设置间距
      margin-right: 17px;
    }
    .my-cart{
      width: 100px;
      background-color: #FF6600;
      text-align: center;
      color: #ffffff;
      .icon-cart{
        display: inline-block;
        width: 23px;
        height: 12px;
        // 由于使用的是span标签，所以可以这样引用,使用no-repeat填充，center控制居中
        background:url('#{$img}/icon-cart-checked.png') no-repeat center;
        // 设置填充，使其填满
        background-size: contain;
        margin-right: 4px;
      }
    }
  }
  }
  .nav-header{
    .container{
      height: 112px;
      // 设置居中布局
      display: flex;
      justify-content: space-between;
      align-items: center;
      // logo可以认为是相框，而a标签可以认为是相册，应为它内部是轮播的
      .header-logo{
        display: inline-block;
        width: 55px;
        height: 55px;
        // 加一个背景颜色，防止图片在页面上看不出来
        background-color: #FF6600;
        // 设置两张图片
        a{
          display: inline-block;
          // 要将图片完整的放进去的话，宽应该是上面样式的两倍
          width: 110px;
          // 高度可要可不要
          height: 55px;
          // 此处生成一个伪类，因为是两张图片，需要占位
          &:before{
            // content 这一部分很重要
            content: '';
            display: inline-block;
            background:url('#{$img}/mi-logo.png') no-repeat center;
            background-size: 55px;
            // 让动画效果连续起来
            transition: margin .2s;
          }
          &:after{
            // content 是占位的，这一部分很重要，如果不加的话就显示不了
            content: '';
            display: inline-block;
            background:url('#{$img}/mi-home.png') no-repeat center;
            background-size: 55px;
          }
          &:hover:before{
            margin-left: -55px;
            // transition、transform等是css3中的样式, transition是过渡元素，可以指定元素某一个属性，控制属性在某一个时间段内过渡
            transition: margin .2s;
          }
        }
      }
      .header-menu{
        // 行内块级元素
        display: inline-block;
        // width: 200px;
        padding-left: 209px;
        .item-menu{
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span{
            // 使得鼠标放上去后，会带上小手的符号
            cursor: pointer;
          }
          // 这个hover是控制item-menu的
          &:hover{
          }
        }
      }
      .header-search{
        width: 319px;
        .wrapper{
          height: 50px;
          border: 1px solid #E0E0E0;
          display: flex;
          align-items: center;
          input{
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a{
          }
        }
      }
    }
  }
}
</style>
