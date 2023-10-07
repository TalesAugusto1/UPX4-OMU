<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true" class="ion-padding" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h2 style="font-weight: bold; text-align: center;">Choose one option</h2>
        <div style="display: flex; justify-content: space-between; width: 100%;">
          <ion-button color="light" expand="block" style="--ion-color-base: rgba(173, 216, 230, 0.5); height: 200px; width: 200px; border-radius: 50%; position: relative;">
            <img src="src\assets\images\fuel_pump.png" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);" />
            <span style="position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%);">Consultar Preços</span>
          </ion-button>
          <ion-button color="light" expand="block" style="--ion-color-base: rgba(173, 216, 230, 0.5); height: 200px; width: 200px; border-radius: 50%; position: relative;">
            <img src="src\assets\images\report.png" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);" />
            <span style="position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%);">Nova Denúncia</span>
          </ion-button>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Menu',
    components: {
      IonButton,
      IonContent,
      IonHeader,
      IonInput,
      IonItem,
      IonLabel,
      IonPage,
      IonTitle,
      IonToolbar
    }
  });
  </script>
  
  <style scoped>
  /* Your CSS here */
  </style>
  