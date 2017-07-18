<template>
  <div id="navcom">
    <header>
      <h3>嗑了么</h3>
    </header>

    <div class="weui-grids">
      <a @click="order" class="weui-grid js_grid">
        <div class="weui-grid__icon">
          <img src="../assets/img/1.png" alt="新增订单">
        </div>
        <p class="weui-grid__label">
          新增订单
        </p>
      </a>
      <router-link to="/product" class="weui-grid js_grid">
        <div class="weui-grid__icon">
          <img src="../assets/img/2.png" alt="商品列表">
        </div>
        <p class="weui-grid__label">
          商品列表
        </p>
      </router-link>
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
          $(".swiper-container").swiper(config)
        },
        methods: {
          //退出当前系统
          logout(){
            window.localStorage.removeItem('customerId');//清空customerId
            window.localStorage.removeItem('access_token');//清空access_token
            this.$router.push({path:'/login'});
            location.reload()
          },
          order () {
            this.$router.push({path:'/order'});
            location.reload()
          }
        }

    }
</script>

<style>
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

</style>
