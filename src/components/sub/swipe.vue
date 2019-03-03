<template>
    <div id="app-swipe">
         <mt-swipe :auto="4000" >
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.img_url" />
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    props:['list']
}
</script>
<style lang="scss">
        #app-swipe{
            .mint-swipe{
                height:140px;
                img{
                    width:100%;
                }
            }
        }
</style>

