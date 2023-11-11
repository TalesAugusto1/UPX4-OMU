<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="centered-content">
      <img src="../assets/images/teste.png">
      <form @submit.prevent="submitForm" style="margin: 20px;">
        <div v-if="isSignUp" class="input-wrapper">
          <blue-input v-model="name" type="text" placeholder="Name"></blue-input>
        </div>
        <div class="input-wrapper">
          <blue-input v-model="email" type="email" placeholder="Email"></blue-input>
        </div>
        <div class="input-wrapper">
          <blue-input v-model="password" type="password" placeholder="Password"></blue-input>
        </div>
        <div v-if="isSignUp" class="input-wrapper">
          <blue-input v-model="confirmPassword" type="password" placeholder="Confirm Password"></blue-input>
        </div>
        <div style="width: 70%; margin: auto;">
          <ion-button expand="block" type="submit">{{ isSignUp ? 'Create Account' : 'Login' }}</ion-button>
        </div>
      </form>
      <p style="text-align: center; margin-top: 20px;" @click="toggleForm">
        {{ isSignUp ? 'Already have an account? Log in' : 'Don\'t have an account yet? Sign up' }}
      </p>
    </ion-content>
    <ion-footer></ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import BlueInput from './BlueInput.vue';

export default defineComponent({
  name: 'Login',
  components: {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    BlueInput
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      isSignUp: false
    }
  },
  methods: {
    submitForm() {
      // Handle login or sign up logic here
      console.log(`Email is: ${this.email}`);
      console.log(`Password is: ${this.password}`);
      if (this.isSignUp) {
        console.log(`Name is: ${this.name}`);
        console.log(`Confirm Password is: ${this.confirmPassword}`);
      }

      if (this.email === 'test@gmail.com' && this.password === '123123') {
        this.$router.push('/menu');
      } else {
        console.log('Invalid email or password');
      }
    },
    toggleForm() {
      this.isSignUp = !this.isSignUp;
    }
  }
});
</script>

<style scoped>
.centered-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: auto 0 !important; /* Center horizontally */
}

ion-content {
  --ion-background-color: #f0f8ff;
}

ion-button {
  --background: linear-gradient(to right, #1e90ff, #00bfff);
  --color: white;
}

p {
  color: #00008b;
}
</style>
