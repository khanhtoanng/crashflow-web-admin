<template>
  <div class="store-class">
    <div class="Dialog">
      <el-dialog title="Store Action" :visible.sync="dialogVisible" width="50%">
        <FormStore
          ref="formStore"
          @Update="updateStore"
          @Create="createStore"
          :flagAction="flagAction"
        />

        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="handleConfirm">
            Confirm
          </el-button>
        </span>
      </el-dialog>
    </div>
    <el-button type="primary" @click="onCreateStore" class="mb-3">
      Create Store
    </el-button>
    <el-table :data="listShop" style="width: 100%" border stripe>
      <el-table-column label="Name">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="Address">
        <template slot-scope="scope">
          {{ scope.row.address }}
        </template>
      </el-table-column>
      <el-table-column label="Phone">
        <template slot-scope="scope">
          {{ scope.row.phone }}
        </template>
      </el-table-column>
      <el-table-column label="Operations">
        <template slot-scope="scope">
          <el-button
            @click="onUpdateStore(scope.row.id)"
            type="text"
            size="small"
          >
            Edit
          </el-button>
          <el-button
            type="text"
            size="small"
            @click="onDeleteStore(scope.row.id)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import FormStore from "./FormStore";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  components: {
    FormStore
  },
  computed: {
    ...mapState("shop", ["listShop"])
  },
  data() {
    return {
      flagAction: "Create",
      dialogVisible: false
    };
  },
  methods: {
    ...mapMutations("shop", ["setListShop"]),

    ...mapActions("shop", [
      "getAllShop",
      "updateShop",
      "deleteShop",
      "insertShop"
    ]),
    init() {
      this.getAllShop();
      console.log(this.listShop);
    },
    onCreateStore() {
      this.dialogVisible = true;
      this.flagAction = "Create";
      this.$nextTick(function() {
        this.$refs.formStore.clearData();
      });
    },
    onUpdateStore(id) {
      this.dialogVisible = true;
      this.flagAction = "Update";
      this.$nextTick(function() {
        this.$refs.formStore.editForm(id);
      });
    },
    async updateStore(store) {
      console.log(store);
      let result = await this.updateShop(store);
      result !== -1
        ? this.$alert("Update success", "Update store", {
            confirmButtonText: "OK",
            callback: action => {
              this.$message({
                type: "info",
                message: `action: ${action}`
              });
              this.getAllShop();
            }
          })
        : this.$alert(
            "Something went wrong! Please try again",
            "Update store",
            {
              confirmButtonText: "OK",
              callback: action => {
                this.$message({
                  type: "info",
                  message: `action: ${action}`
                });
              }
            }
          );
      this.dialogVisible = false;
    },
    async createStore(store) {
      console.log(store);
      let result = await this.insertShop(store);
      result !== -1
        ? this.$alert("Create success", "Create store", {
            confirmButtonText: "OK",
            callback: action => {
              this.$message({
                type: "info",
                message: `action: ${action}`
              });
              this.getAllShop();
            }
          })
        : this.$alert(
            "Something went wrong! Please try again",
            "Create store",
            {
              confirmButtonText: "OK",
              callback: action => {
                this.$message({
                  type: "info",
                  message: `action: ${action}`
                });
              }
            }
          );
      this.dialogVisible = false;
    },
    handleConfirm() {
      this.$nextTick(function() {
        this.$refs.formStore.submitData();
      });
    },
    onDeleteStore(id) {
      this.$confirm("This will permanently delete. Continue?", "Warning", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      })
        .then(async () => {
          let result = await this.deleteShop(id);
          result !== -1
            ? this.$message({
                type: "success",
                message: "Delete completed"
              })
            : this.$message({
                type: "Fail",
                message: "Something went wrong! Please do again"
              });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Delete canceled"
          });
        });
    }
  },
  mounted() {
    this.init();
  }
};
</script>
