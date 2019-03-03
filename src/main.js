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

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

Vue.prototype.$axios=axios

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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')