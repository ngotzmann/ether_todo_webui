import { defineComponent } from "vue";
import datepicker from "vue3-datepicker";
import TaskField from "../../UI/TaskField.vue";

export default defineComponent({
  components: { datepicker, TaskField },
  name: "Task",
  props: ['listName', 'taskProp'],
  data() {
    return {
      connection: null as any,
      task: this.taskProp,
    };
  },
  created() {
    //const clientName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
    this.connection = new WebSocket("ws://localhost:21000/ws/" + "testclient1");
    this.connection.addEventListener('open', (event: any) => { this.onWebsocketOpen(event) });
    // this.connection.addEventListener('message', (event: any) => { this.onMessage(event) });
    this.connection.addEventListener('close', (event: any) => { this.onClose(event) });
    this.connection.addEventListener('error', (event: any) => { this.onError(event) });
  },
  methods: {
    deleteTask() {
      this.connection.send(JSON.stringify({
        action: "delete",
        topic: this.listName,
        message: JSON.stringify(this.task)
      }));      
    },
    onWebsocketOpen(event: any) {
      this.connection.send(JSON.stringify({
        action: "subscribe",
        topic: "testclient1",
        message: ""
      }));
    },
    onMessage(event: any) {
      // console.log("list " + event.data); 
      // this.taskList.push({ 
      //   id: "4",
      //   text: " " + event.data.topic, 
      //   dueDate: new Date(),
      //   color: "grey",
      //   done: false,
      // });
    },
    updateTaskText(updatedTaskText: string) {
      this.task.text = updatedTaskText;
    },
    onClose(event: any) {
      console.log("Websocket close " + event); 
    },
    onError(event: any) {
      console.error("Websocket error observed :", event);
    },
  },
});
