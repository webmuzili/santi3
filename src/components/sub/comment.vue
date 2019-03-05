<template>
    <div id="app-comment">
        <h3>评论</h3>
        <!-- 发表评论的区域 -->
        <textarea placeholder="请吐槽最多120个字" maxlength="120" v-model="msg"></textarea>
        <mt-button @click="sendComment" size="large" type="primary">发表评论</mt-button>
        <!-- 显示评论区 -->
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in list" :key="item.id">
                <div class="cmt-info">
                    <div class="cmt-body">
                        {{item.content}}
                    </div>
                    <div class="cmt-mess">
                        <span>第{{i+1}}楼 用户名:{{item.user_name}}</span>
                        <span>发表时间:{{item.ctime |dateFilter}}</span>
                    </div>
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            list:[],
            pno:0,
            pageSize:7,
            pageCount:1,
            msg:""
        }
    },
    methods:{
        getMore(){
            // 每调取一次方法页码加1，获取新的页面
            this.pno++
            var url=`${this.$store.state.apiUrl}/getcomment?nid=${this.nid}&pno=${this.pno}&pageSize=${this.pageSize}`
            this.$axios(url).then((res)=>{
                var rows=this.list.concat(res.data.data)
                this.list=rows
            })
        },
        sendComment(){
            var msg=this.msg
            var nid=this.nid
            var user_name="匿名用户"
            // trim()的作用是出去两边的空格
            var size=msg.trim().length
            if(size==0){
                Toast('评论的内容不能为空')
                return
            }
           var url=`${this.$store.state.apiUrl}/addComment`
           var obj={nid:nid,user_name:user_name,content:msg}
           this.$axios.post(url,obj).then((res)=>{
              var obj= res.data
               if(obj.code=1){
                   Toast("评论发表成功")
                    //发表评论成功后，将当前页码和内容重新归零,重新请求评论数据，渲染页面
                   this.pno=0
                   this.list=[]
                   this.msg=""
                   this.getMore()
               }else{
                   Toast('发表失败')
               }
           })
        }
    },
    created(){
       this.getMore() 
    },
    props:['nid']
}
</script>
<style lang="scss">
    #app-comment{
        h3{
            font-size:18px;
        }
        textarea{
            font-size:14px;
            height:68px;
            margin:0;
        }
        .cmt-list{
            margin:5px 0;
            .cmt-item{
                border:1px solid #aaa;
                margin-top:15px;
                .cmt-info{
                    line-height:30px;
                    background:#ccc;
                    .cmt-mess{
                        display:flex;
                        justify-content: space-around;
                        font-size:14px;
                    }
                }
            }
        }
    }
</style>
