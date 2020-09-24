<template>
  <div>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>

<script>
import axios from 'axios';

export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('infoDashboard');
    this.$store.dispatch('infoMonitor');
    //buscando la API de manera local con el archivo JSON
    axios.get("api/dashboard.json").then(response=>{
      console.log("Info local API");
      console.log(response.data)
    })
  },
}
</script>