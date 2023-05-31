<template>
  <input type="text" v-model="group">
<router-link :to="`/${group}`">
<h2>a</h2>
</router-link>
</template>

<script>
import findMixin from "@/mixins/findMixin";

export default {
  name: "test2page",
  mixins:[findMixin]
}
</script>

<style scoped>

</style>
