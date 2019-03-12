import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import RouterTest from '@/components/RouterTest'
import konvaVueTest from '@/components/konvaVueTest'
import VueKonva from 'vue-konva'
import vueLogger from "vue-logger";
Vue.use(vueLogger, {
  prefix: () => new Date(),
  dev: true,
  shortname: true,
  levels: ["log", "warn", "debug", "error", "dir"],
  forceLevels: []
});

Vue.use(VueKonva)
Konva.pixelRatio = 1;

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: konvaVueTest},
    {path: '/HelloWorld', component:HelloWorld},   
    {path: '/RouterTest', component:RouterTest}, 
    {path: '/KonvaVueTest',component: konvaVueTest},  	
  ]
})
