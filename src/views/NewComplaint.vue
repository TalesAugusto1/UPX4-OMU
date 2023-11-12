<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>New Complaint</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" class="ion-content">
            <form class="form__newComplaint" @submit.prevent="submitForm" style="margin: 20px;">
                <div class="input-wrapper div__input-cep">
                    <label class="form__label-cep">Insira o CEP:</label>
                    <ion-input class="form__input-cep" v-model="cep" type="text" placeholder="12345-678"></ion-input>
                </div>
                <div class="select-wrapper div__select-problem">
                    <label class="form__label-problem" for="issue">Selecione o problema:</label> <br />
                    <select class="form__select-problem" id="issue" v-model="selectedIssue">
                        <option value="" disabled selected>Seleciona uma opção:</option>
                        <option value="buraco">Buraco</option>
                        <option value="falta-de-luz">Falta de Luz</option>
                        <option value="perturbacao-de-sossego">Perturbação de Sossego</option>
                    </select>
                </div>
                <div class="select-wrapper div_photo-reports">
                    <label class="form__label-photo-reports">Envie uma foto do problema:</label> <br />
                    <div class="form__button-photo-reports">
                        <ion-button @click="takePhoto()">Tirar Foto</ion-button>
                        <ion-button @click="choosePhoto()">Escolher da Galeria</ion-button>
                    </div>
                </div>
                <div class="input-wrapper div__description">
                    <label class="form__label-description">Descrição da Denúncia:</label> <br />
                    <textarea class="form__textarea-description" v-model="complaintDescription"
                        placeholder="Digite a descrição da denúncia aqui..."></textarea>
                </div>
            </form>
        </ion-content>

        <!-- Footer -->
        <IonFooter></IonFooter>

    </ion-page>
</template>
  
<script lang="ts">
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonModal } from '@ionic/vue';
import { defineComponent } from 'vue';
import { Camera, CameraOptions } from '@ionic-native/camera';

declare var window: any;

export default defineComponent({
    name: 'NewComplaint',
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
            cep: '',
            selectedIssue: '',
            complaintDescription: '',
        }
    },

    computed: {

    },

    providers: [
        Camera,
    ],

    methods: {
        submitForm() {
            // Handle login or sign up logic here
            console.log(`CEP is: ${this.cep}`);

        },
        takePhoto() {
            const options: CameraOptions = {
                quality: 100,
                destinationType: Camera.DestinationType.DATA_URL,
                encodingType: Camera.EncodingType.JPEG,
                mediaType: Camera.MediaType.PICTURE,
            };

            Camera.getPicture(options).then(
                (imageData: string) => {
                    console.log(imageData);
                },
                (err: string) => {
                    console.log(err);
                }
            );
        },

        choosePhoto() {
            const options: CameraOptions = {
                quality: 100,
                destinationType: Camera.DestinationType.DATA_URL,
                encodingType: Camera.EncodingType.JPEG,
                mediaType: Camera.MediaType.PICTURE,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            };

            Camera.getPicture(options).then(
                (imageData: string) => {
                    console.log(imageData);
                },
                (err: string) => {
                    console.log(err);
                }
            );
        },
    }
});

</script>
  
<style scoped>
.ion-content{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.form__newComplaint {
    width: 100%;
    max-width: 600px;
    margin: 0 auto !important;
    padding: 20px;
}

.form__input-cep,
.form__select-problem,
.form__textarea-description {
    border: 1px solid #424242;
    border-radius: 8px;
    padding: 1em !important;
    margin-top: 0.5em;
    width: 100%;
    font-size: 16px;
}

.form__button-photo-reports ion-button {
    margin-top: 0.4em;
    font-size: 16px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
}

.div__input-cep,
.div__select-problem,
.div_photo-reports,
.div__description {
    margin: 2em 0;
}

.form__textarea-description{
    height: 6em;
}

.form__select-problem option{
    color: black;
}

</style>