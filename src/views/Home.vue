<template>
    <div class="a">99995959</div>
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
<style scoped lang="less">
.a {
    background:@green;
    
}
</style>
