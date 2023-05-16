<template>
<h1> здесб Get header {{ $route.params.id}}</h1>
<h1> data здеся {{ group}}</h1>
</template>

<script>
export default {
  name: "Timetable",
  data(){
    return  {

    }
  },
  props: {
    group: {
        type:Number
    }
  }
}
</script>

<style scoped>

</style>
