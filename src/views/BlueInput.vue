<template>
    <div class="input-wrapper">
      <ion-input class="input" v-model="modelValue" :type="type" :placeholder="placeholder"></ion-input>
    </div>
</template>
  
  <script>
  import { IonInput } from '@ionic/vue';
  import { defineComponent, computed } from 'vue';
  
  export default defineComponent({
    name: 'BlueInput',
    components: {
      IonInput
    },
    props: ['modelValue', 'type', 'placeholder'],
    setup(props, { emit }) {
      const inputModel = computed({
        get: () => props.modelValue,
        set: (value) => emit('update:modelValue', value)
      });
  
      return {
        inputModel
      }
    }
  });
  </script>
  
  <style scoped>
  .input-wrapper{
    border-radius: 1.5rem;
    overflow: hidden;
    background-color: #1e90ff;
    margin:10px;
  }
  
  .input{
    --padding-start: 1rem;
    --padding-end: 1rem;
    --padding-top: 1rem;
    --padding-bottom: 1rem;
    color: white;
  }
  </style>
  