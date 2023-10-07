<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <form @submit.prevent="submitForm" style="margin: 20px;">
        <div v-if="isSignUp" class="input-wrapper">
          <ion-input class="input" v-model="name" type="text" placeholder="Name"></ion-input>
        </div>
        <div class="input-wrapper">
          <ion-input class="input" v-model="email" type="email" placeholder="Email"></ion-input>
        </div>
        <div class="input-wrapper">
          <ion-input class="input" v-model="password" type="password" placeholder="Password"></ion-input>
        </div>
        <div v-if="isSignUp" class="input-wrapper">
          <ion-input class="input" v-model="confirmPassword" type="password" placeholder="Confirm Password"></ion-input>
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
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Login',
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
.input-wrapper{
  border-radius: 1.5rem;
  overflow: hidden;
  background-color: rgba(131, 131, 131, 0.055);
  margin:10px;
}

.input{
  --padding-start: 1rem;
  --padding-end: 1rem;
  --padding-top: 1rem;
  --padding-bottom: 1rem;
}
</style>
