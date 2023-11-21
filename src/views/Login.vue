<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="centered-content">
      <div class="header"><p class="header-label">O.M.U.</p></div>
      <img class="image" src="../assets/images/teste.png" />
      <form
        @submit.prevent="submitForm"
        style="margin: 20px; margin-top: -140px; z-index: 10"
      >
        <div v-if="isSignUp" class="input-wrapper">
          <ion-input
            class="input"
            v-model="name"
            type="text"
            placeholder="Name"
          ></ion-input>
        </div>
        <div class="input-wrapper">
          <ion-input
            class="input"
            v-model="email"
            type="email"
            placeholder="Email"
          ></ion-input>
        </div>
        <div class="input-wrapper">
          <ion-input
            class="input"
            v-model="password"
            type="password"
            placeholder="Password"
          ></ion-input>
        </div>
        <div v-if="isSignUp" class="input-wrapper">
          <ion-input
            class="input"
            v-model="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          ></ion-input>
        </div>
        <div style="width: 70%; margin: auto">
          <ion-button expand="block" type="submit">{{
            isSignUp ? "Create Account" : "Login"
          }}</ion-button>
        </div>
      </form>
      <p style="text-align: center; margin-top: 20px" @click="toggleForm">
        {{
          isSignUp
            ? "Already have an account? Log in"
            : "Don't have an account yet? Sign up"
        }}
      </p>
    </ion-content>
    <ion-footer></ion-footer>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { loginUser, registerUser } from "@/api/api"; // Import API functions

export default defineComponent({
  name: "Login",
  components: {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      isSignUp: false,
    };
  },
  methods: {
    async submitForm() {
      // Handle login or sign up logic here
      if (this.isSignUp) {
        await registerUser(this.email, this.password);
      } else {
        const token = await loginUser(this.email, this.password);
        console.log(token); // Log the JWT token
      }
    },
    toggleForm() {
      this.isSignUp = !this.isSignUp;
    },
  },
});
</script>

<style scoped>
ion-title {
  padding: 1em;
  background: #176d7f;
  text-align: center;
  font-family: "Lilita One", sans-serif;
}

.centered-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: auto 0 !important; /* Center horizontally */
}

.header {
  width: 100%;
  height: 40%;
  background: linear-gradient(to bottom, #73b3fa, transparent);
}

.header-label {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 3em; /* or any size you want */
  font-weight: bold;
  color: white; /* or any color you want */
}

.image {
  margin-top: -150px;
  margin-left: -5px;
  transform: scale(1.05);
  z-index: -100 !important;
}

.input-wrapper {
  border-radius: 1.5rem;
  overflow: hidden;
  background-color: #1e90ff;
  margin: 10px;
  background: transparent;
  border: none;
  border-bottom: 2px solid #000; /* or any color you want */
  outline: none;
}

.input {
  --padding-start: 1rem;
  --padding-end: 1rem;
  --padding-top: 1rem;
  --padding-bottom: 1rem;
  color: black;
}

ion-button {
  --background: linear-gradient(to right, #1e90ff, #00bfff);
  --color: white;
}

p {
  color: #00008b;
}
</style>
