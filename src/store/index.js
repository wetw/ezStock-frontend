import menu from '../menu';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pageTitle: 'home'
  },
  mutations: {
    setPageTitle(state, data) {
      state.pageTitle = menu.find(x => x.href === data).title;
    }
  },
  getters: {
    menu: () => menu
  }
});
