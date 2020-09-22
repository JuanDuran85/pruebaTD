<template>
  <div>
    <div class="clearfix borde__imagen">
        <b-img class="imagen__login" left src="https://picsum.photos/125/125/?image=58" alt="Left image"></b-img>
    </div>
    <div class="container borde__form__login mt-5">
        <h2 class="text-center my-4">Login Usuarios</h2>
        <b-form @submit="onSubmit">
            <b-form-group id="input-group-1" label="Email" label-for="input-1">
                <b-form-input id="input-1" v-model="email" type="email" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Contraseña" label-for="input-2">
                <b-form-input id="input-2" v-model="clave" required></b-form-input>
            </b-form-group>
            
            <p class="text-center">Ingrese sus credenciales de usuario</p>

            <b-button type="submit" variant="primary" block>Ingresar</b-button>
        </b-form>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            clave: ''
        }
    },
}
</script>

<style>
 .imagen__login{
     width: 150px;
     margin: 20px 10px;
 }
 .borde__imagen {
     border: 1px solid black;
     margin: 10px;
     border-radius: 10px;
 }
 .borde__form__login{
     border: 1px solid black;
     border-radius: 10px;
     width: 400px;
     padding: 40px;
 }
</style>