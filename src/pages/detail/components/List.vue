<template>
    <div>
        <div class="item" v-for="(item,index) in list" :key="index">
            <div class="item-title">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
            <!-- 递归组件，自己调用自己的组件 -->
            <div v-if="item.children" class="item-children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
        
    </div>
</template>
<script>
    export default{
        name:'DetailList',
        props:{
            list:Array
        }
    }
</script>
<style scoped>
.item-title{
    line-height: 45px;
    padding-left:10px;
    border-bottom: 1px solid #ece7e7;
}
.item-title-icon{
    display: inline-block;
    position: relative;
    width: 18px;
    height: 18px;
    top: .26rem;
    left: .2rem;
    background: url(https://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -1.4rem no-repeat;
    margin-right: .1rem;
    background-size: 20px;
}
.item-children{
    padding:0 10px;
}
</style>