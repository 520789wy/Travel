<template>
    <div>
        <div class="hot-title">热销推荐</div>
        <ul>
            <router-link tag="li" class="item" v-for="item in recommendLists" :key="item.id" :to="'/detail/'+item.id">
                <img :src="item.imgUrl" class="item-img">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button  class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>

</template>
<script>
export default{
    name:'HomeRecommend',
    props:{
        recommendLists:Array
    },
    data(){
        return {
        
        }
       
    }
}
</script>
<style scoped>
.hot-title{
    line-height: 25px;
    background: #eae6e6;
    text-indent:2px;
    font-size: 14px;
}
.item{
    display: flex;
    /* height:100px; */
    overflow: hidden;
    border-bottom: 1px #eee solid;
}
.item-img{
    width:100px;
    height:100px;
    padding:5px;
}
.item-info{
    padding:5px;
}
.item-title,.item-desc{
    line-height:30px;
    font-size: 14px;
}
.item-desc{
    color: #c7c3c3;
}
.item-button{
    background: #ffbf20;
    border:0;
    color:#fff;
    line-height:25px;
    border-radius:4px;
}
</style>
