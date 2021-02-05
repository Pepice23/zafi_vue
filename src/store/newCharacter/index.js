import mutations from "@/store/newCharacter/mutations";
import actions from "@/store/newCharacter/actions";
export default {
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
  actions
};
