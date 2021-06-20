import { defineComponent } from "vue";
import { uniqueNamesGenerator, adjectives, colors, animals } from "unique-names-generator";

export default defineComponent({
  name: "view-todo-list",
  data() {
    return {
      testField: "",
      listName: "",
      connection: null as any,
      testField1: ""
    };
  },
  created() {
    const clientName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
    this.listName = this.$route.params.listName.toString();

    this.connection = new WebSocket("ws://localhost:21000/ws/" + clientName);
    this.connection.onopen = () => console.log("connected"); //this.connection.send(this.testField);

    const body = JSON.stringify({
      action: "subscribe",
      topic: this.$route.params.listName.toString(),
      message: ""
    });
    this.connection.send(body);
  },
  methods: {
    sendText() {
      const listName = this.$route.params.listName.toString();
      const topic = "desc_" + listName;

      this.connection.send(JSON.stringify({
        action: "subscribe",
        topic: topic,
        message: ""
      }));
      const body = JSON.stringify({
        action: "publishSave",
        topic: topic,
        message: this.testField
      });
      this.connection.send(body)

      this.connection.onopen = () => console.log("connected"); //this.connection.send(this.testField);
      this.connection.onmessage = function(e: { data: any; }){ 
        console.log(e.data); 
        this.testField1 = e.data; 
        console.log("testfield1 " + this.testField1);
      };

      //TODO implement handling for these
      this.connection.onclose
      this.connection.onerror 
    }
  }
});
