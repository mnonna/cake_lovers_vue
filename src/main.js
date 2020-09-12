import Vue from "vue";
import App from "./App.vue";
import { SpinnerPlugin } from "bootstrap-vue";
import {
  BNavbarBrand,
  BNavbar,
  BNavbarNav,
  BRow,
  BCol,
  BContainer,
  BForm,
  BFormSelect,
  BFormInput,
  BFormTextarea,
  BPopover
} from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(SpinnerPlugin);
Vue.component("b-navbar-brand", BNavbarBrand);
Vue.component("b-navbar-nav", BNavbarNav);
Vue.component("b-navbar", BNavbar);
Vue.component("b-container", BContainer);
Vue.component("b-row", BRow);
Vue.component("b-col", BCol);
Vue.component("b-form", BForm);
Vue.component("b-form-input", BFormInput);
Vue.component("b-form-select", BFormSelect);
Vue.component("b-form-textarea", BFormTextarea);
Vue.component("b-popover", BPopover);

new Vue({
  render: h => h(App)
}).$mount("#app");
