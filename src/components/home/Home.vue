<template>
  <div id="home">
    <el-container>
      <NavigatorBar />
      <el-container class="is-vertical">
        <HeaderComponent />
        <ContentComponent />
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavigatorBar from "../navigatorbar/NavigatorBar.vue";
import ContentComponent from "./ContentComponent.vue";
import HeaderComponent from "../header/HeaderComponent.vue";
export default {
  name: "app",
  components: {
    NavigatorBar,
    ContentComponent,
    HeaderComponent,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
