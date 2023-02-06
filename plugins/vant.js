import { defineNuxtPlugin } from '#app';
import { Lazyload } from 'vant';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Lazyload);
});