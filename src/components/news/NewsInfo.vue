<template>
    <div id="app-newsInfo">
			<div class="mui-card">
				<div class="mui-card-header">{{info.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						{{info.content}}
					</div>
				</div>
				<div class="mui-card-footer">
                    <span>{{info.ctime | dateFilter}}</span>
                    <span>{{info.point}}</span>
                </div>
			</div>
            <comment-box :nid="id"></comment-box>
    </div>
</template>
<script>
import comment from '../sub/comment'
export default {
    data(){
        return{
            id:this.$route.query.id,
            info:{}
        }
    },
    methods:{
        getNewsInfo(){
            var url=`${this.$store.state.apiUrl}/newsinfo?id=${this.id}`
            this.$axios(url).then((res)=>{
                this.info=res.data.data[0]
            })
        }
    },
    created(){
        this.getNewsInfo()
    },
    components:{
        "comment-box":comment
    }
}
</script>
<style lang="scss">
    #app-newsInfo{
          .mui-card-header{
            //   padding-left:158px;
              font-size:16px;
        }
        .mui-card-footer{
            color:#226aff;
        }
    }
</style>
