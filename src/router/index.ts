import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import Home from "../views/Home.vue";
import CreateToDoList from "../components/createToDoList/CreateToDoList.vue";
import ViewToDoList from "../components/viewToDoList/ViewToDoList.vue";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  {
    path: "/",
    name: "CreateToDoList",
    component: CreateToDoList
  },
  {
    path: "/list/:listName",
    name: "ViewToDoList",
    component: ViewToDoList
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
