<template>
  <v-app id="inspire" :style="{background: $vuetify.theme.themes.dark.background}">
    <SideBar />
    <v-container>
       <v-row>
         <v-col cols="12" sm="12">
          <v-card class="mx-auto rounded-xl" height="620px" elevation-2 color="grey darken-4">
              <v-row>
                
              </v-row>
          </v-card>
         </v-col>
       </v-row>
    </v-container>
  </v-app>
  
</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'HomeVue',
  components: {
    SideBar
  },
  data (){
    return{
      width:2,
      radius:10,
      padding:8,
      lineCap: 'round',
      value: [0,2,5,9,5,10,3,5,0,0,1,8,2,9,0],
      fill: false,
      type: 'trend',
      autoLineWidth: false,
      orders: [
        {
          price: 89.03,
          amount: 0.15,
        },
        {
          price: 94.03,
          amount: 0.18,
        },
        {
          price: 92.03,
          amount: 0.22,
        },
        {
          price: 94.03,
          amount: 0.18,
        },
        {
          price: 33.03,
          amount: 0.19,
        }
      ]
    }
  }

}
</script>

<style scoped>
 .cardOr{
    background: rgb(1,1,1);
    background: linear-gradient(90deg, rgba(1,1,1,1) 0%, rgba(34,34,29,1) 70%, rgba(135,115,12,1) 100%);
 }
 .cardVr{
  background: rgb(1,1,1);
    background: linear-gradient(90deg, rgba(1,1,1,1) 0%, rgba(34,34,29,1) 70%, rgba(19,158,112,1) 100%);
 }
 
 .cardR{
  background: rgb(1,1,1);
    background: linear-gradient(90deg, rgba(1,1,1,1) 0%, rgba(34,34,29,1) 70%, rgba(158,19,19,1) 100%);
 }
 
</style>
