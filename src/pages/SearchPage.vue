<template>

  <div class="flex flex-col h-screen justify-center items-center ">
    <img
        alt="logo"
        class="mx-auto mb-[2.5em]" width="150"
        :src="require('/src/assets/logo_mpk.png')">
    <h1 class="text-4xl mb-[1em] text-center">Расписание</h1>
    <h3 class="text-2xl mb-[2.5em] text-center">Выберите группу или преподавателя</h3>
    <div class="flex flex-col items-center min-h-fit text-sm">

      <h2 v-if="hasgotError" class="mb-4 text-red-700">Такой группы несуществует</h2>
      <div class="flex flex-col align-middle">
        <input id="input-group"
               class="border-none rounded  rounded-[5px] mx-auto  w-[180px] h-[35px] mb-5 p-1 focus:bg-slate-100 shadow-md transition-[background-color] ease-out duration-[0.25s]"
               type="text"
               @input="hasgotError=false;suggestioner(group)"

               v-model="group">
        <div v-if="group.length"
            class="relative top-[-1rem] grid grid-cols-2 sm:flex bg-white shadow-md p-1 rounded-md shadow-md sm:flex-wrap mb-5">
          <span class="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer"
                v-for="s in suggestioner(group)"
                :key="s"
          @click="autocomplete(s)">{{s}}</span>
        </div>
      </div>

      <router-link :to="`/${!hasgotError?group:''}`">   <buttonUI type="button"
                @click="findGroup">
       Отправить
      </buttonUI>
      </router-link>

    </div>
  </div>
</template>

<script>

import {mapMutations, mapState, mapActions} from 'vuex'
import findMixin from "@/mixins/findMixin";


export default {
  name: "SearchView",
  mixins:[findMixin],
}
</script>
