import Vue from "vue";
import VueRouter from "vue-router";

import MainMenu from "@/views/MainMenu";
import CharacterCreator from "@/views/CharacterCreator";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainMenu",
    component: MainMenu
  },
  {
    path: "/creator",
    name: "CCreator",
    component: CharacterCreator
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
