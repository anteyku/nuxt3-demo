// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [`bootstrap/dist/css/bootstrap-grid.min.css`, '~/assets/css/normalaiz.css', 'vant/lib/index.css'],
    modules: [`@nuxtjs/google-fonts`],
    googleFonts: {
      // Здесь пишем названияя шрифта и его ширину которую хотим подключить
      families: {
        "Roboto": [100, 300, 400, 500, 700, 900],
      }
    },
    build: { transpile: [`vant`] }
    /*
    app: {
      baseURL: "/" 
    },
    */
})
