<template>
  <div class="bg-blue-800 pt-1  h-fit pb-0.5 px-4 flex">
    <h3 class="text-[1.8rem] inline-block align-text-bottom text-white border-r border-r-white w-min pt-2 px-1 mr-2">
      {{ $route.params.group.toUpperCase() }}
    </h3>
    <div class="mt-1 pt-2 px-1 h-min w-fit  ">
      <div class="flex">
        <input id="input-group"
               class="border-none  rounded rounded-[5px] mx-auto  w-[180px] h-[35px] mb-1 p-1 focus:bg-slate-100 focus:outline-none shadow-md transition-[background-color] ease-out duration-[0.25s]"
               type="text"
               @input="hasgotError=false;suggestioner(group)"

               v-model="group">
        <div v-if="group.length"
             class="relative top-1/2 left-[-.3rem] grid grid-cols-2 sm:flex bg-slate-100  shadow-md px-0.5 rounded-r-md shadow-md sm:flex-wrap">
            <span class="inline-flex items-center px-2 m-0 rounded-md text-[.8rem] font-medium bg-gray-300 text-gray-800 cursor-pointer"
                v-for="s in suggestioner(group)"
                :key="s"
                @click="autocomplete(s)">{{s}}</span>
        </div>
      </div>
      <router-link :to="`/${!hasgotError?group:''}`">
      <buttonUI type="button"
                :value="'Отправить'"
                @click="findGroup">
        Отправить

      </buttonUI>
    </router-link>
    </div>

  </div>
  <h3 class="text-white text-right drop-shadow-[0_0_.05em_black] shadow-black">Дни недели в которых пары указаны без
    учета замен отмечены: **</h3>
  <div class="  h-full pt-5 px-[3em]">
    <div class="grid    sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-x-8 lg:gap-x-20 px-1 sm:px-2 md:px-4">
      <div class="min-w-fit drop-shadow-[0_.2em_.35em_rgba(0,0,0,.35)]"
           v-for="(day,value) in searchedGroup">

        <h2 class="text-center  rounded-t-[.5em]  text-[1.5em]  text-white bg-blue-800 sm:px-8 md:px-16 py-0.5 md:py-1.5">
          {{ Object.keys(day).toString() }}
          <span class="text-[.7rem]">{{ value }}</span></h2>
        <table class="bg-white rounded-b-[1em] min-w-full">
          <template v-if="!hasClasses(day)">
            <div class="text-center py-[1em] text-[1.1em] ">
              Нет занятий
            </div>
          </template>
          <template v-else>
            <tr v-for="(subject) in day"
                class="rounded-b-[1em]">

              <template v-for="(sub,id) in subject">
                <td
                    v-if="sub!==''"
                    class="w-full flex flex-col"
                    :class="{'rounded-b-[1em]':checkOnLastItem(id,Object.keys(subject).length)}"
                >
                  <div class="grid" :class="{'grid-cols-2': sub.length===2}">
                    <div :class=" {'border-r-[.14rem] border-[#F1F5F9FF]': idx===0 && id % 2 === 1 && sub.length===2,
                      'border-r-[.14rem] border-white': idx===0&& id % 2 ===0 && sub.length===2}" v-for="(s,idx) in sub">
                      <div class="grid">
                        <template v-if="s.includes('--')">
                          <div class="flex relative justify-between max-w-full text-[.9em]  ">
                            <div v-if="idx===0" class="absolute left-[.35em] top-[.25em] sm:left-[.25em] sm:top-[.5em]">
                              {{ id }}
                            </div>
                            <div class="text-left flex-1 max-w-full mt-1 mx-4 sm:mt-2 sm:mx-8  ">Пара отменена</div>
                          </div>
                        </template>
                        <template v-else>
                          <div class="flex relative justify-between max-w-full text-[.9em]  ">
                            <div v-if="idx===0" class="absolute left-[.35em] top-[.25em] sm:left-[.25em] sm:top-[.5em]">
                              {{ id }}
                            </div>
                            <div class="text-left flex-1 max-w-full mt-1 mx-4 sm:mt-2 sm:mx-8  ">{{ s }}</div>
                          </div>
                          <div
                              class="w-full flex justify-between max-w-full text-[.65em] sm:text-[.75em] sm:px-4 sm:pb-1 pb-0.5 px-2"
                          >
                            <div class="">A103</div>
                            <div class="">11:00-12:00</div>
                            <div class="">Мавроди С.П.</div>
                          </div>
                        </template>
                      </div>
                    </div>
                  </div>
                </td>
                <td v-else-if="sub.includes('--')" class="w-full flex flex-col"
                    :class="{'rounded-b-[1em]':checkOnLastItem(id,Object.keys(subject).length)}">
                  <div class="flex relative justify-between max-w-full text-[.9em]  ">
                    <div class="absolute left-[.35em] top-[.25em] sm:left-[.25em] sm:top-[.5em]">{{ id }}</div>

                    <div class="text-left flex-1 max-w-full mt-1 mx-4 sm:mt-2 sm:mx-8  ">Пара отменена</div>
                  </div>
                </td>
                <td v-else class="w-full flex flex-col"
                    :class="{'rounded-b-[1em]':checkOnLastItem(id,Object.keys(subject).length)}">
                  <div class="text-left flex-1 max-w-full my-1 mx-4 sm:my-2 sm:mx-8 "
                  >
                    Нет пары
                  </div>
                </td>
              </template>
            </tr>
          </template>
        </table>
      </div>
    </div>
  </div>

</template>

<script>
import findMixin from "@/mixins/findMixin";

export default {
  name: "Timetable",
  components: {},
  mixins:[findMixin],

  methods: {
    checkOnLastItem(id, array_length) {
      return id === array_length
    },
    hasClasses(obj) {
      for (let i in obj) {
        for (let b in obj[i]) {
          if (obj[i][b] !== '') {
            return true
          }
        }
      }
      return false;
    },
  },
}
</script>

<style>
td:nth-child(2n) {
  background: rgb(242, 246, 250);;
}

div h2:nth-child(3n) {

}
</style>
