<template>
  <div class="text-center">
    <div class="row">
      <div class="col mb-2"></div>
    </div>
    <div class="row">
      <div class="col">
        <div class="col mb-1" v-for="race in alliance" :key="race.name">
          <button
            @click="onRaceSelect(race)"
            :class="[
              'btn',
              race.name === currentlySelectedRaceName
                ? 'btn-success'
                : 'btn-primary'
            ]"
          >
            {{ race.name }}
          </button>
        </div>
      </div>
      <div class="col">
        <div
          class="col mb-1"
          v-for="cls in currentlySelectedRaceAvailableClasses"
          :key="cls"
        >
          <button
            :class="[
              'btn',
              cls === currentlySelectedClass ? 'btn-success' : 'btn-primary'
            ]"
            @click="onClassSelect(cls)"
          >
            {{ cls }}
          </button>
        </div>
      </div>
      <div class="col">
        <div class="col mb-1" v-for="race in horde" :key="race.name">
          <button
            @click="onRaceSelect(race)"
            :class="[
              'btn',
              race.name === currentlySelectedRaceName
                ? 'btn-success'
                : 'btn-primary'
            ]"
          >
            {{ race.name }}
          </button>
        </div>
      </div>
    </div>
    <div class="row text-center">
      <div class="col">
        <button
          class="btn btn-primary"
          @click="onCharacterFinalize"
          :disabled="!isCharacterValid"
          v-if="!$store.state.isFinished"
        >
          Karakter Véglegesítése!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { alliance, horde } from "@/helpers/lists";
import { types as actionTypes } from "@/store/actions";

export default {
  name: "RaceClassPicker",
  data() {
    return {
      alliance: alliance,
      horde: horde,
      currentlySelectedRaceName: "",
      currentlySelectedRaceAvailableClasses: [],
      currentlySelectedClass: "",
      currentlySelectedFaction: "",
      isCharacterValid: false,
      crestPictureString: ""
    };
  },
  methods: {
    onRaceSelect(race) {
      this.currentlySelectedRaceName = race.name;
      this.currentlySelectedRaceAvailableClasses = race.availableClasses;
      this.currentlySelectedClass = "";
      this.currentlySelectedFaction = race.faction;
    },
    onClassSelect(cls) {
      this.currentlySelectedClass = cls;
      this.crestPictureString =
        "http://localhost:8000/media/crests/" +
        this.currentlySelectedClass +
        ".png";
      this.isCharacterValid =
        this.currentlySelectedFaction !== "" ||
        this.currentlySelectedRaceName !== "" ||
        this.currentlySelectedClass !== "";
    },
    onCharacterFinalize() {
      this.$store.dispatch(actionTypes.SET_NEW_CHARACTER, {
        faction: this.currentlySelectedFaction,
        race: this.currentlySelectedRaceName,
        kClass: this.currentlySelectedClass,
        crest: this.crestPictureString
      });
      this.$router.push({ name: "CReady" });
    }
  }
};
</script>

<style scoped></style>
