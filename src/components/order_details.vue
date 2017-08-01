<template>
    <div id="order_details">
      <header>
        <!--<router-link to="/search" style="float: left;margin-left: 10%;line-height: 40px;color: #ffffff;font-weight: 400;font-size: 25px;"><<</router-link>-->
        <h3>订单详情</h3>
      </header>
      <div class="weui-cells">
        <div class="weui-cells__title">订单状态</div>
        <div class="weui-cell" >
          <div class="weui-cell__bd">
            <p>订单ID：{{detailsData.id}}</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
        <div class="weui-cell" >
          <div class="weui-cell__bd">
            <p>下单时间：{{detailsData.update_time}}</p>
          </div>
          <div class="weui-cell__ft"><p style="color: #ff0000">{{detailsData.order_status}}</p></div>
        </div>
        <div class="weui-cells__title">订单商品</div>
        <div class="weui-cell" v-for="item in detailsData.products">
          <div class="weui-cell__bd">
            <p>{{item.item_name}}</p>
          </div>
          <div class="weui-cell__ft">{{item.count}}</div>
        </div>
        <div class="weui-cells__title">订单辅料</div>
        <div class="weui-cell" v-for="item in detailsData.accessories">
          <div class="weui-cell__bd">
            <p>{{item.item_name}}</p>
          </div>
          <div class="weui-cell__ft">{{item.count}}</div>
        </div>
        <div class="weui-cells__title">收货人及地址信息</div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>收货人：{{detailsData.receiver_name}}</p>
            <p>收货人电话：{{detailsData.receiver_mobile}}</p>
            <p>邮编：{{detailsData.receiver_zip}}</p>
            <p>省市区：{{detailsData.receiver_province+detailsData.receiver_city+detailsData.receiver_district}}</p>
            <p>街道地址：{{detailsData.receiver_address}}</p>
            <p>备注信息：{{detailsData.remark}}</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </div>
      <div style="text-align: center">
        <img src="./../assets/loading.gif" v-if="loading">
      </div>
    </div>
</template>

<script>
    export default {
        name: 'order_details',
        data () {
            return {
              loading:false,
              busy:true,
              detailsData:[],
            }
        },
      mounted () {
        this.getOrder_details();
      },
      methods: {
        getOrder_details() {
          this.loading = true;
          this.$http.post('http://www.sikedaodi.com/jikebang/api/web/index.php?r=customer/order-detail',{
            order_id:this.$route.query.id,
            customerId:window.localStorage.getItem('customerId'),
            access_token:window.localStorage.getItem('access_token'),
          }).then(response=>{
            let res=response.data;
            this.detailsData=res.data;
            this.loading = false;
          })
        }
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
    width: 60%;
    margin: 0 auto;
    color: #ffffff;
    font-weight: 400;
    font-size: 25px;
    text-align: center;
    font-family: "微软雅黑";
  }
</style>
