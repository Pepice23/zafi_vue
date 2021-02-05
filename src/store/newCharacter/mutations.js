export const types = {
  SET_CHARACTER_NAME: "SET_CHARACTER_NAME",
  SET_GENDER: "SET_GENDER",
  SET_FACTION: "SET_FACTION",
  SET_RACE: "SET_RACE",
  SET_CLASS: "SET_CLASS",
  SET_CHARACTER_CREST: "SET_CHARACTER_CREST",
  SET_EXISTING_CHARACTER_NAMES: "SET_EXISTING_CHARACTER_NAMES",
  RESET_NEW_CHARACTER: "RESET_NEW_CHARACTER",
  SET_NAME_READY_TRUE: "SET_NAME_READY_TRUE",
  SET_CHARACTER_FINISHED_TRUE: "SET_CHARACTER_FINISHED_TRUE"
};
export default {
  [types.SET_CHARACTER_NAME](state, newCharacterName) {
    state.ujKarakter.karakterNev = newCharacterName;
  },
  [types.SET_EXISTING_CHARACTER_NAMES](state, newCharacterNames) {
    state.meglevoKarakterNevek = newCharacterNames;
  },
  [types.SET_GENDER](state, gender) {
    state.ujKarakter.karakterGender = gender;
    state.isGenderSelected = true;
  },
  [types.SET_FACTION](state, faction) {
    state.ujKarakter.karakterFaction = faction;
  },
  [types.SET_RACE](state, race) {
    state.ujKarakter.karakterRace = race;
  },
  [types.SET_CLASS](state, kClass) {
    state.ujKarakter.karakterClass = kClass;
  },
  [types.SET_CHARACTER_CREST](state, pictureString) {
    state.ujKarakter.karakterPicture = pictureString;
  },
  [types.RESET_NEW_CHARACTER](state) {
    state.ujKarakter.karakterNev = "";
    state.ujKarakter.karakterFaction = "";
    state.ujKarakter.karakterGender = "";
    state.ujKarakter.karakterRace = "";
    state.ujKarakter.karakterClass = "";
    state.ujKarakter.karakterPicture = "";
  },
  [types.SET_NAME_READY_TRUE](state) {
    state.nameReady = true;
  },
  [types.SET_CHARACTER_FINISHED_TRUE](state) {
    state.isFinished = true;
  }
};
