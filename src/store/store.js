import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router/router';
import { postAPI, getAPI } from "../config/configAPI";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userTokenLogin: JSON.parse(localStorage.getItem('tokenUsuario')) || '',
    dashboardKpis: [],
    dashboardUOrd: [],
    dashboardUDev: [],
  },
  getters: {

  },
  mutations: {
    mutationLogin(state,resLogin){
      console.log(resLogin);
      state.userTokenLogin = resLogin.token;
      localStorage.setItem('tokenUsuario',JSON.stringify(resLogin.token));
    },
    dashboardMutation(state,dasRecibida){
      state.dashboardTotal = dasRecibida;
      state.dashboardKpis = dasRecibida.kpis;
      state.dashboardUOrd = dasRecibida.utimas_ordenes;
      state.dashboardUDev = dasRecibida['ultimas_devoluciones:'];
    }
  },
  actions: {
    datosUsuarioLogin(context,datoRecibidoLogin){
      postAPI(datoRecibidoLogin).then(res=>{
        context.commit('mutationLogin',res);
        router.push('/home');
      }).catch(error => console.log(error))
    },
    infoDashboard(context){
      getAPI('secure/dashboard').then(res=>{
        console.log(res);
        context.commit('dashboardMutation',res);
      }).catch(error=>console.log(error))
    },
    infoMonitor(){
      getAPI('secure/ordenes?oficina=&estado&fecha-ini=&fecha-fin=&page=1&size=10').then(res=>{
        console.log(res);
      }).catch(error => console.log(error))
    }
  },
})
