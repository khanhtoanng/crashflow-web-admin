<template>
  <el-main>
    <BreadCrumbComponent />
    <router-view></router-view>
  </el-main>
</template>

<script>
import BreadCrumbComponent from "../breadcrumb/BreadCrumbComponent.vue";

export default {
  name: "ContentComponent",
  components: {
    BreadCrumbComponent
  },
};
</script>

<style></style>
