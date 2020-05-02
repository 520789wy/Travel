<template>
  <div id="app">
    <!-- 除去Detail组件，其他的组件都会被缓存exclude="Detail" -->
    <keep-alive >
      <router-view/>
    </keep-alive>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style> 
*{margin:0 auto;}
</style>
