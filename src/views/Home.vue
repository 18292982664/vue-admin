<template>
  <div class="home">home88</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { apiAddress } from "../request/api";
export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    const state = reactive({});
    const params = {};
    apiAddress(params)
      .then(function (response) {
        console.log("ss", response);
      })
      .catch(function (err) {
        console.log(err);
      });
    return {
      ...toRefs(state),
    };
  },
});
</script>
