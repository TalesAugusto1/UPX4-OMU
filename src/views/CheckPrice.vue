<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>CheckPrice</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item v-for="(station, index) in gasStations" :key="index">
          <ion-label>
            <h2>{{ station.name }}</h2>
            <p>{{ station.location }}</p>
            <p>Gas Price: {{ station.gasPrice }}</p>
            <p>Alcohol Price: {{ station.alcoholPrice }}</p>
          </ion-label>
          <img :src="getImage(station.gasPrice)" alt="price image" style="width:100px;height:100px;border-radius:100px">
        </ion-item>
      </ion-list>

      <!-- Add/Update Station Button -->
      <ion-button @click="showModal = true">Add/Update Station</ion-button>

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
  { name: 'Station 1', location: 'Location 1', gasPrice: 2.50, alcoholPrice: '1.90' },
  { name: 'Station 2', location: 'Location 2', gasPrice: 2.60, alcoholPrice: '1.80' },
  { name: 'Station 3', location: 'Location 3', gasPrice: 2.55, alcoholPrice: '1.85' },
  { name: 'Station 4', location: 'Location 4', gasPrice: 2.70, alcoholPrice: '1.95' },
  { name: 'Station 5', location: 'Location 5', gasPrice: 2.65, alcoholPrice: '1.90' },
  { name: 'Station 6', location: 'Location 6', gasPrice: 2.75, alcoholPrice: '1.95' },
  { name: 'Station 7', location: 'Location 7', gasPrice: 2.80, alcoholPrice: '2.00' }
],
     showModal:false,
     newStation:{}
    }
  },

 computed:{
   averageGasPrice(){
     let total =0;
     for(let i=0;i<this.gasStations.length;i++){
       total += this.gasStations[i].gasPrice;
     }
     return total/this.gasStations.length;
   }
 },

 methods:{
   getImage(price:number){
     if(price<this.averageGasPrice*0.95){ //20% lower than the average
       return'src/assets/images/cheap.jpg';
     }else if(price>this.averageGasPrice*1.05){ //20% higher than the average
       return'src/assets/images/normal.jpg';
     }else{
       return'src/assets/images/expensive.jpg';
     }
   },

   saveStation(){
     const existingStation = this.gasStations.find(station => station.name === this.newStation.name);
     if(existingStation){
       Object.assign(existingStation,this.newStation);
     }else{
       this.gasStations.push(this.newStation);
     }
     this.newStation = {};
     this.showModal = false;
   }
 }
});
</script>

<style scoped>

</style>
