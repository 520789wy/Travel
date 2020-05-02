<template>
<div class="icons">
    <swiper >
        <swiper-slide v-for="(page,index) in pages" :key="index">
            <div class="icon" v-for="item in page" :key="item.id">
                <div class="icon-img">
                    <img  :src="item.imgUrl">
                </div>
                <p class="icon-desc">{{item.desc}}</p>
            </div>
        </swiper-slide>
      </swiper>
    
    
</div>
</template>
<script>
export default {
    name:"HomeIcon",
    props:{
        iconLists:Array
    },
    data(){
        return {
            
        }
    },
    computed:{
        //分页  视频7-5
        pages(){
            const pages=[]//每一页是一个数组,代表页码
            this.iconLists.forEach((item,index) => {//循环iconImgs得到item,index
                const page=Math.floor(index/8)//每8个一页
                if(!pages[page]){//如果不存在
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>
<style scoped>
.icons{
    overflow: hidden;
    height:0;
    padding-bottom: 45%;
    margin-bottom: 3%;
}
.icon{
    width:25%;
    position: relative;
    float: left;
    padding-bottom: 20%;
    overflow: hidden;
    margin-bottom: 3%;
}
.icon-img{
    position: absolute;
    top:0;
    left:0;
    right:0;
}
.icon-img img{
    width:55%;
    display: block;
    margin:0 auto;
}
.icon-desc{
    position: absolute;
    right:0;
    left:0;
    bottom:0;
    font-size:14px;
    text-align:center;
    color: #212121;
}
</style>