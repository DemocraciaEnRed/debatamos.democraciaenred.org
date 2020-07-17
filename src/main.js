import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGtag from "vue-gtag";
import Buefy from 'buefy';

Vue.use(VueGtag, {
  config: { id: "UA-172968517-1" },
  params: {
      send_page_view: false
    }
  },
  router
);


Vue.use(Buefy, {
    defaultDialogConfirmText: 'OK',
    defaultDialogCancelText: 'Cancelar',
    defaultDayNames: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
    defaultMonthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    defaultDateFormatter: date => date.toLocaleDateString('es-AR'),
    defaultIconPack: 'fas',
  });

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
