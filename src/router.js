import Vue from 'vue'
import Router from 'vue-router'
import Test from './components/Test.vue'
import HomeIndex from './components/tabbar/Home'
import NewList from './components/news/Newslist'
import NewsInfo from './components/news/NewsInfo'
import GoodList from './components/good/GoodList'
import GoodInfo from './components/good/GoodInfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/Home'
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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
