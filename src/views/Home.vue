<template>
  <main>
    <nav>
      <nav-bar></nav-bar>
    </nav>
    <section>
      <b-breadcrumb :items="items" class="breadcrumb__background"></b-breadcrumb>
    </section>
    <header class="jumbotron__border">
      <b-jumbotron header="Vitrina" class="text-center mb-0 jumbotron__ancho">
      </b-jumbotron>
      <h1 class="mt-0">Bienvenido</h1>
      <p>Bienvenidos al sistema de Ordenes e Inventarios de ClassicModels</p>
    </header>
    <section>
      <Indicadores/>
    </section>
  </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Indicadores from '@/components/Indicadores.vue';
export default {
  name: 'Home',
  components: { 
    NavBar,
    Indicadores 
  },
  data() {
    return {
      items: [
          {
            text: 'Home',
            active: true
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
  .jumbotron__border{
    border: 1px solid black;
    padding: 5px 10px;
    height: 70vh;
    margin: 0 5px;
  }

  .jumbotron__ancho{
    height: 55vh;
  }
</style>
