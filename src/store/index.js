import Vue from "vue";
import Vuex from "vuex";
import actions from "@/store/actions";
import mutations from "@/store/mutations";

import newCharacter from "@/store/newCharacter";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations,
  actions,
  modules: { newCharacter }
});
