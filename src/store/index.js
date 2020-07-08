import Vue from "vue";
import Vuex from "vuex";
import shop from "./modules/shop.js";
import account from "./modules/account.js";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    shop: shop,
    account: account
  }
});
export default store;
