import { defineNuxtPlugin } from '#app';
import { Lazyload } from 'vant';
import { Overlay } from 'vant';
import { Icon } from 'vant';
import { Form, Field, CellGroup } from 'vant';
import { Button } from 'vant';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Lazyload);
  nuxtApp.vueApp.use(Overlay);
  nuxtApp.vueApp.use(Icon);
  nuxtApp.vueApp.use(Form);
  nuxtApp.vueApp.use(Field);
  nuxtApp.vueApp.use(CellGroup);
  nuxtApp.vueApp.use(Button);
});