import Vue from "vue";
import VueRouter from "vue-router";

import MainMenu from "@/views/MainMenu";
import CharacterCreator from "@/views/CharacterCreator";
import CharaterPreview from "@/views/CharaterPreview";

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
  },
  { path: "/preview", name: "CReady", component: CharaterPreview }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
