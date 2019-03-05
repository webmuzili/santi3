import Vue from 'vue'
import Router from 'vue-router'
import Test from './components/Test.vue'
import HomeIndex from './components/tabbar/Home'
import NewList from './components/news/Newslist'
import NewsInfo from './components/news/NewsInfo'
import GoodList from './components/good/GoodList'
import GoodInfo from './components/good/GoodInfo'
import Login from './components/login/Login'
import Cart from './components/tabbar/Cart'
import Search from './components/tabbar/Search'

Vue.use(Router)

// 1.$router为VueRouter实例，想要导航到不同URL，则使用$router.push方法 是路由操作对象，只写对象
// 2.$route为当前router跳转对象，里面可以获取name、path、query、params等
//路由信息对象，只读对象
export default new Router({
//这个地方千万不要用历史模式
  routes: [
    {
      path: '/',
      redirect:'/Home'
    },
    {
      path:'/login',component:Login
    },
    {
      path:'/test',component:Test
    },
    {
      path:'/goodlist',component:GoodList
    },
    {
      path:'/goodinfo/:id',component:GoodInfo
    },
    {
      path:'/news',component:NewList
    },
    {
      path:'/newsinfo',component:NewsInfo
    },
    {
      path:'/Home',component:HomeIndex
    },
    {
      path:'/cart',component:Cart
    },
    {
      path:'/search',component:Search
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
