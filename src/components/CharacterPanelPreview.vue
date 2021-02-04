<template>
  <div class="row w-25 offset-4">
    <div class="col">
      <img
        :src="$store.state.ujKarakter.karakterPicture"
        alt="crest"
        class="crest"
      />
    </div>
    <div class="col">
      <h6>Név: {{ $store.state.ujKarakter.karakterNev }}</h6>
      <h6>Frakció: {{ $store.state.ujKarakter.karakterFaction }}</h6>
      <h6>Nem: {{ $store.state.ujKarakter.karakterGender }}</h6>
      <h6>Faj: {{ $store.state.ujKarakter.karakterRace }}</h6>
      <h6>Kaszt: {{ $store.state.ujKarakter.karakterClass }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterPanelPreview"
};
</script>

<style scoped>
.miniFlag {
  width: 50px;
  height: 50px;
}
.crest {
  width: 200px;
  height: 200px;
}
</style>
