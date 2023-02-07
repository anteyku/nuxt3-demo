import { defineNuxtPlugin } from '#app';
import { Button } from 'vant';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Button);
});