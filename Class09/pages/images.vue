<template>
  <div id="app">
    <layoutdefault />
    <section v-if="posts">
      <post
        v-for="post in posts"
        v-bind:post="post"
        v-bind:key="post.id"
        >
      </post>
    </section>
  </div>
</template>

<script>
  import Post from '../pages/images2.vue';
  import Layoutdefault from '../layouts/layoutdefault.vue';

  export default{
    name: "app",
    components:{
      Post,
      Layoutdefault},
    data(){
      return{
        posts:[
          {id: 1, url: require('../static/quebecCity.jpg') , alt: "Image of Quebec City", title: "Image 1", text: "Caption 1"},
          {id: 2, url: require('../static/quebecCity.jpg') , alt: "Image of Quebec City", title: "Image 2", text: "Caption 2"},
          {id: 3, url: require('../static/quebecCity.jpg') , alt: "Image of Quebec City", title: "Image 3", text: "Caption 3"},
          {id: 4, url: require('../static/quebecCity.jpg') , alt: "Image of Quebec City", title: "Image 4", text: "Caption 4"},

        ]
      }
    }
  }
</script>
