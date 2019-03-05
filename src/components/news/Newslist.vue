<template>
    <div id="app-newlist">
        	<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
					<router-link :to="'/newsinfo?id='+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>
                                <span>{{item.ctime | dateFilter}}</span>
                                <span>{{item.point}}</span>
                            </p>
						</div>
					</router-link>
				</li>
            </ul>
			<mt-button type="primary" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
	data(){
		return{
			list:[],
			pno:0,
			pageSize:7,
			pageCount:1
		}
	},
    methods:{
		getMore(){
			this.pno++;
			// 判断当前页数是否超过总页数，如果超过,立即停止
			var hasMore=this.pno<=this.pageSize;
			if(!hasMore){return}
			// 开始发送请求
			var url=`${this.$store.state.apiUrl}/newslist?pno=${this.pno}&pageSize=${this.pageSize}`;
			this.$axios(url).then(res=>{
				//将现有的数据与请求过来的新数据结合成一个新数据，在进行渲染，实现点击加载更多的效果
				var rows=this.list.concat(res.data.data);
				this.list=rows;
				this.pageCount=res.data.pageCount
			})
		}
	},
	created(){
		this.getMore()
	}
}
</script>
<style  lang="scss">
	#app-newlist{
		.mui-media-body{
			text-align: left;
			font-size:18px;
			.mui-ellipsis{
				display:flex;
				color:#226aff;
				justify-content: space-between;	
			}
		}
	}
</style>

