import { defineComponent } from "vue";
import ErrorModal from "../../UI/ErrorModal.vue";
import datepicker from "vue3-datepicker";

export default defineComponent({
  components: { 
    datepicker,
    ErrorModal 
  },
  name: "create-task",
  props: ['listName'],
  data() {
    return {
      colors: '#194d33',
      showError: false,
      errorMessage: "",
      errorHeaderMessage: "",
      connection: null as any,
      showCreateTask: false,
      task: {
        task: "",
        dueDate: null,
        color: "",
        done: false,
        listName: this.listName,
      }
    };
  },
  created() {
    this.connection = new WebSocket("ws://localhost:21000/ws/" + "testClient1");
    this.connection.addEventListener('error', (event: any) => { this.onError(event) });
    this.connection.addEventListener('close', (event: any) => { this.onClose(event) });
  },
  methods: {
    addTask() {
      const body = JSON.stringify({
        action: "publish",
        topic: "testClient1",
        message: JSON.stringify(this.task),
      });
      this.connection.send(body);
      this.task.task = "";
      this.task.dueDate = null;
      this.task.color = "";
    },
    onError(event: any) {
      this.showError = true;
      this.errorHeaderMessage = "Server connection error";
      this.errorMessage = "Please try it again or contact your administrator";
      console.error("Websocket error: ", event);
    },
    onClose(event: any) {
      this.showError = true;
      this.errorHeaderMessage = "Server connection closed";
      this.errorMessage = "Please try reload this page and try it again";
      console.error("Websocket closed: ", event);
    },
  }
});
