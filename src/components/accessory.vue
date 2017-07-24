<template>
    <div id="accessory">
      <header>
        <router-link to="/navcom" style="float: left;margin-left: 10%;line-height: 40px;color: #ffffff;font-weight: 400;font-size: 25px;"><<</router-link>
        <h3>辅料列表</h3>
      </header>

          <div class="weui-cells" v-for="item in accessoryData">
            <div class="weui-cell">
              <div class="weui-cell__bd">
                <p>{{item.id}}.{{item.name}}</p>
                <p class="weui-media-box__desc">重量：{{item.weight}}克</p>
              </div>
              <div class="weui-cell__ft">{{item.price}}元</div>
            </div>
          </div>
          <div style="text-align: center">
            <img src="./../assets/loading.gif" v-if="loading">
          </div>
      </div>

</template>

<script>
    export default {
        name: 'accessory',
        data () {
            return {
                loading:false,
                accessoryData:[],
                page:1,
                pagesize:8,
                busy:true,
            }
        },
      mounted () {
           this.getAccessory();
      },
      methods: {
            //获取辅料的数据
            getAccessory(){
              this.loading = true;
              this.$http.post('http://www.sikedaodi.com/jikebang/api/web/index.php?r=product/accessory-list',{
                  page:this.page,
                  pagesize:this.pagesize,
              }).then(response=>{
                    let res = response.data;
                      this.accessoryData=res.data;
                      this.loading = false;
                })
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
