<template>
  <div>
    <city-header></city-header>
    <city-search :SortCities="sortcities"></city-search>
    <city-list :hotcites="HotCites" :SortCities="sortcities" :letter="Letter"></city-list>
    <!-- 字母选择 -->
    <city-alphabet :SortCities="sortcities" @change="handclickchang"></city-alphabet>
  </div>
</template>
<script>
import axios from "axios";
import CityHeader from "./components/Header.vue";
import CitySearch from "./components/Search.vue";
import CityList from "./components/List.vue";
import CityAlphabet from "./components/Alphabet.vue";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  data(){
      return{
        HotCites:[],
        sortcities:{},
        Letter:''
      }
  },
  methods: {
    getCityInfo() {
      axios.get("/api/city.json").then(this.getCitySucc);
    },
    getCitySucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.HotCites=data.HotCites
        this.sortcities=data.SortCities
      }
    },
    handclickchang(letter){
      this.Letter=letter
    }
  },
  mounted() {
    this.getCityInfo();
  }
};
</script>
<style scoped></style>
