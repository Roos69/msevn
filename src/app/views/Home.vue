<template>
     <!-- <v-app class="home"> -->
        <Home />
     <!-- </v-app> -->

</template>
<script>

import Home from '../components/Home.vue';
export default {
   name: 'home',
   components: { Home },
   data: () => ({
      drawer: null
   }),
   props: {
      source: String
   }
}
</script>
