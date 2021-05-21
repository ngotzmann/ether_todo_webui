import { defineComponent } from "vue";
import axios, { AxiosError, AxiosResponse } from "axios";
import Task from "../task/Task.vue";
import CreateTask from "../createTask/CreateTask.vue"

export default defineComponent({
  components: { Task, CreateTask },
  name: "task-site",
  data() {
    return {
      connection: null as any,
      taskList: [] as any,
      task: {
        text: "",
        dueDate: new Date(),
        color: "",
        done: false,
      },
      list: {
        name: "",
        description: "",
      }
    };
  },
  created() {
    const task1 = { 
      id: "1",
      text: "Task 1", 
      dueDate: new Date(),
      color: "red",
      done: false,
    }; 
    const task2 = { 
      id: "1",
      text: "Task 2", 
      dueDate: new Date(),
      color: "green",
      done: false,
    }; 
    this.taskList.push(task1);
    this.taskList.push(task2);
    //TODO: load exist tasks
    //const clientName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
    this.connection = new WebSocket("ws://localhost:21000/ws/" + "testclient1");
    this.connection.addEventListener('open', (event: any) => { this.onWebsocketOpen(event) });
    this.connection.addEventListener('message', (event: any) => { this.onMessage(event) });
    this.connection.addEventListener('close', (event: any) => { this.onClose(event) });
    this.connection.addEventListener('error', (event: any) => { this.onError(event) });
  },
  methods: {
    onWebsocketOpen(event: any) {
      this.connection.send(JSON.stringify({
        action: "subscribe",
        topic: "testclient1",
        message: ""
      }));
    },
    onMessage(event: any) {
      console.log("list " + event.data); 
      // this.taskList.push({ 
      //   id: "4",
      //   text: " " + event.data.topic, 
      //   dueDate: new Date(),
      //   color: "grey",
      //   done: false,
      // });
    },
    onClose(event: any) {
      console.log("Websocket close " + event); 
    },
    onError(event: any) {
      console.error("Websocket error observed :", event);
    },
  }
});
