<template>
  <div id="breadcrumb">
    <el-breadcrumb
      separator-class="el-icon-arrow-right"
      class="breadcrumb-container"
    >
      <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
        <router-link :to="{ path: item.path }">{{ item.name }}</router-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "BreadCrumbComponent",
  data() {
    return {
      breadcrumbList: []
    };
  },
  mounted() {
    this.update();
  },
  watch: {
    $route() {
      this.update();
    }
  },
  methods: {
    update() {
      this.breadcrumbList = this.$route.matched;
    }
  }
};
</script>

<style></style>
