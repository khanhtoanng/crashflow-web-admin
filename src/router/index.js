import Vue from "vue";
import Login from "../components/Login.vue";
import Home from "../components/home/Home.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: {}
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "account",
        name: "Account",
        component: () => import("../components/home/page_contents/Account.vue"),
        meta: {
          title: "Account",
          requiresAuth: true
        }
      },
      {
        path: "homePage",
        name: "HomePage",
        component: () => import("../components/home/page_contents/HomePage.vue"),
        meta: {}
      },
      {
        path: "store",
        name: "Store",
        component: () => import("../components/home/page_contents/Store.vue"),
        meta: {
          title: "Store",
          requiresAuth: true
        }
      }
    ],
    meta: { requiresAuth: true }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     let token = localStorage.getItem("token");
//     console.log(token);

//     if (token === null) {
//       next({
//         path: "/"
//       });
//     } else {
//       next();
//     }
//   } else {
//     next(); // make sure to always call next()!
//   }
// });
export default router;
