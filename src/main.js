import Vue from 'vue';
import Vuex from "vuex";
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';

Vue.config.productionTip = true;
Vue.use(Vuex);
const vuexStore = new Vuex.Store(store);

new Vue({
  el: '#app',
  store: vuexStore,
  router,
  components: { App },
  template: '<App/>'
});

