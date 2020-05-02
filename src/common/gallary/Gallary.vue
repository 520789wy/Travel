<template>
  <div class="container" @click="handlGallaryclick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img
            class="gallary-img"
            :src="item"
          />
        </swiper-slide>
    
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "CommonGallary",
  props:{
      imgs:{
          type:Array,
          default(){
              return[]
          }
      }
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          loop: true,
          type: "fraction",
          observeParents:true,
          observer:true
        }
      }
    };
  },
  methods:{
    handlGallaryclick(){
        this.$emit('close')
    }
  }
};
</script>
<style scoped>
.container .swiper-container {
  overflow: inherit;
}
.container {
  display: flex;
  flex-direction: column;
  justify-self: center;
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;
}
.wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  margin-top: 50%;
}
.gallary-img {
  width: 100%;
}
.swiper-pagination {
  color: #fff;
  bottom: -15%;
}
</style>
