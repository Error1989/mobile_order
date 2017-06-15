// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Hello from './components/Hello.vue'
import message from './components/message.vue'
import './assets/css/bootstrap.css'
import './assets/js/bootstrap.js'
import distpicker from 'distpicker'
import $ from 'jquery'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.use(VueAxios, axios)
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '/',
      component: Hello
    },
    {
      path: '/message',
      name: 'message',
      meta: {
        // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
      },
      component: message
    },
  ]
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, message ,distpicker,$}
})
