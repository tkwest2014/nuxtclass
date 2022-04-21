<template>
  <article class="post">
  <h3 class="post_title">{{ post.title }}</h3>
    <b-img class="img-thumbnail img-fluid col-5" :src="post.url" :alt="post.alt"></b-img>
    <p class="post_alt">{{ post.alt }}</p>
      <button v-on:click="clicked(post.text)">Click Me!</button>
  </article>
</template>

<script>
import clickMixin from '../pages/mixin.vue';

  export default{
    name: "post",
    props: {post: Array},
    mixins: [clickMixin]
      }

</script>
