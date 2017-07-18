<template>
    <div class="search">
      <header>
        <router-link to="/navcom" style="float: left;margin-left: 10%;line-height: 40px;color: #ffffff;font-weight: 400;font-size: 25px;"><<</router-link>
        <h3>查询订单</h3>
      </header>

      <div class="weui-cells" v-for="item in searchData">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>{{item.id}}.{{item.receiver_province+item.receiver_city+item.receiver_district}}</p>
            <p class="weui-media-box__desc">收货人：{{item.customer_name}}</p>
            <p class="weui-media-box__desc">收货人电话：{{item.customer_phone}}</p>
            <p class="weui-media-box__desc">下单时间：{{item.update_time}}</p>
          </div>
          <div class="weui-cell__ft">{{item.order_status}}</div>
        </div>
      </div>
          <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20" style="text-align: center">
            <img src="./../assets/loading.gif" v-if="loading">
          </div>
    </div>
</template>

<script>
  import navcom from './navcom.vue'
    export default {
        name: 'search',
        data () {
            return {
              loading:false,
              searchData: [],
              page:1,
              pagesize:8,
              busy:true,
            }
        },
      mounted () {
          this.getSearch();
      },
      methods: {
        //获取订单的数据
        getSearch(flag){
          this.loading = true;
          this.$http.post('http://www.sikedaodi.com/jikebang/api/web/index.php?r=customer/my-orders',{
            customerId:window.localStorage.getItem('customerId'),
            access_token:window.localStorage.getItem('access_token'),
          })
            .then(response=>{
              let res = response.data;
              console.log(res.data);
              this.loading = false;
              if(flag) {
                this.searchData=this.searchData.concat(res.data);//flag为true,分页的数据累加
                if(res.count==0) {//如果count的值为0就禁止滑动，不再加载数据
                  this.busy=true;
                }else {
                  this.busy=false;
                }
              }else {
                this.searchData=res.data;//第一次加载页面，数据不累加
                this.busy=false;
              }
            })
        },
        //分页功能
        loadMore(){
          this.busy=true;
          setTimeout(() => {
            this.page++;
            this.getSearch(true);
          }, 500);
        },
      },
    }
</script>

<style>
  header {
    padding: 10px 0;
    background-color: #3cc51f;
  }
  header h3{
    /*color: #3cc51f;*/
    width: 60%;
    margin: 0 auto;
    color: #ffffff;
    font-weight: 400;
    font-size: 25px;
    text-align: center;
    font-family: "微软雅黑";
  }
  .weui-media-box__desc {
    margin-top: 5px;
  }
</style>
