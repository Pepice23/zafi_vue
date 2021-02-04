<template>
  <div class="container-fluid text-center">
    <h1>Az elkészült Karakter:</h1>
    <CharacterPanelPreview />
    <button class="btn btn-primary big-button" @click="characterReady">
      Mehet a játék!
    </button>
  </div>
</template>

<script>
import CharacterPanelPreview from "@/components/CharacterPanelPreview";
import { types as actionTypes } from "@/store/actions";
export default {
  name: "CharacterPreview",
  components: { CharacterPanelPreview },
  methods: {
    characterReady() {
      this.$store.dispatch(actionTypes.ADD_NEW_CHARACTER_TO_DB);
      this.$router.push({ name: "CList" });
    }
  }
};
</script>

<style scoped>
.big-button {
  width: 200px;
  height: 200px;
}
</style>
