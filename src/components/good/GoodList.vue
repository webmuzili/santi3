<template>
    <div id="app-goodlist">
        <!-- 商品列表项 -->
        <div class="good-item" v-for="item in list" :key="item.id">
            <img :src="item.img_url" @click="jumpDetail" :data-id="item.id">
            <h3 class="title">{{item.title}}</h3>
            <div class="info">
                <div class="price">
                    <span class="now">现价:{{item.now |money}}</span>
                    <span class="old">原价:{{item.old |money}}</span>
                </div>
            </div>
            <div class="cell">
                <span>热卖中</span>
                <span>剩1件</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
   data(){
       return{
           list:""
       }
   },
   methods:{
       getMore(){
           var url=`${this.$store.state.apiUrl}/goodsList`
           this.$axios(url).then((res)=>{
               this.list=res.data
           })
       },
       jumpDetail(even){
           var id=even.target.dataset.id
           this.$router.push('/goodinfo/'+id)
       }
   },
   created(){
       this.getMore();
   } 
}
</script>
<style lang="scss">
    #app-goodlist{
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding:7px;
        .good-item{
            background:#fff;
            width:49%;
            border:1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin:4px 0;
            padding:2px;
            display:flex;
            flex-direction: column;
            justify-content: space-between;
            min-height:210px;
            h3{
                font-size:18px;
            }
            img{
                width:100%;
            }
            .price{
                display: flex;
                justify-content: space-between;
                .now{
                    color:red;
                    font-size:16px;
                 }
                .old{
                    font-size:16px;
                    text-decoration: line-through;
                 }
            }
            .cell{
                padding:10px;
                display: flex;
                justify-content: space-between; 
            }
        }
    }
</style>
