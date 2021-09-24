<template>
  <Header />
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header/index.vue";
export default defineComponent({
  components: { Header },
});
</script>

<style lang="less">
@import "../src/assets/css/reset.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
