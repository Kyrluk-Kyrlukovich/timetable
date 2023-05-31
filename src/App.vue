<template  >
  <div class="min-h-screen pb-[2em] overflow-x-clip text-[11px] sm:text-[13px] md:text-[15px] lg:text-[14px]   font-mont sm:tracking-[-.05em] md:tracking-normal bg-gradient-to-r from-cyan-400 to-blue-600">
    <RouterView class="overflow-x-clip"/>
  </div>

</template>
<script>
import {mapActions} from "vuex";

export default{
  data(){
    return{

    }
  },
  methods:{
    ...mapActions({
      fetchClasses: 'fetchClasses',
    }),
  },
  created() {
    this.fetchClasses()
  }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap%2");

#app {
  overflow-x: clip;
  }



* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

</style>
