import { defineNuxtPlugin } from '#app';
import { Lazyload } from 'vant';
import { Overlay } from 'vant';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Lazyload);
  nuxtApp.vueApp.use(Overlay);
});