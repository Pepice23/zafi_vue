<template>
  <div class="row w-50 offset-3">
    <div class="col">
      <img
        :src="$store.state.newCharacter.ujKarakter.karakterPicture"
        alt="crest"
        class="crest"
      />
    </div>
    <div class="col">
      <h3>Név: {{ $store.state.newCharacter.ujKarakter.karakterNev }}</h3>
      <h3>
        Frakció: {{ $store.state.newCharacter.ujKarakter.karakterFaction }}
      </h3>
      <h3>Nem: {{ $store.state.newCharacter.ujKarakter.karakterGender }}</h3>
      <h3>Faj: {{ $store.state.newCharacter.ujKarakter.karakterRace }}</h3>
      <h3>Kaszt: {{ $store.state.newCharacter.ujKarakter.karakterClass }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterPanelPreview"
};
</script>

<style scoped>
.crest {
  width: 200px;
  height: 200px;
}
</style>
