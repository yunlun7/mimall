<!-- 这是一个首页
尽可能的将能复用的组件复用好
-->
<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <!-- 这一部分是左边透明的菜单栏 -->
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, i) in item" :key="i">
                    <a :href="sub ? '/#product/' + sub.id : ''">
                      <img :src="sub ? sub.img : require('./../assets/imgs/item-box-1.png')">
                      {{sub ? sub.name : '小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <!-- 这部分是轮播图 -->
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a :href="'/#/product/' + item.id"><img :src="item.img"></a>
          </swiper-slide>
              <!-- Optional controls -->
              <!-- 这是分页器 -->
          <div class="swiper-pagination"  slot="pagination"></div>
              <!-- 这是左箭头，前一页 -->
          <div class="swiper-button-prev" slot="button-prev"></div>
              <!-- 这是右箭头，下一页 -->
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a :href="'/#/product/' + item.id" v-for="(item, index) in adsList" :key="index">
          <img :src="item.img" alt="">
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img src="./../assets/imgs/banner-1.png" alt="">
        </a>
      </div>
    </div>
    <div class="product-box">
        <div class="container">
          <h2>手机</h2>
          <div class="wrapper">
            <div class="banner-left">
              <a href="/#/product/">
                <img src="./../assets/imgs/mix-alpha.jpg" alt="">
              </a>
            </div>
            <div class="list-box">
              <div class="list" v-for="(arr, index) in phoneList" :key="index">
                <div class="item" v-for="(item, index) in arr" :key="index">
                  <span :class="{'new-pro':index%2 == 0}">新品</span>
                  <div class="item-img">
                    <img :src="item.mainImage" alt="">
                  </div>
                  <div class="item-info">
                    <h3>{{item.name}}</h3>
                    <p>{{item.subtitle}}</p>
                    <p class="price">{{item.price}}元</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from '@/components/ServiceBar'
// 引入轮播组件
import {swiper, swiperSlide} from 'vue-awesome-swiper'
// 导入swiper的样式
import 'swiper/dist/css/swiper.css'
export default{
  name: 'Index',
  components: {
    ServiceBar,
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        // 控制自动播放
        autoplay: true,
        // 循环点击播放
        loop: true,
        /*     以下内容在swiper中文网中都有，有时间需要多去研究一下              */
        // 需要动画，指定动画效果为cube
        effect: 'cube',
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        // 指定分页
        pagination: {
          el: '.swiper-pagination',
          // 此参数为true，是点击分页器的指示点分页器会控制swiper切换
          clickable: true
        },
        // 导航，前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      // 定义一个循环的列表
      slideList: [
        {
          id: '42',
          // img: './../assets/imgs/slider/slide-1.jpg'
          // 在script标签中，引入图片需要使用require获取
          img: require('./../assets/imgs/slider/slide-1.jpg')
        },
        {
          id: '45',
          img: require('./../assets/imgs/slider/slide-2.jpg')
        },
        {
          id: '46',
          img: require('./../assets/imgs/slider/slide-3.jpg')
        },
        {
          id: '',
          img: require('./../assets/imgs/slider/slide-4.jpg')
        },
        {
          id: '',
          img: require('./../assets/imgs/slider/slide-5.jpg')
        }
      ],
      // 定义一个二维数组，放在菜单栏中
      menuList: [
        [
          {
            id: '30',
            img: require('./../assets/imgs/item-box-1.png'),
            name: '小米CC9'
          }, {
            id: '31',
            img: require('./../assets/imgs/item-box-2.png'),
            name: '小米8青春版'
          }, {
            id: '32',
            img: require('./../assets/imgs/item-box-3.jpg'),
            name: 'Redmi K20 Pro'
          }, {
            id: '33',
            img: require('./../assets/imgs/item-box-4.jpg'),
            name: '移动4G专区'
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      // 定义一个广告位数据
      adsList: [
        {
          id: 33,
          img: require('./../assets/imgs/ads/ads-1.png')
        }, {
          id: 48,
          img: require('./../assets/imgs/ads/ads-2.jpg')
        }, {
          id: 45,
          img: require('./../assets/imgs/ads/ads-3.png')
        }, {
          id: 47,
          img: require('./../assets/imgs/ads/ads-4.jpg')
        }
      ],
      // 定义手机列表数据
      phoneList: [

      ]
    }
  },
  // 初始化商品
  mounted () {
    this.init()
  },
  methods: {
  // 主要是初始化产品数据
    init () {
      this.axios.get('/products', {
        params: {
          categoryId: 100012,
          pageSize: 8
        }
      }).then((res) => {
        // 生成二维数组对数组进行切割，0-4是第一个数组，4-8是第二个数组
        this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)]
      })
    }
  }
}
</script>

<style lang="scss">
@import './../assets/scss/mixin.scss';
.index{
  .swiper-box{
    .nav-menu{
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      padding: 26px 0;
      // 此处不能通过opacity来控制透明度，因为他会连带文字一起变透明，可以选择在浏览器控制台中调整颜色来控制透明度
      background-color: #55555a80;
      // 添加一个盒模型，控制高度为一个定制，不会被其他元素撑开
      box-sizing: border-box;
      .menu-wrap{
        .menu-item{
          height: 50px;
          line-height: 50px;
          // 因为a标签的优先级高于父元素，因此需要另外的书写样式
          a{
            position: relative;
            display: block;
            font-size: 16px;
            color: #ffffff;
            padding-left: 30px;
            // 使用伪类的方法加入右箭头
            &:after{
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: ' ';
              @include bgImg(10px, 15px, './../assets/imgs/icon-arrow.png')
            }
          }
          &:hover{
            background-color:#FF6600;
            // 打开菜单栏
            .children{
              display: block;
            }
          }
          .children{
            display: none;
            width: 962px;
            height: 451px;
            background-color: #ffffff;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid #E5E5E5;
            ul{
              display: flex;
              justify-content: space-between;
              height: 75px;
              li{
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }
              a{
                color: #333333;
                font-size: 14px;
                vertical-align: middle;
                img{
                  width: 42px;
                  height: 35px;
                  margin-right: 15px;
                }
              }
            }
          }
        }
      }
    }
    // 浏览器自定义的类名，这一步是将默认值去掉，给swiper自定义一个宽度
    .swiper-container{
      height: 451px;
      .swiper-button-prev{
        left: 274px;
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads-box{
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a{
      width: 296px;
      height: 167px;
    }
  }
  .banner{
    margin-bottom: 50px;
  }
  .product-box{
    background-color: #F5F5F5;
    padding: 30px 0 50px;
    h2{
      font-size: 22px;
      height: 21px;
      line-height: 21px;
      color: #333333;
      margin-bottom: 20px;
    }
    .wrapper{
      display: flex;
      .banner-left{
        margin-right: 16px;
        img{
          width: 224px;
          height: 619px;
        }
      }
      .list-box{
        .list{
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child{
            margin-bottom: 0;
          }
          .item{
            width: 236px;
            height: 302px;
            background-color: #ffffff;
            text-align: center;
            span{
              display: inline-block;
              width: 67px;
              height: 24px;
              font-size: 14px;
              line-height: 24px;
              color: #ffffff;
              &.new-pro{
                background-color: #7ECF68;
              }
              &.kill-pro{
                background-color: #E82626;
              }

            }
          }
          .item-img{
            img{
              width: 100%;
              height: 195px
            };
          }
          .item-info{
            h3{
              font-size: 14px;
              color: #333333;
              line-height: 14px;
              // 加粗
              font-weight: bold;
            }
            p{
              color: #999999;
              line-height: 13px;
              margin: 6px auto 13px;
            }
            .price{
              color: #F20A0A;
              font-size: 14px;
              font-weight: bold;
              // 添加点击功能
              cursor: pointer;
              // 添加一个加入购物车的功能
              &:after{
                @include bgImg(22px, 22px, '../assets/imgs/icon-cart-hover.png');
                content: ' ';
                margin-left: 5px;
                vertical-align: middle;
              }
            }
          }
        }
      }
    }
  }
}
</style>
