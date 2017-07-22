<template>
  <div id="message">
    <header>
      <router-link to="/navcom" style="float: left;margin-left: 10%;line-height: 40px;color: #ffffff;font-weight: 400;font-size: 25px;"><<</router-link>
      <h3>新增订单</h3>
    </header>

      <!--<div class="weui-panel weui-panel_access">-->
        <!--<div class="weui-panel__hd">商品选择：</div>-->
            <!--<div style="text-align: center">-->
                  <!--<a class="weui-btn weui-btn_mini weui-btn_primary" @click="productsPop" style="margin-left: 8%;margin-right: 8%">+</a>-->
                  <!--<a class="weui-btn weui-btn_mini weui-btn_warn" @click="productsDelete" style="margin-left: 8%;margin-right: 8%">-</a>-->
                <!--</div>-->
        <!--<div class="weui-flex">-->
                <!--<div class="weui-flex__item productsList">-->
                  <!--<div class="placeholder">-->
                    <!--<h4 class="weui-media-box__title">名称</h4>-->
                    <!--<select class="products" v-model="products.id">-->
                      <!--<option>方罐肉脯</option>-->
                      <!--<option>嗑了么黑南瓜子</option>-->
                      <!--<option>三川黑南瓜子</option>-->
                      <!--<option>冰溪葵瓜子</option>-->
                      <!--<option>波波葵瓜子</option>-->
                      <!--<option>蛋解葵瓜子</option>-->
                      <!--<option>婚礼葵瓜子</option>-->
                      <!--<option>嘉壹度葵瓜子</option>-->
                      <!--<option>杰记葵瓜子</option>-->
                      <!--<option>嗑了么五香味葵瓜子</option>-->
                      <!--<option>拉拉葵瓜子</option>-->
                      <!--<option>领投会葵瓜子</option>-->
                      <!--<option>民生葵瓜子</option>-->
                      <!--<option>牛首山（黄）葵瓜子</option>-->
                      <!--<option>牛首山（蓝）葵瓜子</option>-->
                      <!--<option>青音葵瓜子</option>-->
                      <!--<option>软软葵瓜子</option>-->
                      <!--<option>十三妹葵瓜子</option>-->
                      <!--<option>小狗钱钱葵瓜子</option>-->
                      <!--<option>硬腿子葵瓜子</option>-->
                      <!--<option>足球葵瓜子</option>-->
                      <!--<option>嗑了么原味葵瓜子</option>-->
                      <!--<option>嗑了么圆罐肉脯</option>-->
                    <!--</select>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class="weui-flex__item products_countList">-->
                  <!--<div class="placeholder">-->
                    <!--<h4 class="weui-media-box__title">数量</h4>-->
                    <!--<input type="number" class="products_count" v-model="products.count">-->
                  <!--</div>-->
                <!--</div>-->
        <!--</div>-->
        <!--<div class="weui-panel__hd">辅料选择：</div>-->
            <!--<div style="text-align: center">-->
              <!--<a class="weui-btn weui-btn_mini weui-btn_primary" type="submit" @click="accessoriesPop" style="margin-left: 8%;margin-right: 8%">+</a>-->
              <!--<a class="weui-btn weui-btn_mini weui-btn_warn" type="submit" @click="accessoriesDelete" style="margin-left: 8%;margin-right: 8%">-</a>-->
            <!--</div>-->
        <!--<div class="weui-flex">-->
            <!--<div class="weui-flex__item accessoriesList">-->
              <!--<div class="placeholder">-->
                <!--<h4 class="weui-media-box__title">名称</h4>-->
                <!--<select class="accessories" v-model="accessories.id">-->
                  <!--<option>纸箱</option>-->
                  <!--<option>手拎袋</option>-->
                <!--</select>-->
              <!--</div>-->
           <!--</div>-->
            <!--<div class="weui-flex__item accessories_countList">-->
              <!--<div class="placeholder">-->
                <!--<h4 class="weui-media-box__title">数量</h4>-->
                <!--<input type="number" class="accessories_count" v-model="accessories.count">-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
      <!--</div>-->

    <div class="weui-cells weui-cells_form">
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">姓名：</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" pattern="[0-9]*" placeholder="请输入收货人姓名" v-model.trim="receiver_name">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">手机号：</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="tel" pattern="[0-9]*" placeholder="请输入收货人的手机号" v-model.trim="receiver_mobile">
        </div>
      </div>
      <div data-toggle="distpicker">
        <div class="weui-cell">
          <div class="weui-cell__hd"><label class="weui-label">省：</label></div>

            <div class="weui-cell__bd">
              <select class="form-control" style="width: 120px;height:26px" id="receiver_province" v-model="receiver_province"></select>
            </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd"><label class="weui-label">市：</label></div>

          <div class="weui-cell__bd">
            <select class="form-control" style="width: 120px;height:26px" id="receiver_city" v-model="receiver_city"></select>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd"><label class="weui-label">区：</label></div>

          <div class="weui-cell__bd">
            <select class="form-control" style="width: 120px;height:26px" id="receiver_district" v-model="receiver_district"></select>
          </div>
        </div>
      </div>

      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">地址：</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" pattern="[0-9]*" placeholder="请输入收货人的街道地址" v-model="receiver_address">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">邮编：</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入邮政编号" v-model.trim="receiver_zip">
        </div>
      </div>

      <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <textarea class="weui-textarea" placeholder="请在此处输入备注信息" rows="3" v-model="remark"></textarea>
            <div class="weui-textarea-counter"><span>0</span>/200</div>
          </div>
        </div>
      </div>
    </div>
    <button type="submit" class="weui-btn weui-btn_primary weui-flex__item " v-if="receiver_name&&receiver_mobile&&receiver_province&&receiver_city&&receiver_district&&receiver_address&&receiver_zip" @click="onSubmit">提交信息</button>
    <button type="submit" class="weui-btn weui-btn_primary weui-flex__item weui-btn_disabled" v-else>提交信息</button>
  </div>
