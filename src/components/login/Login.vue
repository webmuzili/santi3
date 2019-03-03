<template>
    <div id="app-login">
        	<div class="mui-card">
				<div class="mui-card-header">用户登录</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <input type="text" placeholder="请输入用户名" v-model="uname">
                        <input type="password" placeholder="请输入密码" v-model="upwd">
                        <mt-button type="primary" @click="Login" size="large">登录</mt-button>
					</div>
				</div>
				<div class="mui-card-footer">
                    忘记密码
                </div>
			</div>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return{
            uname:"",
            upwd:""
        }
    },
    methods:{
        Login(){
            var u=this.uname
            var p=this.upwd
            var url=`${this.$store.state.apiUrl}/login?uname=${u}&upwd=${p}`
            this.$axios(url).then((res)=>{
                if(res.data.code==1){
                    Toast("登录成功！")
                    this.$router.push("/Home")
                }else if(res.data.code==-1){
                    Toast("登录失败!")
                    this.uname=""
                    this.upwd=""
                }
            })
        }
    }
}
</script>
<style lang="scss">
    #app-login{
        .mui-card-content-inner{
            div{
                display:inline-block;
            }
        }
    }
</style>

