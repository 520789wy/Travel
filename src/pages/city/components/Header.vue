<template>
    <div class="header">
        <router-link to="/" class="brck">
            <i class="iconfont">&#xe618;</i>
        </router-link>
        <p class="citys">城市选择</p>
    </div>
</template>
<script>
    export default {
        name:'CityHeader'
    }
</script>
<style scoped>
.header{
    height:53px;
    background: #00bcd4;
    text-align: center;
    line-height: 53px;
}
.brck{
    position: absolute;
    top:0;
    left:0;
    width:44px;
    height:44px;
    /* padding:0 5%; */
    color: #fff;
}
.citys{
    text-align: center;
    color: #fff;
}
</style>