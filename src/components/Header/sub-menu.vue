<template>
  <a-sub-menu v-for="(sub, index) in dataList" :key="'sub' + index + 1">
    <template #icon>
      <MenuFoldOutlined />
    </template>
    <template #title>{{ sub.title }}</template>
    <a-menu-item v-for="(menu,menuIndex) in sub.children" :key="'menu'+ index + menuIndex"
      >{{ menu.shopName }}
    </a-menu-item>
  </a-sub-menu>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { MenuFoldOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  props: {
    dataList: {
      type: Object,
      default: true,
    },
  },
  components: { MenuFoldOutlined },
  setup(props, context) {
    console.log(props.dataList);
  },
});
</script>
