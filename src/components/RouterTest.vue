<template>
  <div class="RouterTest">
    <h1>{{ project }}</h1>
    <h1>{{ canvasName }}</h1>
    <h1>{{ this.$route.query.num }}</h1>
  </div>
</template>

<script>
export default {
  name: 'RouterTest',
  data () {
    return {
      project:"",
      canvasName:""
    }
  },
  watch:{
      project:function(value){      },
      canvasName:function(value){      }
  },
  mounted() {
    this.initData();
  },
  methods:{
    initData() {
      this.project = this.$route.query.project;
      this.canvasName = this.$route.query.canvasName;
    },
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
