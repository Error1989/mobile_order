<template>
  <div id="login">
    <div class="page-header">
      <h3 class="text-center">欢迎登陆</h3>
    </div>
    <div class="jumbotron">
      <div class="container">
        <form class="form-horizontal">
          <div class="form-group form-group-lg">
            <label for="phone" class="col-sm-2 control-label">手机号：</label>
            <div class="col-sm-10">
              <input type="number" class="form-control" id="phone" placeholder="请输入您的手机号码" v-model.number="phone">
            </div>
          </div>
          <div class="form-group form-group-lg">
            <label for="password" class="col-sm-2 control-label">密码：</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="password" placeholder="请输入您的密码" v-model="password">
            </div>
          </div><br/><br/><br/>
          <div class="form-group">
            <div class="col-xs-12">
              <button type="submit" class="btn btn-info btn-lg btn-block" v-if="phone&&password" @click="onLogin">登陆</button>
              <button type="submit" class="btn btn-info btn-lg btn-block" disabled="disabled" v-else>登陆</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <h6 class="text-center">常州极客邦文化传媒有限公司</h6>
  </div>
</template>

<script>

export default {
  name: 'login',
      data () {
        return {
          phone: '',
          password: '',
        }
  },
  methods: {
      onLogin () {
//        this.$http({
//          url: 'http://116.62.172.150:8090/v1/app/user/login',
//          method: 'post',
//          data: {
//            phone: this.phone,
//            password: this.password
//          },
//          timeout: 2000,
//          headers: {
//            'Content-Type': 'x-www-from-urlencoded',
//          },
//          emulateJSON: true
//        }).then((response) => {
//          this.$router.push({path: '/message'})
//        },(error) => {
//          alert('提交失败')
//        })
          $.ajax({
            type: 'post',
            url: 'http://116.62.172.150:8090/v1/app/user/login',
            data: {phone: this.phone, password: this.password},
            cache: false,
            async : false,
            dataType: "json",
            success: function (data ,textStatus, jqXHR)
            {
              alert("请求成功！");
            },
            error:function (XMLHttpRequest, textStatus, errorThrown) {
              alert("请求失败！");
            }
          });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
