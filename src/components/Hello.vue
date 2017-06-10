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
            <label for="passward" class="col-sm-2 control-label">密码：</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="passward" placeholder="请输入您的密码" v-model.number="passward">
            </div>
          </div><br/><br/><br/>
          <div class="form-group">
            <div class="col-xs-12">
              <button type="submit" class="btn btn-info btn-lg btn-block" v-if="phone&&passward" @click="onLogin">登陆</button>
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
      passward: '',
    }
  },
  methods: {
      onLogin () {
        this.$http({
          url: 'http://116.62.172.150:8090/v1/app/user/login',
          method: 'post',
          data: {
            phone: this.phone,
            passward: this.passward,
          },
          timeout: 2000,
          headers: {
            'Content-Type': 'x-www-from-urlencoded',
          },
         emulateJSON: true
        }).then((response) => {
          alert(response.text)
          this.$router.push({ path: '/message' })

        },(error) => {
          alert(error.toString())
        })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
