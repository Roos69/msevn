<template>
   <v-app light >
      <v-navigation-drawer app>

      </v-navigation-drawer>
     <v-toolbar app></v-toolbar>
     <v-content>
       <v-container fluid>
         <v-layout justify-center align-center>
            <router-view></router-view>
         </v-layout>
       </v-container>
     </v-content>
     <v-footer app></v-footer>
   </v-app>


</template>

<script>
   import axios from 'axios';
   import { VBtn, VChip, VFlex, VToolbarSideIcon, VToolbarTitle, VSpacer, VIcon, VCard, VSubheader, VContent } from 'vuetify/lib';
   import Home from './components/Home.vue';
   export default {
      name: 'app',
      components: {Home, VBtn, VChip, VFlex, VToolbarSideIcon, VToolbarTitle, VSpacer, VIcon, VCard, VSubheader, VContent },
      data: () => ({
         button: true,
         user: {}
      }),
      created(){
         this.getItems();

      },
      methods: {
         getItems(){
            let res = axios.get('api/user');
            res.then(data =>{
               this.user = data.data[0];
            });

            // axios.get('api/user')
            // .then(res => res.json())
            // .then(data => console.log('aqui estan los datos', data));
            // fetch('api/user')
            // .then(res => res.json())
            // .then(data => console.log('aqui estan los datos', data));
         },
         oko(id){
            // console.log(id);
            alert(id);
         }
      }
   }
</script>
