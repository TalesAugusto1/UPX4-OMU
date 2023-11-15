<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Preços</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-content">
      <ion-list>
        <ion-item v-for="(station, index) in gasStations" :key="index" class="div_posto">
          <ion-label class="ion-label_posto">
            <h2 class="name_posto">{{ station.name }}</h2>
            <p class="location_posto"><img src="../assets/images/location.png" alt=""> {{ station.location }}</p>
            <p class="gasPrice_posto">Gas Price: ......................................... R$ {{ station.gasPrice }}</p>
            <p class="alcoholPrice_posto">Alcohol Price: ................................... R$ {{ station.alcoholPrice }}
            </p>
          </ion-label>
          <img :src="getImage(station.gasPrice)" alt="price image" style="width:100px;height:100px;border-radius:100px"
            class="photo_posto">
        </ion-item>
      </ion-list>

      <!-- Add/Update Station Button -->
      

      <!-- Add/Update Station Modal -->
      <ion-modal :is-open="showModal">
        <ion-header>
          <ion-toolbar>
            <ion-title>Add/Update Station</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>

          <!-- Station Form -->
          <ion-item>
            <ion-label>Name</ion-label>
            <ion-input v-model="newStation.name"></ion-input>
          </ion-item>

          <!-- Location Field -->
          <ion-item>
            <ion-label>Location</ion-label>
            <ion-input v-model="newStation.location"></ion-input>
          </ion-item>

          <!-- Gas Price Field -->
          <ion-item>
            <ion-label>Gas Price</ion-label>
            <ion-input v-model.number="newStation.gasPrice" type="number"></ion-input>
          </ion-item>

          <!-- Alcohol Price Field -->
          <ion-item>
            <ion-label>Alcohol Price</ion-label>
            <ion-input v-model.number="newStation.alcoholPrice" type="number"></ion-input>
          </ion-item>

          <!-- Save Button -->
          <ion-button @click="saveStation">Save</ion-button>

        </ion-content>

        <!-- Close Modal Button -->
        <div class="modal-footer">
          <button class="btn btn-secondary" @click="showModal = false">Close</button>
        </div>

      </ion-modal>

    </ion-content>

    <!-- Footer -->
    <IonFooter></IonFooter>

  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonModal } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CheckPrice',
  components: {
    IonButton,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar,
    IonModal
  },
  data() {
    return {
      gasStations: [
        { name: 'Posto Shell', location: '2.3 km', gasPrice: 2.50, alcoholPrice: 1.90 },
        { name: 'Posto Ipiranga', location: '2.3 km', gasPrice: 2.60, alcoholPrice: 1.80 },
        { name: 'Posto Rede A', location: '2.3 km', gasPrice: 2.55, alcoholPrice: 1.85 },
        { name: 'Posto Petrobas', location: '2.3 km', gasPrice: 2.70, alcoholPrice: 1.95 },
        { name: 'Posto Shell', location: '2.3 km', gasPrice: 2.65, alcoholPrice: 1.90 },
        { name: 'Posto Ipiranga', location: '2.3 km', gasPrice: 2.75, alcoholPrice: 1.95 },
        { name: 'Posto Petrobas', location: '2.3 km', gasPrice: 2.80, alcoholPrice: 2.00 }
      ],
      showModal: false,
      newStation: {
        name: '',
        location: '',
        gasPrice: null,
        alcoholPrice: null
      }
    }
  },

  computed: {
    averageGasPrice() {
      let total = 0;
      for (let i = 0; i < this.gasStations.length; i++) {
        total += this.gasStations[i].gasPrice;
      }
      return total / this.gasStations.length;
    }
  },

  methods: {
    getImage(price: GLfloat) {
      if (price < this.averageGasPrice * 0.95) { // 5% lower than the average
        return 'src/assets/images/cheap.jpg';
      } else if (price > this.averageGasPrice * 1.05) { // 5% higher than the average
        return 'src/assets/images/normal.jpg';
      } else {
        return 'src/assets/images/expensive.jpg';
      }
    },

    saveStation() {
      const existingStation = this.gasStations.find(station => station.name === this.newStation.name);
      if (existingStation) {
        Object.assign(existingStation, this.newStation);
      } else {
        this.gasStations.push({ ...this.newStation }); // Use spread operator to create a new object
      }
      this.newStation = {
        name: '',
        location: '',
        gasPrice: null,
        alcoholPrice: null
      };
      this.showModal = false;
    }
  }
});
</script>

<style scoped>
ion-title {
  padding: 1em;
  background: #176d7f;
  text-align: center;
  font-family: 'Lilita One', sans-serif;
}

.ion-content {
  text-align: center;
}

.div_posto {
  --background: white;
  margin: 1em;
  border-radius: 8px;
}

.name_posto,
.location_posto,
.gasPrice_posto,
.alcoholPrice_posto {
  font-family: 'Lilita One', sans-serif;
  color: #258395;
}

.name_posto {
  font-size: 25px;
}

.photo_posto {
  border: 1px solid black;
}

.botao_adicionar-posto {
  font-family: 'Lilita One', sans-serif;
  width: 50%;
}
</style>
