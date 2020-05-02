<template>
  <div>
    <div class="banner" @click="handBannerClick">
      <img
        class="banner-img"
        :src="bannerImg"
      />
      <div class="banner-number"><i class="iconfont">&#xe645;</i>22</div>
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="gallaryImg" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </fade-animation>
  </div>
</template>
<script>
import CommonGallary from "common/gallary/Gallary";
import FadeAnimation from "common/fade/Fade";
export default {
  name: "DetailBanner",
  props:{
    sightName:String,
    bannerImg:String,
    gallaryImg:Array,
  },
  data() {
    return{
      showGallary:false,
    //   imgs: [
    //   "http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_350x240_0bc2440f.jpg",
    //   "http://img1.qunarzz.com/sight/p0/1508/bb/99407a4c2013eff56bb33c9e787bb2fd.water.jpg_350x240_7dced4bd.jpg"
    // ]
    }
    
  },
  methods:{
    handBannerClick(){
      this.showGallary=true
    },
    handleGallaryClose(){
      this.showGallary=false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
};
</script>
<style scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  color: #fff;
  padding-bottom: 55%;
}
.banner-img {
  width: 100%;
}
.banner-info {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 55px;
}
.banner-title {
  flex: 1;
  font-size: 18px;
  padding: 0 0 3px 5px;
}
.banner-number {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 23%;
  padding-left: 2%;
  font-size: 14px;
}
</style>
