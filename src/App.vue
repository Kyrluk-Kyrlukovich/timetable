<template>
    <RouterView/>
</template>
<script>
</script>
<style>

#app {
  height: 100vh;
  width: 100vw;
  font-family: Arial, sans-serif;
  background:
      linear-gradient(0deg, rgba(0, 13, 255, 0.54) 30%, rgba(0, 255, 0, 0)),
      linear-gradient(0deg, rgba(255,255, 255, 0.8) 70%, rgba(0,255,0,0) ),
      linear-gradient(90deg, rgba(255,255, 255, 0.8) 90%, rgba(0,255,0,0) ),
      linear-gradient(180deg, rgba(0, 13, 255, 0.84) 50%, rgba(0, 255, 0, 0))
  ;


  }

#input-group:focus{outline:none;}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

</style>
