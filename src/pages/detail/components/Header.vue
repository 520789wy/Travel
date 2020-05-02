<template>
  <div>
    <router-link tag="div" class="header-abs" to="/" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe618;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe618;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailHeader",
  data(){
      return{
          showAbs:true,
          opacityStyle:{
            opacity:0
          }
      }
  },
  methods:{
    handleScoll(){
        const top=document.documentElement.scrollTop//页面滚动距离top的距离
        if(top>60){
            let opacity=top/140
            opacity=opacity>1?1:opacity
            this.opacityStyle={opacity}
            this.showAbs=false
        }else{
            this.showAbs=true//不显示
        }
        
    }
  },
  activated () {//钩子
      window.addEventListener('scroll',this.handleScoll)
  },
  deactivated () {
    window.removeEventListener('scroll',this.handleScoll)//解绑全局事件
  }
};
</script>
<style>
.header-abs {
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  width: 36px;
  height: 36px;
  line-height: 36px;
  border-radius: 1.5rem;
  background: rgba(0, 0, 0, 0.6);
}
.header-abs-back {
  color: #fff;
  font-size: 16px;
  text-align: center;
}
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right:0;
  z-index:2;
  height: 44px;
  line-height: 44px;
  background: #00bcd4;
  text-align: center;
  color: #fff;
}
.header-fixed-back{
    position: absolute;
    top:0;
    right:0;
    left:0;
    width:44px;
    height:44px;
    line-height: 44px;
    text-align:center;
    color:#fff;
}

</style>
