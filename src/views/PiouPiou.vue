<template>
<TemplateExemple :titre="test">
      <h1>Big List</h1>
      <ion-list>
<!--        <ion-item router-link="/memories/1">Based and redpilled</ion-item>-->
        <ion-item v-for="memory in memories" v-bind:key="memory.id" :router-link="`/memories/${memory.id}`">
          <ion-thumbnail slot="start">
            <ion-img :src="`/assets/img/${memory.image ?? 'defaut.png'} `"></ion-img>
          </ion-thumbnail>
          <ion-label>{{memory.titre}}</ion-label>
        </ion-item>
      </ion-list>
</TemplateExemple>
</template>

<script>
//import TemplateExempleVue from '../component/TemplateExemple';
import TemplateExemple from "../component/TemplateExemple";
import { IonList,IonItem,IonThumbnail,IonLabel,IonImg } from '@ionic/vue'
import {memoryStore} from '@/stores/memories.js'

export default {
  setup(){
    const store = memoryStore();

    return {memories:store.memories};
  },
  components:{
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonImg,
    TemplateExemple,
  },
}
</script>

<style>
ion-item {
    --color:var(--ion-color-secondary);
}
</style>