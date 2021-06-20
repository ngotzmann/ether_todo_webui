import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import createToDoList from "./components/list/create/CreateToDoList.vue";
import taskSite from "./components/task/taskSite/TaskSite.vue";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);
app.component("create-todo-list", createToDoList);
app.component("view-todo-list", taskSite);
app.use(router).mount("#app");
