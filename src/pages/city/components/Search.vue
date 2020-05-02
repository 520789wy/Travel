<template>
  <div>
    <div class="search">
      <input
        type="text"
        class="search-input"
        placeholder="输入城市名或拼音"
        v-model="keyword"
      />
    </div>
    <div class="search-content">
      <ul>
        <li v-for="item in list">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "CitySearch",
  props: {
    SortCities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  watch: {
    //8-8视频搜索功能
    keyword() {
      if (this.timer) {
        clearTimeout(this, timer);
        console.log(this.timer);
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.SortCities) {
          this.SortCities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
          // this.SortCities[i].forEach((value)=>{
          //     if(value.spell.indexOf(this.keyword)>-1||value.name.indexOf(this.keyword)>-1){
          //         result.push(value)
          //     }
          // })
        }
        this.list = result;
        console.log(this.list);
      }, 100);
    }
  }
};
</script>
<style scoped>
 .search {
  height: 38px;
  background: #00bcd4;
  padding: 0 4px;
}
.search-input {
  width: 100%;
  box-sizing: border-box;
  height: 29px;
  line-height: 29px;
  border: 0;
  color: #666;
  text-align: center;
  border-radius: 4px;
}
/*.search-content {
  z-index: 1;
  position: absolute;
  top: 90px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: red;
} */
</style>
