<template>
  <div class="container-fluid">
    <Flag />
    <NameInput />
    <GenderSelect />
    <RaceClassPicker />
    <button class="btn btn-primary mt-3" @click="characterReady">
      Mehet a játék
    </button>
  </div>
</template>

<script>
import GenderSelect from "@/components/GenderSelect.vue";
import NameInput from "@/components/NameInput.vue";
import RaceClassPicker from "@/components/RaceClassPicker.vue";
import Flag from "@/components/Flag";
import { types as actionTypes } from "@/store/actions";

export default {
  name: "CharacterCreator",
  components: {
    Flag,
    RaceClassPicker,
    NameInput,
    GenderSelect
  },
  data() {
    return {};
  },
  methods: {
    characterReady() {
      this.$store.dispatch(actionTypes.ADD_NEW_CHARACTER_TO_DB);
    }
  }
};
</script>

<style scoped></style>
