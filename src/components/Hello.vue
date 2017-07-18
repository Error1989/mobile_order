<template>
  <div id="login">
    <header>
      <h3>欢迎登陆</h3>
    </header>
    <div class="weui-cell">
      <div class="weui-cell__hd"><label class="weui-label">手机号：</label></div>
      <div class="weui-cell__bd">
        <input class="weui-input" type="tel" pattern="[0-9]*" placeholder="请输入您的手机号" v-model.trim="phone">
      </div>
    </div>
    <div class="weui-cell">
      <div class="weui-cell__hd"><label class="weui-label">密码：</label></div>
      <div class="weui-cell__bd">
        <input class="weui-input" type="password" pattern="[0-9]*" placeholder="请输入您的密码" v-model.trim="password">
      </div>
    </div>
    <button type="submit" class="weui-btn weui-btn_primary weui-flex__item " v-if="phone&&password" @click="onLogin">登录</button>
    <button type="submit" class="weui-btn weui-btn_primary weui-flex__item weui-btn_disabled" v-else>登录</button>
  </div>
</template>

<script>
import axios from 'axios'
export default{
  name: 'login',
      data () {
        return {
          phone: '',
          password: '',
        }
  },
  mounted () {

  },
  methods: {
    //登录功能
    onLogin () {
      let a = this.$router;
      $.ajax({
        type:'post',
        url:'http://www.sikedaodi.com/jikebang/api/web/index.php?r=auth/login',
        dataType:'json',
        data:{phone:this.phone, password:this.password,},
        async:false,
        success:function (response) {
        if(response.result==1){
            alert(response.msg);
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
      })

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
button.weui-btn {
  width: 70%;
}
button {
  margin-top: 50px;
}
</style>
