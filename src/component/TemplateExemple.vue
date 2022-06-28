<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <!-- Permet de placer des boutons sur la toolbar -->
        <ion-buttons slot="start">
          <!-- Revenir a la page precedente -->
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>{{ titre }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonContent, IonTitle,IonButtons,IonBackButton } from '@ionic/vue'
export default {
  props: ["titre"],
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonBackButton,
    IonButtons,
  }
}
</script>

<style>
</style>
