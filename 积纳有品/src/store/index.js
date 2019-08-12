import Vue from 'vue';
import Vuex from 'vuex';
import CreateLogger from 'vuex/dist/logger';

// 引入store子模块
// import hitCard from './modules/hitCard';

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    // hitCard,
  
  },
  plugins: [CreateLogger()]
})