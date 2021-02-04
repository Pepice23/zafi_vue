<template>
  <div class="row w-50 offset-3">
    <div class="col">
      <img
        :src="$store.state.ujKarakter.karakterPicture"
        alt="crest"
        class="crest"
      />
    </div>
    <div class="col">
      <h3>Név: {{ $store.state.ujKarakter.karakterNev }}</h3>
      <h3>Frakció: {{ $store.state.ujKarakter.karakterFaction }}</h3>
      <h3>Nem: {{ $store.state.ujKarakter.karakterGender }}</h3>
      <h3>Faj: {{ $store.state.ujKarakter.karakterRace }}</h3>
      <h3>Kaszt: {{ $store.state.ujKarakter.karakterClass }}</h3>
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
