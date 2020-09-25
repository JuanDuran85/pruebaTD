<template>
  <div>
      <div class="row indicagor_general">
          <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 indicador_i">
              <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div>
                        <radial-progress-bar :diameter="150"
                        :completed-steps="cumplimientoDO.porcentaje"
                        :total-steps="100">
                            <p class="display-4">{{cumplimientoDO.porcentaje}}%</p>
                        </radial-progress-bar>
                    </div>
                    <div class="mt-1">
                        <a href="">Ver Detalles</a>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <p class="font-weight-bold text-center mt-3"> {{cumplimientoDO.nombre}}</p>
                    <div>
                        <div class="d-inline-block w-50">
                            <h2 class="font-weight-bold text-center">{{cumplimientoDO.entrega}}</h2>
                            <p class="font-weight-bold text-center">Ordenes Entregadas</p>
                        </div>
                        <div class="d-inline-block w-50">
                            <h2 class="font-weight-bold text-center">{{cumplimientoDO.pendiente}}</h2>
                            <p class="font-weight-bold text-center">Ordenes Pendientes</p>
                        </div>
                    </div>
                </div>
              </div>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 indicador_d">
                           <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div>
                        <radial-progress-bar :diameter="150"
                        :completed-steps="ordenesAJ.porcentaje"
                        :total-steps="100">
                            <p class="display-4">{{ordenesAJ.porcentaje}}%</p>
                        </radial-progress-bar>
                    </div>
                    <div class="mt-1">
                        <a href="">Ver Detalles</a>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <p class="font-weight-bold text-center mt-3"> {{ordenesAJ.nombre}}</p>
                    <div>
                        <div class="d-inline-block w-50">
                            <h2 class="font-weight-bold text-center">{{ordenesAJ.totales}}</h2>
                            <p class="font-weight-bold text-center">Ordenes Totales</p>
                        </div>
                        <div class="d-inline-block w-50">
                            <h2 class="font-weight-bold text-center">{{ordenesAJ.atrasadas}}</h2>
                            <p class="font-weight-bold text-center">Ordenes Atrasadas</p>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import RadialProgressBar from "vue-radial-progress";

export default {
    name: 'Indicadores',
    components: {RadialProgressBar},
    computed: {
        cumplimientoDO(){
            //console.log(this.$store.getters.enviandoKpis);
            let entrega = parseFloat(this.$store.getters.enviandoKpis[0].entregadas);
            let pendiente = parseFloat(this.$store.getters.enviandoKpis[0].pendientes);
            let nombre = this.$store.getters.enviandoKpis[0].nombre;
            nombre = nombre.replace(/\b\w/g, texto => texto.toUpperCase());
            let porcentaje = ((entrega*100)/(entrega+pendiente));
            return {
                entrega, pendiente, nombre, porcentaje
            }; 
        },
        ordenesAJ(){
            let atrasadas = parseFloat(this.$store.getters.enviandoKpis[1].atrasadas);
            let totales = parseFloat(this.$store.getters.enviandoKpis[1].totales);
            let nombre = this.$store.getters.enviandoKpis[1].nombre;
            nombre = nombre.replace(/\b\w/g, texto => texto.toUpperCase());
            let porcentaje = ((atrasadas*100)/(totales));
            return {
                atrasadas, totales, nombre, porcentaje
            }; 
        }
    },
}
</script>

<style lang="scss">
    .indicagor_general {
        box-sizing: content-box;
        margin: 10px 5px;
    }
    .indicador_i {
        border: 1px solid black;
        position: relative;
        width: 200px;
    }
    .indicador_d {
        border: 1px solid black;
        position: relative;
        width: 200px;
    }
</style>