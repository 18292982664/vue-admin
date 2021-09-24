<template>
  <div class="header" :style="{ height: windowHeight }">
    <!-- <a-button
      type="primary"
      @click="toggleCollapsed"
      style="margin-bottom: 16px"
    >
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </a-button> -->
    <a-menu
      mode="inline"
      theme="dark"
      class="nav-list"
      :inline-collapsed="collapsed"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
    >
      <!-- <a-menu-item v-for="(item,index) in dataList" :key="index + 1">
        <template #icon>
          <PieChartOutlined />
        </template>
        <span>{{item.title}}</span>
      </a-menu-item> -->
      <a-sub-menu :dataList="dataList"></a-sub-menu>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch } from "vue";
import subMenu from "./sub-menu.vue";
import { headerList } from "../../request/api";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from "@ant-design/icons-vue";

export default defineComponent({
  name: "header",
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
    "a-sub-menu": subMenu,
  },
  setup() {
    interface init {
      windowWidth: any;
      windowHeight: any;
      dataList: any;
      collapsed: any;
      selectedKeys: any;
      openKeys: any;
      preOpenKeys: any;
    }
    const state: init = reactive({
      windowWidth: document.documentElement.clientWidth + "px", //实时屏幕宽度
      windowHeight: document.documentElement.clientHeight + "px", //实时屏幕高度
      dataList: [],
      collapsed: false,
      selectedKeys: ["1"],
      openKeys: ["sub1"],
      preOpenKeys: ["sub1"],
    });
    watch(
      () => state.openKeys,
      (val, oldVal) => {
        state.preOpenKeys = oldVal;
      }
    );
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    };
    headerList().then((res) => {
      state.dataList = res;
    });

    return {
      ...toRefs(state),
      toggleCollapsed,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header {
  width: 256px;
  .nav-list {
    height: 100%;
  }
}
</style>
