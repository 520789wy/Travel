<template>
  <div>
    <div class="hot-title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item in weekendLists" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" class="item-img" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  props:{
    weekendLists:Array
  },
  data() {
    return {
     
    };
  }
};
</script>
<style scoped>
.hot-title {
  line-height: 35px;
  background: #eae6e6;
  text-indent: 2px;
  font-size: 14px;
}

.item-img-wrapper {
  height: auto;
  width: 100%;
}
.item-img {
  width: 100%;
  height:100%;
}
.item-info {
  padding: 5px;
}
.item-title,
.item-desc {
  line-height: 30px;
  font-size: 14px;
}
.item-desc {
  color: #c7c3c3;
}
</style>
