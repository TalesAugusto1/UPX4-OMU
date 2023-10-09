<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true" class="ion-padding" style="display: flex; flex-direction: column; justify-content: center; align-items: center; background: url('src/assets/images/background.jpg') no-repeat center center / cover;">
        <h2 style="font-weight: bold; text-align: center;">Choose one option</h2>
        <div class="button-container">
          <ion-button color="light" expand="block" style="--ion-color-base: rgba(173, 216, 230, 0.5); height: 200px; width: 200px; border-radius: 50%;">
            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%;">
              <img src="src\assets\images\fuel_pump.png" />
              <span>Consultar Preços</span>
            </div>
          </ion-button>
          <ion-button color="light" expand="block" style="--ion-color-base: rgba(173, 216, 230, 0.5); height: 100%; width: 100%; border-radius: 50%;">
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
  .button-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .button-container ion-button {
    --ion-color-base: rgba(173, 216, 230, 0.5);
    height: 20vw; /* This will make the button's height responsive */
    width: 20vw; /* This will make the button's width responsive */
    max-height: 300px; /* This will limit the button's maximum height */
    max-width: 400px; /* This will limit the button's maximum width */
    border-radius: 50%;
    flex-direction: column;
  }

  @media (max-width: 600px) { /* This is the breakpoint where the layout changes */
    .button-container {
      flex-direction: column;
    }
  }
</style>