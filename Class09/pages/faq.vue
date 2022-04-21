<template>

<!-- Create Accordion using V-For and an Objects -->
<div id="app">
  <layoutdefault />
  <div class="accordions">
    <dl v-for="item in items" :key="item.id">
      <b-button block v-b-toggle.accordion-2 variant="info" v-on:click="item.open = !item.open">{{item.question}}</b-button>
      <b-card-text v-if="item.open">{{item.answer}}</b-card-text>
    </dl>
  </div>
</div>


</template>


<script>
import Layoutdefault from '../layouts/layoutdefault.vue';

//Create Objects for Accordion
  export default{
    name: 'app',
    components: {
      Layoutdefault
    },
    data(){
      return{
        items: {
          a1: {
            question: "When is the best time of year to travel to the beach?",
            answer: "Anim paritur cliche reprehenderit, enim eiusmod high life accusamus terry richarson ad squad.",
            open: "True"
          },
          a2: {
            question: "What is a list of all of the National State Parks in the United States?",
            answer: "Anim paritur cliche reprehenderit, enim eiusmod high life accusamus terry richarson ad squad.",
            open: "True"
          },

          a3: {
            question: "Where can I stay when I travel with my dog?",
            answer: "Anim paritur cliche reprehenderit, enim eiusmod high life accusamus terry richarson ad squad.",
            open: "True"
          },

        }
    }
  }
  }
</script>
