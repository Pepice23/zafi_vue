import Vue from "vue";
import VueRouter from "vue-router";

import MainMenu from "@/views/MainMenu";
import CharacterCreator from "@/views/CharacterCreator";
import CharacterPreview from "@/views/CharacterPreview";
import CharacterList from "@/views/CharacterList";

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
  { path: "/preview", name: "CReady", component: CharacterPreview },
  { path: "/clist", name: "CList", component: CharacterList }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
