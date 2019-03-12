<template>
  <div id="app">
    <router-link :to="{ path:'/RouterTest', query: {project:'abc',canvasName:'123', num:  1,} }">
			<button>显示1</button>
		</router-link>
    <router-link :to="{ path:'/KonvaVueTest', query: {project:'abc',canvasName:'123', num:  1,} }">
			<button>显示2</button>
		</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
