<template>
  <article class="card">
    <img :src="country.flags.svg" class="card_img">
    <h2 class="card_title">{{ country.name.official }}</h2>
    <p class="card_copy">{{ country.region }}</p>
    <p class="card_copy">{{ country.area }}</p>
  </article>
</template>

<script>
  export default{
    props: {
      country:Object
    }
  }
</script>

<style>
.card{
  margin: 20rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 1px solid;
  padding: 1.5rem;
  max-width:300px;
  min-height: 300px;
  &_img{
    display:block;
    margin-bottom: 1rem;
  }
  &_title{
    font-size: 1rem;
    margin-bottom: .25rem;
  }
  &_copy{
    font-size: .875rem;
  }
}
</style>
