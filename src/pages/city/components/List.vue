<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrap">
                        <div class="button">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div 
                        class="button-wrap"  
                        v-for="item in hotcites" 
                        :key="item.id"
                        @click="handleCityClick(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div 
                class="area" 
                v-for="(items,key) in SortCities" 
                :key="key" 
                :ref="key" 
            >
                <div class="title border-topbottom" >{{key}}</div>
                <div class="item-list" v-for="item in items"  @click="handleCityClick(item.cityname)">
                    <div class="item">{{item.cityname}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapState,mapMutations} from 'vuex'
export default{
    name:'CityList',
    props: {
        hotcites:Array,
        SortCities:Object,
        letter:String
    },
    computed: {
      ...mapState({
          currentCity:'city'
      })  
    },
    methods:{
        handleCityClick(city){
            //this.$store.commit('changeCity', city)//vuex的使用
            this.changeCity(city)//优化后的代码
            this.$router.push('/')//vue-router编程式导航
        },
        ...mapMutations(['changeCity'])
    },
    mounted () {
        this.scroll=new BScroll(this.$refs.wrapper)
    },
    watch: {
        letter(){
            if(this.letter){//监听letter的变化
                //8-6视频
                const element = this.$refs[this.letter][0]
                // refs-->通过为每个循环绑定ref ref的值对应的是每个key 也就是每个字母
               // [0]-->取到的是一个数组，具体的元素dom节点为数组的第一项
                this.scroll.scrollToElement(element)//元素在水平和垂直方向移动到指定的位置
            }
        }
    }

}
</script>
<style scoped>
    .list{
        position: absolute;
        top:12.5%;
        left:0;
        right:0;
        bottom:0;
        overflow: hidden;
    }
.title{
    font-size: 14px;
    line-height: 30px;
    padding-left:10px;
}

.border-topbottom{
    background: #f5f5f5;
}
.button-list{
    padding:10px;
    overflow: hidden; 
}
.button-wrap{
    float:left;
    width: 30%;
    padding:2px 2px;
}
.button{
    border:1px solid #00bcd4;
    line-height: 25px;
    text-align: center;
    border-radius: 4px;
}
.item-list .item{
    line-height: 30px;
    padding-left:10px;
    border-bottom:.5px solid #ddd;
}
</style>