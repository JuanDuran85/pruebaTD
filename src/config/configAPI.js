import axios from 'axios';
import store from '../store/store';

let urlBase = "https://cors-anywhere.herokuapp.com/http://157.230.190.251/api/v1/cmodels";

export const postAPI = async function(recibirUser){
    let respuesta = await axios.post(`${urlBase}/users/login`, {
        "username": recibirUser.username,
        "password": recibirUser.password
    });
    return respuesta.data;
}

export const getAPI = async function(recibirURL){
    let respuesta = await axios.get(`${urlBase}/${recibirURL}`,{
        headers: {
            'Authorization': `Bearer ${store.state.userTokenLogin}`
        }
    });
    return respuesta.data;
}

export const getApiLocal = async function(llamadaApiLocal){
    let respuesta = await axios.get(`${llamadaApiLocal}`,{
        headers: {
            'Authorization': `Bearer ${store.state.userTokenLogin}`
        }
    });
    return respuesta.data;
}