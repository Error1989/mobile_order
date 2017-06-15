<template>
  <div id="message">
    <div class="page-header">
      <h3 class="text-center">首页</h3>
    </div>
      <div class="jumbotron">
        <div class="container">
          <div class="form-group">
            <textarea class="form-control" rows="4" id="paste" placeholder="" v-model.trim="paste"></textarea>
          </div>
          <form>
            <h4>姓名:</h4>
            <div class="form-group">
              <input type="text" class="form-control" id="username" placeholder="请输入您的姓名" v-model.trim="username">
            </div>
            <h4>手机号:</h4>
            <div class="form-group">
              <input type="number" class="form-control" id="phone" placeholder="请输入您的手机号" v-model.number="phone">
            </div>
            <h4>省市区:</h4>
            <div data-toggle="distpicker">
              <div class="form-group">
                <label class="sr-only" for="province">Province</label>
                <select class="form-control" id="province" v-model="province"></select>
              </div>
              <div class="form-group">
                <label class="sr-only" for="city">City</label>
                <select class="form-control" id="city" v-model="city"></select>
              </div>
              <div class="form-group">
                <label class="sr-only" for="district">District</label>
                <select class="form-control" id="district" v-model="district"></select>
              </div>
            </div>

            <h4>地址:</h4>
            <div class="form-group">
              <input type="text" class="form-control" id="address" placeholder="请输入详细地址" v-model.trim="address">
            </div>
            <h4>邮编:</h4>
            <div class="form-group">
              <input type="number" class="form-control" id="zip_code" placeholder="请输入邮政编号" v-model.number="zip_code">
            </div>
            <h4>订单详情:</h4>
            <div class="form-group">
              <textarea class="form-control" rows="4" id="order" placeholder="请输入订单的相关信息" v-model.trim="order"></textarea>
            </div>
            <button type="button" class="btn btn-info btn-block" v-if="username&&phone&&province&&city&&district&&address&&zip_code" @click="onSubmit">提交信息</button>
            <button type="button" class="btn btn-info btn-block" disabled="disabled" v-else>提交信息</button>
          </form>
        </div>
      </div>
    <h6 class="text-center">常州极客邦文化传媒有限公司</h6>
  </div>
</template>
<script>
  export default {
    name: 'message',
    data () {
      return {
        username: '',
        phone: '',
        address: '',
        zip_code: '',
        order: '',
        province: '',
        city: '',
        district: '',
        provinces: '',
        citys: '',
        districts: ''
      }
    },
    methods: {
      onSubmit () {
        this.$http({
          url: 'http://116.62.172.150:8090/v1/app/user/login',
          method: 'post',
          data: {
            username: this.username,
            phone: this.phone,
            address: this.address,
            zip_code: this.zip_code,
            order: this.order,
            province: this.province,
            city: this.city,
            district: this.district
          },
          timeout: 2000,
          headers: {
            'Content-Type': 'x-www-from-urlencoded',
          },
          emulateJSON: true
        }).then((response) => {
          alert('提交成功')
        },(error) => {
          alert('提交失败')
        })


      }
    }
  }
</script>

<style>

</style>
