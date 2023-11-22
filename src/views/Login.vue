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
            @input="validateEmail"
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
          <ion-button expand="block" type="submit" :disabled="loading">
            {{ isSignUp ? "Criar conta" : "Login" }}
            <ion-spinner v-if="loading" />
          </ion-button>
        </div>
      </form>
      <p style="text-align: center; margin-top: 20px" @click="toggleForm">
        {{
          isSignUp
            ? "Já possuí uma conta? Log in"
            : "Ainda não possuí uma conta? Cadastrar"
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
  IonSpinner,
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
    IonSpinner,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      isSignUp: false,
      isEmailValid: true,
      loading: false,
    };
  },
  methods: {
    validateEmail() {
      // Regular expression for validating an Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Check if the entered email matches the regular expression
      this.isEmailValid = emailRegex.test(this.email);
    },

    async submitForm() {
      // Check if email and password are not null or empty
      if (!this.email || !this.password) {
        console.error("Email and password are required");
        // Handle the case where email or password is missing
        return;
      }
      this.loading = true; // Set loading to true when waiting for the response
      if (this.isSignUp) {
        // Check if the email and password are not null or empty before registering
        this.$router.push("/menu");
      } else {
        try {
          // Call loginUser to get the token
          const token = await loginUser(this.email, this.password);

          // Check if the token exists before navigating to "/menu"
          if (token) {
            console.log(token); // Log the JWT token
            this.$router.push("/menu");
          } else {
            console.error("Token not found");
            // Handle the case where the token is not available
          }
        } catch (error) {
          console.error("Error during login:", error);
          // Handle the login error, e.g., display an error message to the user
        } finally {
          this.loading = false; // Reset loading regardless of the outcome
        }
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
