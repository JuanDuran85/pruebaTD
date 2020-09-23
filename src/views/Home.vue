<template>
  <div>
    <nav-bar></nav-bar>
    <b-breadcrumb :items="items" class="breadcrumb__background"></b-breadcrumb>
    <div class="container">
      <b-jumbotron header="Vitrina" class="text-center">
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
  name: 'Home',
  components: { NavBar },
  data() {
    return {
      items: [
          {
            text: 'Home',
            href: '#'
          },
        ]
    }
  },
}
</script>

<style lang="scss">
  .breadcrumb__background{
    background-color: #fff;
  }
</style>
