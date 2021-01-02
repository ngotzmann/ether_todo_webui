import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import createToDoList from "./components/createToDoList/CreateToDoList.vue";
import viewToDoList from "./components/viewToDoList/ViewToDoList.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/bootstrap-icons.svg";

const app = createApp(App);
app.component("create-todo-list", createToDoList);
app.component("view-todo-list", viewToDoList);
app.use(router).mount("#app");
