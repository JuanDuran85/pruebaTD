<template>
  <div>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>

<script>
export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('infoDashboard');
    this.$store.dispatch('infoMonitor');
    this.$store.dispatch('llamdoLocalAPI');
  },
}
</script>