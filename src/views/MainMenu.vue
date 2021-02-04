<template>
  <div class="container-fluid text-center">
    <div class="mt-2">
      <h1>Zafi és az I.N.F.</h1>
      <h4>Incrementál játék</h4>
      <h6>Verzió 0.0.1</h6>
    </div>
    <div class="row mt-1 mb-2">
      <div class="col">
        <button class="btn btn-primary big-button" @click="startCreator">
          Új játék
        </button>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col">
        <button class="btn btn-primary big-button" @click="startExisting">
          Betöltés
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
  methods: {
    startCreator() {
      this.$router.push({ name: "CCreator" });
    },
    startExisting() {
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
