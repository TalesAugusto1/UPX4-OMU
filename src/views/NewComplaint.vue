<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Nova Denúncia</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content
      :fullscreen="true"
      class="ion-content gradient-background no-scroll"
    >
      <form
        class="form__newComplaint"
        @submit.prevent="submitForm"
        style="margin: 20px"
      >
        <div class="input-wrapper div__input-cep">
          <label class="form__label-cep">Insira o CEP:</label>
          <ion-input
            class="form__input-cep"
            v-model="cep"
            type="text"
            placeholder="12345-678"
          ></ion-input>
        </div>
        <div class="select-wrapper div__select-problem">
          <label class="form__label-problem" for="issue"
            >Selecione o problema:</label
          >
          <br />
          <select
            class="form__select-problem"
            id="issue"
            v-model="selectedIssue"
          >
            <option value="" disabled selected>Seleciona uma opção:</option>
            <option value="buraco">Buraco</option>
            <option value="falta-de-luz">Falta de Luz</option>
            <option value="perturbacao-de-sossego">
              Perturbação de Sossego
            </option>
          </select>
        </div>
        <div class="select-wrapper div_photo-reports">
          <label class="form__label-photo-reports"
            >Envie uma foto do problema:</label
          >
          <br />
          <div class="form__button-photo-reports">
            <ion-button @click="takePhoto()">Tirar Foto</ion-button>
            <ion-button @click="choosePhoto()">Escolher da Galeria</ion-button>
          </div>
        </div>
        <div class="input-wrapper div__description">
          <label class="form__label-description">Descrição da Denúncia:</label>
          <br />
          <textarea
            class="form__textarea-description"
            v-model="complaintDescription"
            placeholder="Digite a descrição da denúncia aqui..."
          ></textarea>
        </div>
        <div class="div_form_button-submit">
          <button
            class="form_button-submit"
            type="submit"
            @click="GoTo('Menu')"
          >
            Enviar
          </button>
        </div>
      </form>

      <img class="image" src="/src/assets/images/teste2.png" />
    </ion-content>

    <!-- Footer -->
    <IonFooter></IonFooter>
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
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonModal,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { Camera, CameraOptions } from "@ionic-native/camera";

declare var window: any;

export default defineComponent({
  name: "NewComplaint",
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
    IonModal,
  },
  data() {
    return {
      cep: "",
      selectedIssue: "",
      complaintDescription: "",
    };
  },

  computed: {},

  providers: [Camera],

  methods: {
    GoTo(place: string) {
      if (place == "price") {
        this.$router.push("/checkprice");
      } else if (place == "report") {
        this.$router.push("/newcomplaint"); //criar.
      } else if (place == "Menu") {
        this.$router.push("/menu");
      }
    },
    submitForm() {
      // Handle login or sign up logic here
      console.log(`CEP is: ${this.cep}`);
    },

    //function to take the photo by the cellphone camera
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
          let base64Image = "data:image/jpeg;base64," + imageData;
          console.log(base64Image);
        },
        (err: string) => {
          console.log(err);
        }
      );
    },

    //function to choose the photo from cellphone galery
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
          let base64Image = "data:image/jpeg;base64," + imageData;
          console.log(base64Image);
        },
        (err: string) => {
          console.log(err);
        }
      );
    },
  },
});
</script>

<style scoped>
.ion-content.no-scroll {
  max-height: calc(
    100vh - 56px
  ); /* Ajuste conforme necessário, 56px é uma estimativa da altura do cabeçalho */
  overflow: hidden;
}

ion-title {
  padding: 1em;
  background: #176d7f;
  text-align: center;
  font-family: "Lilita One", sans-serif;
}

ion-content {
  background: linear-gradient(#3c97a9, #248193, #56a5a9) !important;
  font-family: "Lilita One", sans-serif;
}

.ion-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  --ion-background-color: linear-gradient(#97eeff, #b2e4ed, #ffffff);
}

.form__newComplaint {
  width: 100%;
  max-width: 600px;
  height: 80%;
  margin: 0 auto !important;
  padding: 20px;
}

.form__label-cep,
.form__label-description,
.form__label-photo-reports,
.form__label-problem {
  color: #258395;
}

.form__input-cep,
.form__select-problem,
.form__textarea-description {
  border: 1px solid #424242;
  border-radius: 8px;
  padding: 0.8em !important;
  margin-top: 0.5em;
  width: 100%;
  font-size: 16px;
  font-family: "Lilita One", sans-serif;

  background-color: white;
  color: rgba(37, 131, 149, 0.5);
}

.form__textarea-description::placeholder {
  color: rgba(37, 131, 149, 0.5);
}

.form__input-cep {
  padding: 0 0.8em !important;
}

.form__button-photo-reports {
  display: flex;
  flex-direction: row;
  gap: 1em;
}
.form__button-photo-reports ion-button {
  margin-top: 0.5em;
  width: 100%;
  font-size: 13px;
  color: white;
  font-family: "Lilita One", sans-serif;
}

.div__input-cep,
.div__select-problem,
.div_photo-reports,
.div__description {
  margin: 2em 0;
}

.form__textarea-description {
  height: 6em;
}

.form__select-problem option[disabled][selected] {
  color: white !important;
}

.div_form_button-submit {
  text-align: center;
}
.form_button-submit {
  background-color: #428cff;
  color: white;
  padding: 0.5em;
  width: 80%;
  font-size: 19px;
  border-radius: 8px;
}

.image {
  width: 100%;
  height: 11em;
}
</style>
