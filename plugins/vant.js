import { defineNuxtPlugin } from '#app';
import { Lazyload } from 'vant';
import { Overlay } from 'vant';
import { Icon } from 'vant';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Lazyload);
  nuxtApp.vueApp.use(Overlay);
  nuxtApp.vueApp.use(Icon);
});