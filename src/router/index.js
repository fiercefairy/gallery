import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Gallery from "../views/Gallery.vue";
import Item from "../views/Item.vue";

const galleries = require("../data/galleries.json");
const galleryData = require("../data/gallery_data.json");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    props: {
      name,
      galleries,
      galleryData
    },
    component: Home
  }
];

Object.keys(galleryData).forEach(name => {
  routes.push({
    path: `/${name}`,
    name,
    props: {
      name,
      galleries,
      galleryData
    },
    component: Gallery
  });
  routes.push({
    path: `/${name}/:id`,
    name: `${name}_id`,
    props: {
      name,
      galleries,
      galleryData
    },
    component: Item
  });
});

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router;
