import Vue from 'vue'
import Router from 'vue-router'
import Randomizer from '../views/Randomizer.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'randomizer',
      component: Randomizer
    },
  ]
})
