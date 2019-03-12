<template>
  <div class="konvaVueTest">
      <button @click="changeColor('black')">黑色</button>
      <button @click="changeColor('green')">绿色</button>
      <button @click="changeColor('red')">红色</button>
      <v-stage :config="configKonva">
        <v-layer>
        <v-circle :config="configCircle"></v-circle>
        </v-layer>
        <v-layer>
					<v-text :config="{text: 'Some text on canvas', fontSize: 15}"/>
					<v-circle :config="{x: 400, y: 100, radius: 50, fill: 'green' }" />
					<v-line :config="{x: 20,y: 200, points: [0, 0, 100, 0, 100, 100],
						tension: 0.5, closed: true, stroke: 'black',
						fillLinearGradientStartPoint: { x: -50, y: -50 },
						fillLinearGradientEndPoint: { x: 50, y: 50 },
						fillLinearGradientColorStops: [0, 'red', 1, 'yellow']
					}"/>
				</v-layer>
    </v-stage>
  </div>
</template>

<script>
export default {
  name: 'konvaVueTest',
  data () {
    return {
      configKonva: { width: 2000, height: 500 },
      configCircle: { x: 100, y: 100,  radius: 70, fill: "red", stroke: "black", strokeWidth:  4}
    };
  },
  methods:{
      changeColor(color){ 
        this.$log("hello world");
        this.configCircle.fill=color}
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
