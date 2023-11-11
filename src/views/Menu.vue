<template>
  <ion-page class="menu-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding" style="display: flex; flex-direction: column; justify-content: center; align-items: center; background: url('src/assets/images/background.jpg') no-repeat center center / cover;">
      <h2 style="font-weight: bold; text-align: center;">Choose one option</h2>
      <div style="display: flex; justify-content: space-between; width: 100%;">
        <ion-button @click="GoTo('price')" color="light" expand="block" style="--ion-color-base: rgba(173, 216, 230, 0.5); height: 200px; width: 200px; border-radius: 50%;">
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%;">
            <img src="src\assets\images\fuel_pump.png" />
            <span>Consultar Preços</span>
          </div>
        </ion-button>
        <ion-button @click="GoTo('report')" color="light" expand="block" style="--ion-color-base: rgba(173, 216, 230, 0.5); height: 200px; width: 200px; border-radius: 50%;">
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%;">
            <img src="src\assets\images\report.png" />
            <span>Nova Denúncia</span>
          </div>
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { Method } from 'ionicons/dist/types/stencil-public-runtime';
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
  },
  methods:{
    GoTo(place:string){
      if(place=="price"){
        this.$router.push('/checkprice');
      }else if(place=="report"){
        this.$router.push('/newcomplaint') //criar.
      }
    },
  },
});

</script>

<style scoped>
.menu-page {
  background-image: url('src\assets\images\background.jpg') no-repeat center center / cover;
}
</style>