<template>
  <button
      class="border-none w-24 rounded rounded-[5px] p-1 bg-white hover:bg-slate-300 transition-[background-color] ease-out duration-[0.25s]"
       type="button"><slot></slot></button>
</template>

<script>
export default {
  name: "buttonUI",
  props:{
    modelValue:String
  }
}

</script>

<style scoped>

</style>
