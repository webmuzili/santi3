<template>
  <div id="app">
      <!-- 顶部导航栏 -->
      <mt-header class="header" fixed title="坚果商城"></mt-header>
      <router-view/>
      <!-- 底部tabar -->
      <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" to="/Home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/login">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{$store.getters.showCarCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>
<script>
export default {
  mounted(){
    //利用排他,设置当前激活的状态
    var nav=document.getElementsByClassName("mui-bar mui-bar-tab")[0]
    var a=nav.getElementsByTagName('a')
    for(var i=0;i<a.length;i++){
      a[i].onclick=function(){
          for(var j=0;j<a.length;j++){
            a[j].className='mui-tab-item'
          }
          this.className='mui-tab-item mui-active'
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // 利用padding给单页面应用程序留出足够的空间
  padding-top:40px;
  padding-bottom: 50px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
