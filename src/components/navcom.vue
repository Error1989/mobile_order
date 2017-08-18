<template>
  <div id="navcom">
    <header>
      <h3>物 社</h3>
    </header>

    <div class="weui-grids">
      <!--banner图片-->
      <div class="banner"><img src="../assets/img/banner2.jpg" alt=""></div>

      <router-link to="/order" class="weui-grid js_grid">
        <div class="weui-grid__icon">
          <img src="../assets/img/1.png" alt="新增订单">
        </div>
        <p class="weui-grid__label">
          新增订单
        </p>
      </router-link>
      <!--<router-link to="/product" class="weui-grid js_grid">-->
        <!--<div class="weui-grid__icon">-->
          <!--<img src="../assets/img/2.png" alt="商品列表">-->
        <!--</div>-->
        <!--<p class="weui-grid__label">-->
          <!--商品列表-->
        <!--</p>-->
      <!--</router-link>-->
      <!--<router-link to="/accessory" class="weui-grid js_grid">-->
        <!--<div class="weui-grid__icon">-->
          <!--<img src="../assets/img/3.png" alt="辅料列表">-->
        <!--</div>-->
        <!--<p class="weui-grid__label">-->
          <!--辅料列表-->
        <!--</p>-->
      <!--</router-link>-->
      <router-link to="/search" class="weui-grid js_grid">
        <div class="weui-grid__icon">
          <img src="../assets/img/4.png" alt="查询订单">
        </div>
        <p class="weui-grid__label">
          查询订单
        </p>
      </router-link>
      <a href="http://weidian.com/s/204012005?wfr=c" target="_blank" class="weui-grid js_grid">
        <div class="weui-grid__icon">
          <img src="../assets/img/5.png" alt="访问微店">
        </div>
        <p class="weui-grid__label">
          访问微店
        </p>
      </a>
      <a @click="logout" class="weui-grid js_grid">
        <div class="weui-grid__icon">
          <img src="../assets/img/6.png" alt="退出登录">
        </div>
        <p class="weui-grid__label">
          退出登录
        </p>
      </a>

    </div>

  </div>

</template>

<script>
    export default {
        name: 'navcom',
        data () {
            return {

            }
        },
        mounted () {

        },
        methods: {
          //退出当前系统
          logout(){
            window.localStorage.removeItem('customerId');
            window.localStorage.removeItem('access_token');
            this.$router.push({path:'/login'});
          },

        }
    }
</script>

<style scoped>
  header {
    padding: 10px 0;
    background-color: #3cc51f;
  }
  header h3{
    /*color: #3cc51f;*/
    color: #ffffff;
    font-weight: 400;
    font-size: 25px;
    text-align: center;
    font-family: "微软雅黑";
  }
  .banner {
    width: 100%;
    height: auto;
  }
  .banner img {
    max-width:100%;
    height:auto;
  }
</style>
