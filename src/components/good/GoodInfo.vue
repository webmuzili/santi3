<template>
    <div id="app-good-list">
        	<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <!-- 轮播图组件 -->
						<swipe-box :list="list"></swipe-box>
					</div>
				</div>
			</div>
            <!-- 商品详情卡片 -->
            <div class="mui-card">
				<div class="mui-card-header">商品名称</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <div class="price">
                            <span>市场价:2999.00</span>
                            <span class="now">销售价:2100.00</span>
                        </div>
					</div>
                    <div class="number"><span>购买数量:</span></div>
                    <div class="mui-numbox">
					<button class="mui-btn mui-btn-numbox-minus" type="button" @click="sub">-</button>
					<input id="test" class="mui-input-numbox" type="number" v-model="val"/>
					<button class="mui-btn mui-btn-numbox-plus" type="button" @click="add">+</button>
				</div>
				</div>
				<div class="mui-card-footer">
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
                </div>
			</div>
    </div>
</template>
<script>
import Swipe from '../sub/swipe'

export default {
    data(){
        return{
            list:'',
            val:1
        }
    },
    methods:{
        getImgs(){
            var url= `${this.$store.state.apiUrl}/imagelist`
            this.$axios.get(url).then((res)=>{
                this.list=res.data
           }) 
        },
        sub(){
            if(this.val>1){
                this.val--
            }
        },
        add(){
            if(this.val<999){
                this.val++
            }
        }
    },
    created(){
        this.getImgs()
    },
    components:{
        "swipe-box":Swipe
    }
}
</script>
<style lang="scss">
    #app-good-list{
        .mui-card-header{
            font-size:19px;
        }
        .price{
            display:flex;
            justify-content: space-between;
            font-size:17px;
        }
        .number{
            display: flex;
            justify-content: left;
            padding:0 15px;
            } 
        .mui-numbox{
            margin:15px;
            display: flex;
            justify-content: left;
        }
        .mui-card-footer{
            display: flex;
            justify-content: space-between;
        }
    }
</style>
