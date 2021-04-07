import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { Row, Column, Hidden } from "vue-grid-responsive";

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
