<template>
    <div class="list">
        <ul  >
            <li class="item" 
            v-for="(item,key) in SortCities" :key="key" 
            @click="handclick">
                 {{key}}
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    name:'CityAlphabet',
    props: {
            SortCities:Object
        },
        methods: {
            handclick(e){
                this.$emit('change',e.target.innerText)
            },
            
        }
}
</script>
<style scoped>
.list{
    width:5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top:0;
    bottom: 0;
    right: 0;
    color:#00bcd4;
}
.item{
    text-align: center;
    line-height: 20px;
}
</style>