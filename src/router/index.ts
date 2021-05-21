import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import createToDoList from "../components/list/create/CreateToDoList.vue";
import taskSite from "../components/task/taskSite/TaskSite.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "CreateToDoList",
    component: createToDoList
  },
  {
    path: "/list/:listName",
    name: "ViewToDoList",
    component: taskSite
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
