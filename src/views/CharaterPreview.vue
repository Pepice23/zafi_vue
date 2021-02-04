<template>
  <div class="container-fluid text-center">
    <h6>Az elkészült Karakter:</h6>
    <CharacterPanelPreview />
    <button class="btn btn-primary" @click="characterReady">
      Mehet a játék!
    </button>
  </div>
</template>

<script>
import CharacterPanelPreview from "@/components/CharacterPanelPreview";
import { types as actionTypes } from "@/store/actions";
export default {
  name: "CharaterPreview",
  components: { CharacterPanelPreview },
  methods: {
    characterReady() {
      this.$store.dispatch(actionTypes.ADD_NEW_CHARACTER_TO_DB);
    }
  }
};
</script>

<style scoped></style>
