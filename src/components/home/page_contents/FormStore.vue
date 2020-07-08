<template>
  <el-form
    :model="store"
    label-width="120px"
    v-on:submit="submitData"
    ref="formStore"
  >
    <el-form-item label="Store Name">
      <el-input v-model="store.name"></el-input>
    </el-form-item>

    <el-form-item label="Address">
      <el-input v-model="store.address"></el-input>
    </el-form-item>

    <el-form-item label="Phone">
      <el-input v-model="store.phone"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState("shop", ["listShop"]),
    ...mapMutations("shop", ["setListShop"]),
  },
  props: ["flagAction"],
  data() {
    return {
      store: {
        id: "",
        name: "",
        address: "",
        phone: "",
      },
    };
  },
  methods: {
    editForm(id) {
      if (id === undefined) {
        this.clearData();
      } else {
        this.store.id = id;
        let storeInfo = this.listShop.find((item) => {
          return item.id == id;
        });
        if (storeInfo !== undefined) {
          this.store.name = storeInfo.name;
          this.store.address = storeInfo.address;
          this.store.phone = storeInfo.phone;
        }
      }
    },
    clearData() {
      this.store.id = "";
      this.store.name = "";
      this.store.address = "";
      this.store.phone = "";
    },
    submitData() {
      if (this.flagAction === "Create") {
        this.$emit("Create", this.store);
      } else if (this.flagAction === "Update") {
        this.$emit("Update", this.store);
      }
    },
  },
};
</script>
