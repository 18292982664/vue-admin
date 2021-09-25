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
.average {
  display: flex;
  justify-content: space-around;
}

/* 中间 */
.box-flex {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

/* 垂直居中 */
.box-flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.average-fb {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}

/* 平均 */
.evenly-distributed {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.box-top {
  display: flex;
  align-items: column;
  justify-content: center;
}

/* 顶部对齐 */
.box-top-alignment {
  display: flex;
  align-items: stretch;
  justify-content: center;
}

/* 左右垂直居中 */
.box-vertically-centered {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 两边 */
.box-sides {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.box-left {
  display: flex;
  align-items: center;
  justify-content: left;
}

.box-bottom {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

</style>
