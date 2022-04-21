<template>
<div class="wrapper">
  <layoutdefault />
  <h1 class="header">Countries-Americas</h1>
  <section class="container" v-if="countries">
    <card
      v-for="country of countries"
      :key="country.id"
      :country="country"
      />
  </section>
</div>
</template>

<script>
  import Layoutdefault from '../layouts/layoutdefault.vue';
  import Card from '../components/Card.vue';
  import axios from 'axios';

  export default{
    components:{
      Layoutdefault,
      Card
    },
    data(){
      return{
        countries: null,
        errored: false,
        loading: true
      }
    },
    mounted(){
    axios
      .get('https://restcountries.com/v3.1/region/ame')
      .then(response => (this.countries = response.data))
      .catch(error => {
        console.log (error),
        this.errored=true
      })
      .finally(() => this.loading=false)
    }
  }
</script>

<style>
.header{
  text-align: center;
}
</style>
