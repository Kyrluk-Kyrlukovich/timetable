<template>

  <div class="flex flex-col h-[100vh] justify-center items-center">
    <img class="mx-auto mb-[2.5em]" width="150" :src="require('/src/assets/logo_mpk.png')">
    <h1 class="text-4xl mb-[1em] text-center">Расписание</h1>


    <h3 class="text-2xl mb-[2.5em] text-center">Выберите группу</h3>
    <div class="flex flex-col items-center min-h-fit">
      <input id="input-group"
             class=" border border-black border-2  w-[180px] h-[35px] mb-5"
             type="text"
             :group="group"
      >


  <router-link :to="/timetable/">
    <input
        class="border border-1 bg-white border-black w-24 rounded rounded-xl"

        value="Отправить" type="button" @click="this.$router.push(`/timetable/${this.group}`)">




  </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchView",
  props:{
    group: 123
  },
  methods:{

  }
}
</script>

<style scoped>

</style>
