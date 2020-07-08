import Vue from "vue";
// import LoginComponent from "./components/LoginComponent.vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import chart from "chart.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase/app";
import moment from "moment";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCELccC4XNO8kY6oXZmg5oVFhMpeus3JsA",
  authDomain: "cashflow-2980f.firebaseapp.com",
  databaseURL: "https://cashflow-2980f.firebaseio.com",
  projectId: "cashflow-2980f",
  storageBucket: "cashflow-2980f.appspot.com",
  messagingSenderId: "296878692267",
  appId: "1:296878692267:web:19af4e391b37d1efb424ee",
  measurementId: "G-01J5B84YHT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
/* eslint-disable no-new */
new Vue({
  router,
  store,
  chart,
  moment,
  render: h => h(App)
}).$mount("#app");
