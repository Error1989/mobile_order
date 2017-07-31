<template>
  <div id="app">
    <router-view></router-view>
    <div class="weui-footer">
      <p class="weui-footer__links">
        <a href="tel:4009905949" class="weui-footer__link">联系客服</a>
        <a href="javascript:void(0);" class="weui-footer__link">加盟合作</a>
      </p>
      <p class="weui-footer__text">常州极客邦文化传媒有限公司</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
.weui-footer {
  margin-top: 40px;
}
#app {
  font-family: "宋体";
}
</style>
