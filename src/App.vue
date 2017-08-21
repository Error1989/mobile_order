<template>
  <div id="app">
    <scroller delegate-id="myScroller" :on-refresh="refresh" ref="my_scroller">
      <router-view></router-view>
      <div class="weui-footer">
        <p class="weui-footer__links">
          <a href="tel:4009905949" class="weui-footer__link">联系客服</a>
          <a href="tel:4009905949" class="weui-footer__link">加盟合作</a>
        </p>
        <p class="weui-footer__text">北京物社文化传媒有限公司</p>
      </div>
    </scroller>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      items: [],
    }
  },
  mounted () {

  },
  ready() {

    for (let i = 1; i <= 20; i++) {
      this.items.push(i + ' - keep walking, be 2 with you.')
    }
    this.top = 1;
    this.bottom = 20;

    setTimeout(() => {
      /* 下面2种方式都可以调用 resize 方法 */
      // 1. use scroller accessor
      //$scroller.get('myScroller').resize();

      // 2. use component ref
      this.$refs.my_scroller.resize();
    })
  },
  methods: {
    //下拉刷新功能
    refresh() {
      setTimeout(() => {
        let start = this.top - 1;

        for (let i = start; i > start - 10; i--) {
          this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
        }

        this.top = this.top - 10;

        /* 下面3种方式都可以调用 finishPullToRefresh 方法 */

        // this.$broadcast('$finishPullToRefresh')
        //$scroller.get('myScroller').finishPullToRefresh()
        this.$refs.my_scroller.finishPullToRefresh();
        location.reload();
      }, 1500)
    },

  }
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
