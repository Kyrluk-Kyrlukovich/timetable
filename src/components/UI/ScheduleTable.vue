<template>

</template>

<script>
export default {
  name: "ScheduleTable",
  props:{
    name:String
  },
  data() {
    return {
      subjects: ['-','-','Физкультура','Психолого-педагогическое сопровождение детей с расстройствами аутистического спектра', 'Реабилитация детей с ОВЗ', 'Элективные курсы по физической культуре и спорту', 'Технические средства коррекции нарушений слуха и зрения', 'Гендерные особенности развития детей с ОВЗ', 'Кураторский час', 'Управление продуктом в сфере ИКТ', 'Дошкольная сурдопедагогика'],
    }
  },
  methods:{
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    },
    hasPairs(subjects_array){
      for(let i=0;i<subjects_array.length;i++){
        if (subjects_array[i].length>2) return true
        else continue
      }
    },
    checkOnLastItem(id,array_length){
      return id===array_length-1
    },
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    },
    randomSubject() {
      let sub = this.subjects
      this.shuffle(sub)
      const x = this.getRandomInt(0, 5)
      return sub.slice(x, x + (this.getRandomInt(0, 5)))
    },
    getSubjectsIntoWeekdays() {
      for (let day in this.weekdays) {
        this.weekdays[day]['subject_list'] = this.randomSubject()
      }
    }
  },
  mounted() {
    this.getSubjectsIntoWeekdays()
  }
}
</script>

<style scoped>

</style>
