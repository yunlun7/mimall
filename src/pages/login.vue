<template>
  <div class="login">
    <div class="container">
      <a href="/#/index"><img src="../assets/imgs/login-logo.png" alt=""></a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">帐号登录</span><span class="sep-line">|</span><span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入帐号" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" >手机短信登录/注册</div>
            <div class="reg" @click="register">立即注册<span>|</span>忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="https://www.imooc.com/u/1343480" target="_blank">河畔一角主页</a><span>|</span>
        <a href="https://coding.imooc.com/class/113.html" target="_blank">Vue全栈课程</a><span>|</span>
        <a href="https://coding.imooc.com/class/236.html" target="_blank">React全家桶课程</a><span>|</span>
        <a href="https://coding.imooc.com/class/343.html" target="_blank">微信支付专项课程（H5+小程序/云+Node+MongoDB）</a>
      </div>
      <p class="copyright">Copyright ©2019 mi.futurefe.com All Rights Reserved.</p>
    </div>
  </div>
</template>
<script>
// 当变量太多的话，可以使用mapActions来进行结构
// import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      // 此处的参数本身就是挂载在vue中的实例this对象上的
      username: '',
      password: '',
      userId: '',
      // 测试用，查看返回哪些数据
      res: {}
    }
  },
  methods: {
    login () {
      // 参数
      let {username, password} = this
      this.axios.post('/user/login', {
        username,
        password
      }).then((res) => {
        // this.res = res  查看返回结果
        // 设置用户id， 使用权限时间为一个月
        this.$cookie.set('userId', res.id, {expires: 'Session'})
        // 派发action，传递的参数res.username一定不能忘记
        this.$store.dispatch('saveUserName', res.username)

        // 使用mapActions结构后的方法
        // this.saveUserName(res.username)
        this.$router.push({
          /* query方法： 这种方法在url中是可以看得见的，不安全
          path: '/index'
          query:{
            from: 'login'
          }
          */

          // params方法： 这种方法在url中看不见
          name: 'index', // 路由名称
          params: {
            from: 'login' // 用于退出登录功能实现判断
          }
        })
      })
    },

    // 将saveUserName接构成一个方法
    // ...mapActions(['saveUserName']),

    register () {
      this.axios.post('/user/register', {
        username: 'aaa',
        password: 'aaa',
        email: 'aaa@163.com'
      }).then(() => {
        // 提示框
        this.$message.success('注册成功！')
      })
    }
  }
}
</script>
<style lang="scss">
.login{
  &>.container{
    height:113px;
    img{
      width:auto;
      height:100%;
    }
  }
  .wrapper{
    background:url('../assets/imgs/login-bg.jpg') no-repeat center;
    .container{
      height:576px;
      .login-form{
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width:410px;
        height:510px;
        background-color:#ffffff;
        position:absolute;
        bottom:29px;
        right:0;
        h3{
          line-height:23px;
          font-size:24px;
          text-align:center;
          margin:40px auto 49px;
          .checked{
            color:#FF6600;
          }
          .sep-line{
            margin:0 32px;
          }
        }
        .input{
          display:inline-block;
          width:348px;
          height:50px;
          border:1px solid #E5E5E5;
          margin-bottom:20px;
          input{
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn{
          width:100%;
          line-height:50px;
          margin-top:10px;
          font-size:16px;
        }
        .tips{
          margin-top:14px;
          display:flex;
          justify-content:space-between;
          font-size:14px;
          cursor:pointer;
          .sms{
            color:#FF6600;
          }
          .reg{
            color:#999999;
            span{
              margin:0 7px;
            }
          }
        }
      }
    }
  }
  .footer{
    height:100px;
    padding-top:60px;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
    }
    .copyright{
      margin-top:13px;
    }
  }
}
</style>
