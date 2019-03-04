<template>
    <div id="app-cart">
        	<div class="mui-card">
				<div class="mui-card-header">商品列表</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <ul class="mui-table-view">
                            <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.iid">
                                <a href="javascript:;">
                                    <img class="mui-media-object mui-pull-left" src="../../assets/logo.png">
                                    <div class="mui-media-body">
                                        <span class="title">{{item.lname}}</span>
                                        <p class='mui-ellipsis'>
                                            <span class="price">价格:{{item.price| money}}</span>
                                            <span class="count">
                                                <div class="mui-numbox">
                                                    <button class="mui-btn mui-btn-numbox-minus" type="button" @click="carSub" :data-iid="item.iid">-</button>
                                                    <input id="test" class="mui-input-numbox" type="number" :value="item.count" />
                                                    <button class="mui-btn mui-btn-numbox-plus" type="button" @click="carAdd" :data-iid="item.iid">+</button>
                                                </div>
                                            </span>
                                        </p>
                                    </div>
                                </a>
                            </li>
                        </ul>
					</div>
				</div>
				<div class="mui-card-footer">合计:{{getToal |money}}</div>
			</div>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return {
            list:""
        }
    },
    methods:{
        getMore(){
             var url= `${this.$store.state.apiUrl}/getCarts?uid=3`
             this.$axios(url).then((res)=>{
                 this.list=res.data.data
             })
        },
        updataCart(idd,count){
            var url=`${this.$store.state.apiUrl}/updateCart?iid=${idd}&count=${count}`
            this.$axios(url).then((res)=>{
                if(res.data.code==1){
                    Toast(res.data.msg)
                }else{
                    Toast(res.data.msg)
                }
            })
        },
        carSub(e){
            var iid=e.target.dataset.iid
            for(var item of this.list){
                     if(item.iid==iid&& item.count>1){
                         item.count--;
                         this.updataCart(iid,item.count)
                         break 
                    }
             }
             var sumCount=0
             for(var a of this.list){
                 sumCount+=a.count;
             }
            this.$store.commit('add',sumCount)
        },
        carAdd(e){
            var iid=e.target.dataset.iid
            for(var item of this.list){
                     if(item.iid==iid&& item.count<999){
                         item.count++;
                         this.updataCart(iid,item.count)
                         break
                    }
             }
            var sumCount=0
             for(var b of this.list){
                 sumCount+=b.count;
             }
            this.$store.commit('add',sumCount)
        }
    },
    created(){
        this.getMore()
    },
    updated(){
        var sumCount=0
        for(var c of this.list){
            sumCount+=c.count;
         }
        this.$store.commit('add',sumCount)
    },
    computed:{
        getToal(){
            var sum=0
            for(var item of this.list){
                sum+=item.price*item.count
            }
            return sum
        }
    }
}
</script>
<style lang="scss">
    #app-cart{
        .mui-card-content-inner{
             padding:0px 15px;
            .mui-table-view-cell{
                .mui-media-body{     
                    .title{
                        font-size:18px;    
                    }
                    .mui-ellipsis{
                        display: flex;
                        justify-content: space-between;
                        .price{
                            font-size:15px;
                            line-height: 27px;
                        }
                        .mui-numbox{
                            height:27px;
                            width:108px;
                        }
                    }
                }
            }
        }
    }
</style>
