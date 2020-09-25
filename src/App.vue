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
    this.$store.dispatch('llamdoLocalAPI');
  },
}
</script>