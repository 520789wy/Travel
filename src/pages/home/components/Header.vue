<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont">&#xe618;</i>
    </div>
    <div class="header-input">
      <p><i class="iconfont">&#xe654;</i>输入城市/景点/游玩主题</p>
    </div>
    <router-link to="/city">
      <div class="header-right">
        <span>{{this.doubleCity}}</span>
        <i class="iconfont">&#xe74d;</i>
      </div>
    </router-link>
  </div>
</template>

<script>
  import {mapState,mapGetters} from 'vuex'
  export default {
    name:'HomeHeader',
    computed: {
      ...mapState(['city']),
      ...mapGetters(['doubleCity'])
    }
  }
</script>

<style  scoped>
  .header{
    line-height:44px;
    background: #00bcd4;
    color:#fff;
    display: flex;
  }
  .header-left{
    float: left;
    /* width:22px; */
    padding:0 10px;
  }

  .header-input{
    flex:1;
  }
  .header-input p{
    background: #fff;
    line-height: 25px;
    border:1px solid #fff;
    border-radius:4px;
    margin:10px 5px;
    color:#e4e7ea;
    font-size:12px;
  }
  .header-right{
    float:right;
    padding:0 10px;
    color:#fff;
  }
</style>
