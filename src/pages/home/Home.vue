<template>
  <div>
    <home-header ></home-header>
    <home-swiper :SwiperList="swiperList"></home-swiper>
    <home-icon :iconLists="iconList"></home-icon>
    <home-recommend :recommendLists="recommendList"></home-recommend>
    <home-weekend :weekendLists="weekendList"></home-weekend>
  </div>

</template>


<script>
  import HomeHeader from './components/Header.vue'
  import HomeSwiper from './components/Swiper.vue'
  import HomeIcon from './components/Icon.vue'
  import HomeRecommend from './components/Recommend.vue'
  import HomeWeekend from './components/Weekend.vue'
  import axios from 'axios'
  import {mapState} from 'vuex'
  export default {
    name: 'Home',
    data(){
      return{
        lastcity:'',
        swiperList:[],
        iconList:[],
        recommendList:[],
        weekendList:[]
      }
      
    },
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcon,
      HomeRecommend,
      HomeWeekend
    },
    conputed:{
      ...mapState(['city'])
    },
    methods:{
      getHomeInfo(){
        axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res){
        res=res.data
        if(res.ret&&res.data){
          const data=res.data
          this.swiperList=data.swiperList
          this.iconList=data.iconImgs
          this.recommendList=data.recommendList
          this.weekendList=data.WeekendList
        }
      }
    },
    mounted () {//发送ajax请求，页面初次加载
      this.lastcity=this.city
      this.getHomeInfo()
    },
    activated () {//页面重新显示时，执行
      if(this.lastcity!==this.city){
        this.lastcity=this.city
        this.getHomeInfo()
      }
    }
  }
</script>

<style>

</style>
