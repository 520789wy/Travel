<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in SwiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props:{
    SwiperList:Array
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
            el: '.swiper-pagination',
            loop:true
          },
      },
    };
  }
};
</script>
<style scoped>
.wrapper {
  width: 100%;
  height: 0;
  padding-bottom:27.25%;
  overflow: hidden;
}
.swiper-img {
  width: 100%;
}
</style>
