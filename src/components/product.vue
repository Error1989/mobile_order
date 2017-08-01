<template>
    <div id="pruduct">
      <header>
        <!--<router-link to="/navcom" style="float: left;margin-left: 10%;line-height: 40px;color: #ffffff;font-weight: 400;font-size: 25px;"><<</router-link>-->
        <h3>商品列表</h3>
      </header>

      <div class="weui-cells" v-for="item in productData">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>{{item.id}}.{{item.name}}</p>
            <p class="weui-media-box__desc">品种：{{item.category}}/净重：{{item.pure_weight}}克/重量：{{item.weight}}克</p>
          </div>
          <div class="weui-cell__ft"><p style="color: #ff0000">{{item.price}}元</p></div>
        </div>
      </div>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20" style="text-align: center">
          <img src="./../assets/loading.gif" v-if="loading">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'product',
        data () {
            return {
              loading:false,
              productData: [],
              page:1,
              pagesize:8,
              busy:true,
            }
        },
      mounted () {
        this.getProduct();
      },
      methods: {
        //获取商品的数据
        getProduct(flag){
          this.loading = true;
          this.$http.post('http://www.sikedaodi.com/jikebang/api/web/index.php?r=product/list',{
            customerId:window.localStorage.getItem('customerId'),
            access_token:window.localStorage.getItem('access_token'),
            page:this.page,
            pagesize:this.pagesize,
          }).then(response=>{
              let res = response.data;
              this.loading = false;
              if(flag) {
                this.productData=this.productData.concat(res.data);//flag为true,分页的数据累加
                if(res.data.length<this.pagesize) {
                  this.busy=true;
                }else {
                  this.busy=false;
                }
              }else {
                this.productData=res.data;//第一次加载页面，数据不累加
                this.busy=false;
              }
            })
        },
        //分页功能
        loadMore(){
          this.busy=true;
          setTimeout(() => {
            this.page++;
            this.getProduct(true);
          }, 500);
        },
      },
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
  .weui-media-box__desc {
    margin-top: 5px;
  }
</style>
