import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Header,Swipe, SwipeItem,Button} from 'mint-ui'
import'mint-ui/lib/style.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

//注意这个css文件在build时回报错,解决:在文件中把含有'svg'外面的单引号,改为双引号
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//设置axios可以携带储存session的id
axios.defaults.withCredentials=true

Vue.prototype.$axios=axios

//时间过滤器
Vue.filter('dateFilter',function(val){
      var date=new Date(val);
      var y=date.getFullYear();
      var m=date.getMonth()+1;
      var d=date.getDate();

      var h=date.getHours();
      var mi=date.getMinutes();
      var s=date.getSeconds();

      m<10&&(m='0'+m);
      d<10&&(d='0'+d);

      h<10&&(h='0'+h);
      mi<10&&(mi='0'+mi);
      s<10&&(s='0'+s);

      return `${y}-${m}-${d} ${h}:${mi}:${s}`
})
//货币过滤器
Vue.filter("money",function(val){
    return '￥'+val
})

//获取购物车会标的数量
Vue.prototype.$getCarIcon=function(){
  var list=""
  var url= `${this.$store.state.apiUrl}/getCarts?uid=3`
  this.$axios(url).then((res,list)=>{
      list=res.data.data
      var sumCount=0
      for(var d of list){
        sumCount+=d.count;
        }
      this.$store.commit('add',sumCount)
  })
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
