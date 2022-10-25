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
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="username" @click="logout">退出</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="goToCart"><span class="icon-cart"></span>购物车({{cartCount}})</a>
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
            <div class="children">
              <!-- 使用ul标签比较合适循环列表，因为ul的结构比较对称 -->
              <ul>
                <li class="product" v-for="(item, index) in phoneList" :key="index">
                  <!-- target：使得网页在新的标签页中打开 -->
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <!-- 价格部分需要使用过滤器 ，因为数据返回的只是金额数值-->
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children">
              <ul>
                <li class="product">
                  <!-- target：使得网页在新的标签页中打开 -->
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4ef3713521fb9d7f114aa8bb152e220d.png?thumb=1&w=200&h=138&f=webp&q=90" alt="">
                    </div>
                    <div class="pro-name">小米 Civi2</div>
                    <div class="pro-price">2399元起</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <!-- target：使得网页在新的标签页中打开 -->
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="./../assets/imgs/nav-img/nav-3-1.jpg" alt="">
                    </div>
                    <div class="pro-name">小米 壁画电视 65英寸</div>
                    <div class="pro-price">23499元起</div>
                  </a>
                </li>
              </ul>
            </div>
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
// import {mapState} from 'vuex'
export default {
  name: 'NavHeader',
  data () {
    return {
      // 读取用户名
      phoneList: []
    }
  },
  // 定义一个计时器来解决延迟问题
  computed: {
    username () {
      return this.$store.state.username
    },
    cartCount () {
      return this.$store.state.cartCount
    }
    // 使用mapState来解决延时问题
    // ...mapState(['username', 'cartCount'])
  },
  // 定义一个过滤器
  filters: {
    // currency在vue1.0的时候，是一个自带的内置过滤器。2.0之后需要手动书写
    currency (val) {
      if (!val) return '0.00'
      return '￥' + val.toFixed(2) + '元'
    }
  },
  mounted () {
    this.getProductList()
    let params = this.$route.params
    // 如果从登陆页面跳转过来的，才需要重新加载数据
    if (params && params.from === 'login') {
      this.getCartCount() // 需要重新加载购物车数据，因为退出登录的功能会清除掉数据
    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    getProductList () {
    // 接口名称就是products，使用代理的方式
    // 采用get方式请的话，使用params传参，若使用post就直接写
      this.axios.get('/products', {
        params: {
          categoryId: '100012',
          pageSize: 6
        }
      }).then((res) => {
      // 设置获取到数据的最大值
      // if (res.list.length >= 6) {
      //   this.phoneList = res.list.slice(0, 6)
      // }
        this.phoneList = res.list
      })
    },
    // 拉取购物车信息
    getCartCount () {
    // 调用接口，拉取数据：get   推送数据：post
      this.axios.get('/carts/products/sum').then((res) => {
      // to-do  保存到vuex中
        this.$store.dispatch('saveCartCount', res)
      })
    },
    // 退出登录
    logout () {
      this.axios.post('/user/logout').then(() => {
        this.$message.success('退出成功')
        // 清空数据
        this.$cookie.set('userId', '', {expires: '-1'})
        this.$store.dispatch('saveUserName', '') // 清空用户名信息
        this.$store.dispatch('saveCartCount', 0) // 清空购物车数量
      })
    },
    goToCart () {
    // 路由跳转
      this.$router.push('/cart')
    }
  }
}
</script>

<style lang="scss">
$img: '../assets/imgs';
  @import './../assets/scss/base.scss';
  @import './../assets/scss/mixin.scss';
  @import './../assets/scss/config.scss';
  .header{
  .nav-topbar{
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #B0B0B0;
    .container{
    // 调用封装好的mixin.scss中的方法
    @include flex();
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
      background-color: $colorA;
      text-align: center;
      color: #ffffff;
      margin-right: 0;
      .icon-cart{
        // 使用.scss文件引入，提高代码复用率
        @include bgImg(16px, 12px, '#{$img}/icon-cart-checked.png');
        margin-right: 4px;
      }
    }
  }
  }
  .nav-header{
    .container{
      position: relative;
      height: 112px;
      // 设置居中布局
      // 调用封装好的mixin.scss中的方法
      @include flex();
      .header-menu{
        // 行内块级元素
        display: inline-block;
        width: 643px;
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
            color: $colorA;
            .children{
              height: 220px;
              // 当鼠标移动到对应位置时，设置透明度为1，即可见
              opacity: 1;
            }
          }
          .children{
              position: absolute;
              top: 112px;
              left: 0px;
              // 和安全区域的宽度一致
              width: 1226px;
              height: 0;
              border-bottom: 1px solid #e5e5e5;
              // 设置透明度，即不可见
              opacity: 0;
              // 当不显示的时候，将此快区域隐藏起来
              overflow: hidden;
              // 添加动画效果
              transition: height .5s;
              // 设置阴影
              box-shadow: 0px 7px, 6px, 0px rgba(0, 0, 0, 0.11);
              // 添加背景色，防止因为层级关系被遮住了
              z-index: 10;
              background-color: #ffffff;
              .product{
                position: relative;
                float: left;
                // 当不知道宽度的具体数值的时候，就可以使用百分比的形式表示
                width: 16.6%;
                height: 220px;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
                a{
                  // 此处设置a标签是因为a下面的div是块级标签，而a标签是行内的，无法撑开
                  display: inline-block;
                }
              img{
                  // 只设置其中一种就可以了，让其自然撑开
                  width: auto;
                  height: 110px;
                  margin-top: 26px;
                }
              .pro-img{
                  height: 137px;
              }
              .pro-name{
                // 加粗
                  font-weight: bold;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: $colorB;
              }
              .pro-price{
                  color: $colorA;
              }
              // 添加一个伪类，在每一个产品右边加一条线
              &:before{
                  content:' ';
                  position: absolute;
                  top: 28px;
                  right: 0;
                  border-left: 1px solid $colorF;
                  height: 100px;
                  width: 1px;
              }
              // 不想要最后的一根线的办法：
              &:last-child:before{
                // 将其样式置为空，即可去除掉样式了
                display: none;
              }
            }
          }
        }
      }
      .header-search{
        width: 319px;
        .wrapper{
          height: 50px;
          border: 1px solid #E0E0E0;
          // flex布局可以控制图标
          display: flex;
          align-items: center;
          input{
            border: none;
            border-right: 1px solid #e0e0e0;
            // 使文本输入框的宽度固定
            box-sizing: border-box;
            // 此处的宽高不可以不设置，因为input自身是有默认的值的
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a{
            @include bgImg(18px, 18px, '#{$img}/icon-search.png');
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>
