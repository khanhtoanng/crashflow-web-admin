<template>
  <div class="account-class">
    <el-table :data="tableData" style="width: 100%; padding: 20px">
      <el-table-column prop="date" label="Date" width="180"> </el-table-column>
      <el-table-column prop="name" label="Name" width="180"> </el-table-column>
      <el-table-column prop="address" label="Address"> </el-table-column>
    </el-table>

    <el-button-group class="button-container">
      <el-button type="primary" icon="el-icon-arrow-left" @click="click"
        >Previous Page</el-button
      >
      <el-button type="primary"
        >Next Page<i class="el-icon-arrow-right el-icon-right"></i
      ></el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  name: "Account",
  components: {},
  data() {
    return {
      activeIndex: "2",
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        }
      ]
    };
  },
  methods: {
    click() {
      console.log("aaaaaaaa", this.$route);
    }
  }
};
</script>

<style>
.el-main {
  background: #eef1f4;
}
</style>
