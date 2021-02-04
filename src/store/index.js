import Vue from "vue";
import Vuex from "vuex";
import actions from "@/store/actions";
import mutations from "@/store/mutations";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ujKarakter: {
      karakterNev: "",
      karakterGender: "",
      karakterFaction: "",
      karakterRace: "",
      karakterClass: "",
      karakterPicture: ""
    },
    meglevoKarakterNevek: [],
    isFinished: false,
    nameReady: false,
    isGenderSelected: false
  },
  mutations,
  actions,
  modules: {}
});
