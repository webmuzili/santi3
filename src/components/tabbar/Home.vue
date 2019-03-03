<template>
    <div id="home-app">
        <!-- 顶部导航栏 -->
        <!-- 轮播图显示 -->
        <mt-swipe :auto="4000" >
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.img_url" />
            </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="item in list1" :key="item.id">
                        <router-link :to="item.href">
		                    <img :src="item.img_url" />
		                    <div class="mui-media-body">{{item.title}}</div>
                        </router-link>
                  </li>
		</ul> 
      <!-- 底部tabar -->  
    </div>
</template>
<script>
export default {
   data(){
       return{
           list:"",
           list1:""
       }
   },
   created(){
       var url= `${this.$store.state.apiUrl}/imagelist`
       var url1=`${this.$store.state.apiUrl}/grideimage`
       this.$axios.get(url).then((res)=>{
           this.list=res.data
           })
          this.$axios.get(url1).then((res)=>{
           this.list1=res.data
           })
   }
}
</script>
<style lang='scss'>
    #home-app{
        .mint-swipe{
            height:152px;
            img{
                width:100%;
            }
        }
        .mui-grid-view .mui-table-view-cell{
            background-color: #fff;
            border:0;
            .mui-media-body{
                margin-top: 5px;
            }
            img{
                width:60px;
                height:60px;
            }
        }
    }
</style>
