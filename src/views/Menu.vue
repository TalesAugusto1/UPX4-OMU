<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <div class="container">
        <h2 style="font-weight: bold; text-align: center"><span style="font-size:36px !important;">CHOOSE A OPTION</span></h2>
        <div style="display: flex; justify-content: space-between; width: 100%">
        <div class="btn-dad"
          >
        <ion-button
          @click="GoTo('price')"
          color="light"
          expand="block"
          class="btn"
        >
         
            <img
              src="src\assets\images\gas_option.png"
              style="width: 80%; height: 80%"
            />
        </ion-button>
        <span style="margin: 10px">Consultar Preços</span>
          </div>
        <div
          style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
          "
        >
          <ion-button
            @click="GoTo('report')"
            color="light"
            expand="block"
            class="btn"
          >
            <img
              src="src\assets\images\report_option.png"
              style="width: 90%; height: 90%"
            />
          </ion-button>
          <span style="margin: 10px">Nova denúncia</span>
        </div>
      </div>
      <img class="image" src="../assets/images/teste.png" />
      </div>
    </ion-content>
    
  </ion-page>
</template>

<script lang="ts">
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { Method } from "ionicons/dist/types/stencil-public-runtime";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Menu",
  components: {
    IonButton,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  methods: {
    GoTo(place: string) {
      if (place == "price") {
        this.$router.push("/checkprice");
      } else if (place == "report") {
        this.$router.push("/newcomplaint"); //criar.
      }
    },
  },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');
ion-content {
  --background: linear-gradient(to bottom, #73b3fa, white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
ion-button {
  --ion-color-base: white !important;
  --ion-color: white !important;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
}
.btn {
  height: 180px;
  width: 180px;
  border-radius: 50%;
}
.btn-dad{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

span {
  font-family: 'Lilita One', cursive;
  font-size: 20px;
  font-weight: bold;
  color: #258294;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}
.image {
  position: fixed;
  bottom: -21%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: -100;
  transform: scale(1.06);
}
</style>
