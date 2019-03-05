<template>
    <div id="app-search">
        	<div class="mui-card">
				<div class="mui-card-header">
                    <input type="text" placeholder="关键字" v-model="keyword">
                </div>
                <div class="mui-card-header">
                    <input type="number" placeholder="下限" v-model="low">
                </div>
                <div class="mui-card-header">
                    <input type="number" placeholder="上限" v-model="high">
                </div>
                <div class="mui-card-header">
                    <mt-button type="danger" size="large" @click="handleSeach">搜索</mt-button>
                </div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <ul class="mui-table-view">
				            <li class="mui-table-view-cell mui-media" v-for="item of list" :key="item.lid">
						        <div class="mui-media-body">
                                    <p class='mui-ellipsis'>
                                        <span class="title">{{item.lname}}</span>
                                        <span>价格:{{item.price |money}}</span>
                                    </p>
						        </div>
				            </li>
                       </ul> 
					</div>
				</div>
			</div>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return{
            keyword:"",
            low:"",
            high:"",
            list:""
        }
    },
    methods:{
        handleSeach(){
            var kw=this.keyword;
            if(!kw){
                Toast("输入不能为空")
                return 
            }
            var low=this.low;
            var high=this.high
            if(low==""){
                low=0
            }
            if(high==""){
                high=200000
            }
            var url=`${this.$store.state.apiUrl}/search?keyword=${kw}&low=${low}&high=${high}`
            this.$axios(url).then((res)=>{
                if(res.data.code==1){
                this.list=res.data.data
                }else{
                    Toast("未找到相关产品")
                    this.keyword=""
                }
            })
        }
    }
}
</script>
<style lang="scss">
    #app-search{
        .mui-ellipsis{
            display:flex;
            justify-content: space-around;
            font-size: 14px;
            .title{
                font-size:19px;
                color:#0062cc;
                width: 200px;
                overflow:hidden;
                text-overflow:ellipsis;/*文字溢出的部分隐藏并用省略号代替*/
                white-space:nowrap;/*文本不自动换行*/
            }
        }
    }
</style>
