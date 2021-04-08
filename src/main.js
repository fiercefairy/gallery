import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { Row, Column, Hidden } from "vue-grid-responsive";
import vueAwesomeCountdown from "vue-awesome-countdown";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHome);
library.add(faTwitter);
library.add(faInstagram);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(vueAwesomeCountdown, "vac");

Vue.component("row", Row);
Vue.component("column", Column);
Vue.component("hidden", Hidden);

Vue.config.productionTip = false;

const galleryData = require("./data/gallery_data.json");
const galleries = require("./data/galleries.json");
new Vue({
  router,
  template: '<App :galleries="galleries" :galleryData="galleryData" />',
  components: { App },
  data: { galleries, galleryData }
}).$mount("#app");

// new Vue({
//   router,
//   propsData: {
//     galleryData,
//     galleries
//   },
//   render: h =>
//     h(App, {
//       propsData: {
//         galleryData,
//         galleries
//       }
//     })
// }).$mount("#app");
