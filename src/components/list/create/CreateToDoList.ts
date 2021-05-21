import axios, { AxiosError, AxiosResponse } from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "create-todo-list",
  data() {
    return {
      list: {
        name: "",
        liveTime: "tmp"
      },
      invalidInput: false,
      apiError: false
    };
  },
  created() {
    this.list.name = Math.random().toString(36).substring(2, 35) + Math.random().toString(36).substring(2, 35);
  },
  methods: {
    submitCreateList() {
      this.validateThisList();

      const header = { headers: { "Content-Type": "application/json" } };
      const body = JSON.stringify({
        name: this.list.name,
        liveTime: this.list.liveTime
      });
      const requestUrl = process.env.VUE_APP_ETHER_TODO_SERVICE_URL + "/todo/list/";
      axios
        .post(requestUrl, body, header)
        .then((response: AxiosResponse) => {
          console.log(response);
          this.$router.push("/list/" + this.list.name);
        })
        .catch((error: AxiosError) => {
          this.apiError = true;
          console.log(error);
        });
    },
    validateThisList() {
      if (this.list.name === "" || !this.list.name) {
        this.invalidInput = true;
        throw new Error("this.list.name is emtpy or null");
      }
      if (this.list.liveTime === "" || !this.list.liveTime) {
        this.invalidInput = true;
        throw new Error("this.list.liveTime is emtpy or null");
      }
      this.invalidInput = false;
    }
  }
});
