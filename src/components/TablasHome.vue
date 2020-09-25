<template>
  <div>
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <h3>Últimas Ordenes</h3>
            <table class="table table-hover table-borderless">
                <thead>
                    <tr>
                        <th scope="col">N Orden</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Fecha de Entrega</th>
                        <th scope="col">Estado</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in ultimasOrdenes" :key="index">
                        <td>{{item.num_orden}}</td>
                        <td>{{item.cliente}}</td>
                        <td>{{item.fecha_entrega | fechaCambio}}</td>
                        <td>{{item.estado}}</td>
                        <td><button>Ver Detalle</button></td>
                    </tr>
                </tbody>
            </table>
        </div> 
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <h3>Últimas Ordenes</h3>
            <table class="table table-hover table-borderless">
                <thead>
                    <tr>
                        <th scope="col">N Orden</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Fecha de Devolución</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in ultimasDevoluciones" :key="index">
                        <td>{{item.num_orden}}</td>
                        <td>{{item.cliente}}</td>
                        <td>{{item.fecha_entrega | fechaCambio}}</td>
                        <td><button>Ver Detalle</button></td>
                    </tr>
                </tbody>
            </table>
        </div>       
      </div>
  </div>
</template>

<script>
export default {
    name: 'TablasHome',
    computed: {
        ultimasOrdenes(){
            return this.$store.getters.enviandoUO;
        },
        ultimasDevoluciones(){
            return this.$store.getters.enviandoUD;
        }
        
    },
    filters: {
        fechaCambio(fecha){
            return fecha.split("-").reverse().join('/');
        }
    }
}
</script>

<style>

</style>