</template>
<script>
  import navcom from './navcom.vue'
  export default {
    name: 'message',
    data () {
      return {
        products: {"id":[],"count":[]},
        accessories: {"id":[],"count":[]},
        receiver_name: '',
        receiver_mobile: '',
        receiver_address: '',
        receiver_zip: '',
        remark: '',
        receiver_province: '',
        receiver_city: '',
        receiver_district: '',
      }
    },
    mounted () {

    },
    methods: {
      productsPop () {
        $('.products:first').clone(true).appendTo('.productsList');
        $('.products_count:first').clone(true).appendTo('.products_countList');
      },
      productsDelete () {
        if($('.products').length>1 && $('.products_count').length>1){
          $('.products:last').remove();
          $('.products_count:first').remove();
        }else{
            return;
        }
      },
      accessoriesPop () {
        $('.accessories:first').clone(true).appendTo('.accessoriesList');
        $('.accessories_count:first').clone(true).appendTo('.accessories_countList');
      },
      accessoriesDelete () {
        if($('.accessories').length>1 && $('.accessories_count').length>1){
          $('.accessories:last').remove();
          $('.accessories_count:first').remove();
        }else{
          return;
        }
      },
      //订单提交功能
      onSubmit () {
        this.$http.post('http://www.sikedaodi.com/jikebang/api/web/index.php?r=customer/submit-order',{
          products:this.products,
          accessories:this.accessories,
          receiver_name:this.receiver_name,
          receiver_mobile:this.receiver_mobile,
          receiver_address:this.receiver_address,
          receiver_zip:this.receiver_zip,
          remark:this.remark,
          receiver_province:this.receiver_province,
          receiver_city:this.receiver_city,
          receiver_district:this.receiver_district,
          customerId:window.localStorage.getItem('customerId'),
          access_token:window.localStorage.getItem('access_token'),
        }).then((response) => {
          alert(response.data.msg);
          location.reload()
        },(error) => {
          alert('提交失败')
        })


      }
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
  .products,.products_count,.accessories,.accessories_count {
    margin-bottom: 5px;
  }
  button.weui-btn {
    width: 70%;
  }
  button {
    margin-top: 50px;
  }
</style>
