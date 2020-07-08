import axios from "axios";
import API_BASE from "../../services/ApiBase";

const account = {
  namespaced: true,
  state: {
    username: "",
    password: "1",
    accessToken: localStorage.getItem("token") || null,
  },
  getters: {
    getToken(state) {
      return state.accessToken;
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    setPassword(state, password) {
      state.password = password;
    },
    setAccessToken(state, accessToken) {
      state.accessToken = accessToken;
    },
  },
  actions: {
    async login(context) {
      let data = {
        username: context.state.username,
        password: context.state.password,
      };
      await axios
        .post(API_BASE + "/api/Accounts", data)
        .then((repsonse) => {
          if (repsonse && repsonse.status === 200) {
            const token = repsonse.data;
            localStorage.setItem("token", token);
            context.commit("setAccessToken", token);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
export default account;
