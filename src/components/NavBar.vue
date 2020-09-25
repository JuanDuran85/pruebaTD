<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Company</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Ordenes</b-nav-item>
          <b-nav-item href="#">Inventario</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Profile</b-nav-item>
          <b-nav-item href="#" @click="logout">Log Out</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    logout(){
      localStorage.removeItem('tokenUsuario');
      this.$store.state.userTokenLogin = "";
      this.$router.replace('/');
    }
  },
}
</script>

<style scoped lang="scss">

</style>
