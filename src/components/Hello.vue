<template>
  <div id="login">
    <header>
      <h3>欢迎登陆</h3>
    </header>
    <div class="weui-cell">
      <div class="weui-cell__hd"><label class="weui-label">用户名：</label></div>
      <div class="weui-cell__bd">
        <input class="weui-input" type="text" placeholder="请输入您的用户名" v-model.trim="phone">
      </div>
      <div class="weui-cell__ft">
        <button class="weui-vcode-btn" @click="getPhone" style="font-size: 15px;">最近登录</button>
      </div>
    </div>

    <div class="weui-cell">
      <div class="weui-cell__hd"><label class="weui-label">密码：</label></div>
      <div class="weui-cell__bd">
        <input class="weui-input" type="password" placeholder="请输入您的密码" v-model.trim="password">
      </div>
    </div>
    <button type="submit" class="weui-btn weui-btn_primary weui-flex__item " v-if="phone&&password" @click="onLogin">登 录</button>
    <button type="submit" class="weui-btn weui-btn_primary weui-flex__item weui-btn_disabled" v-else>登 录</button>
  </div>
</template>

<script>
  import url from '../api_url'
export default{
  name: 'login',
      data () {
        return {
          phone: '',
          password: '',
        }
  },
  components: {url},
  mounted () {

  },
  methods: {
    //获取最近一次登录的账号
    getPhone () {
      if (window.localStorage.getItem('customerPhone') ) {
        this.phone = window.localStorage.getItem('customerPhone');
      } else {
        alert('登录信息不存在或已过期，请手动输入');
      }

    },
    //登录功能
    onLogin () {
      let a = this.$router;
      let customerPhone = this.phone;
      $.ajax({
        type:'post',
        url:url.login,
        dataType:'json',
        data:{phone:this.phone, password:this.password,},
        async:false,
        success:function (response) {
          //将最近一次登录的账号保存在localStorage中
          window.localStorage.setItem('customerPhone', customerPhone);
        //路由跳转部分
        if(response.result==1){
            const customerId = response.data.id;
            const access_token = response.data.access_token;
            //将用户id和access_token保存在localStorage中
            window.localStorage.setItem('customerId', customerId);
            window.localStorage.setItem('access_token', access_token);
            //跳转到导航页
            a.push({path:'/navcom'});
        }else{
            alert(response.msg)
        }
        },
        error:function (error) {
          alert('网络异常')
        }
      });
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  padding: 35px 0;
}
header h3{
  color: #3cc51f;
  font-weight: 400;
  font-size: 35px;
  text-align: center;
}
.weui-btn {
  width: 70%;
}
.weui-btn_primary {
  margin-top: 50px;
}
</style>
