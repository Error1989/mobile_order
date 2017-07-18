<template>
  <div id="app">
    <router-view></router-view>
    <div class="weui-footer">
      <p class="weui-footer__text">常州极客帮文化传媒有限公司</p>
    </div>
  </div>
</template>

<script>
  import navcom from './components/navcom.vue'
export default {
  name: 'app',
}
</script>

<style>
.weui-footer__text {
  margin-top: 40px;
}
#app {
  font-family: "宋体";
}
</style>
