<template>

<!-- Create Blog Posts  -->
<div>
<layoutdefault />
<b-container class="bv-example-row" id="app">
  <b-row>

  <!-- Create Blog Post Using If/Else Statement  -->
    <b-col cols="3">
      <h3 class="text-center mb-4">Blog Post #1</h3>
      <p v-if="valid<101">{{text}}</p>
      <p v-if="valid<101">{{text}}</p>
      <p v-if="valid<101">{{text}}</p>
      <p v-else>Text too long.  Not Valid</p>
    </b-col>
    <b-col cols="6">
      <h3 class="text-center mb-4">Blog Post #2</h3>
      <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.  Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
      <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.  Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
      <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.  Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
      <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.  Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
      <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.  Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
    </b-col>

    <!-- Create Blog Post using If/Else Statement  -->
    <b-col cols="3">
      <h3 class="text-center mb-4">Blog Post #3</h3>
      <p v-if="valid<101">{{text}}</p>
      <p v-if="valid<101">{{text}}</p>
      <p v-if="valid<101">{{text}}</p>
      <p v-else>Text too long.  Not Valid</p>
    </b-col>
  </b-row>

  <b-row>
    <b-col cols="12">
      <h3 class="text-center mb-4">Blog Post #4</h3>
      <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.  Lorem ipsum donec id elit non mi porta gravida at eget metus.  Lorem ipsum donec id elit non mi porta gravida at eget metus.  Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
      <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.  Lorem ipsum donec id elit non mi porta gravida at eget metus.  Lorem ipsum donec id elit non mi porta gravida at eget metus.  Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
      <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.  Lorem ipsum donec id elit non mi porta gravida at eget metus.  Lorem ipsum donec id elit non mi porta gravida at eget metus.  Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
    </b-col>
  </b-row>
</b-container>
</div>
</template>

<script>
import Layoutdefault from '../layouts/layoutdefault.vue';

//Create Variables For Repeated Content and set up variable for If/Else Statement
  export default{
    name: 'app',
    components: {
      Layoutdefault
    },
    data(){
      return{
        text: "Lorem ipsum donec id elit non mi porta gravida at eget metus.  Lorem ipsum donec id elit non mi porta gravida at eget metus." ,
        valid: 100
    }
  }
  }
</script>
