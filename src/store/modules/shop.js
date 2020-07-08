import axios from "axios";
import API_BASE from "../../services/ApiBase";

const shop = {
  namespaced: true,
  state: {
    listShop: [],
    listRevenue: [
      {
        date: "2020-07-08",
        totalAmount: "200"
      },
      {
        date: "2020-07-09",
        totalAmount: "300"
      },
      {
        date: "2020-07-10",
        totalAmount: "400"
      },
      {
        date: "2020-07-11",
        totalAmount: "400"
      },
      {
        date: "2020-07-12",
        totalAmount: "500"
      },
      {
        date: "2020-07-13",
        totalAmount: "200"
      },
      {
        date: "2020-07-14",
        totalAmount: "800"
      },
      {
        date: "2020-07-15",
        totalAmount: "900"
      },
      {
        date: "2020-07-16",
        totalAmount: "1000"
      }
    ]
  },
  getters: {},
  mutations: {
    setListShop(state, listShop) {
      state.listShop = listShop;
    }
  },
  actions: {
    async getAllShop(context) {
      await axios
        .get(API_BASE + "/api/Stores")
        .then(repsonse => {
          if (repsonse && repsonse.status === 200) {
            context.commit("setListShop", repsonse.data);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    async updateShop(context, data) {
      let result = -1;
      await axios
        .put(API_BASE + "/api/Stores", data)
        .then(repsonse => {
          if (repsonse && repsonse.status === 200) {
            console.log("update success");
            result = repsonse.data;
            return result;
          }
        })
        .catch(error => {
          console.log(error);
        });
      return result;
    },
    async deleteShop(context, id) {
      let result = -1;

      await axios
        .delete(API_BASE + "/api/Stores", id)
        .then(repsonse => {
          if (repsonse && repsonse.status === 200) {
            console.log("delete success");
            result = repsonse.data;
            return result;
          }
        })
        .catch(error => {
          console.log(error);
        });
      return result;
    },
    async insertShop(context, data) {
      data.id = 0;
      let result = -1;
      await axios
        .post(API_BASE + "/api/Stores", data)
        .then(repsonse => {
          if (repsonse && repsonse.status === 200) {
            console.log("insert success");
            result = repsonse.data;
            return result;
          }
        })
        .catch(error => {
          console.log(error);
        });
      return result;
    }
  }
};
export default shop;
