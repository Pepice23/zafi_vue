<template>
  <div class="text-center">
    <div class="row">
      <div class="col form-group">
        <label for="name">Karakternév:</label>
        <input
          type="text"
          class="form-control w-50 offset-3"
          id="name"
          v-model="characterName"
        />
        <p v-if="hasError" :style="{ color: 'red' }">{{ nameError }}</p>
        <p v-if="creationComplete" :style="{ color: 'green' }">
          {{ creationComplete }}
        </p>
        <button
          class="btn btn-primary mt-2"
          @click="handleClick"
          :disabled="nameReady"
        >
          Karakternév ellenőrzése
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  forbiddenNames,
  forbiddenNumbers,
  forbiddenSymbols
} from "@/helpers/forbiddenNames";
import { types as mutationTypes } from "@/store/mutations";
import { types as actionTypes } from "@/store/actions";
import { titleCase } from "@/helpers/helperFunctions";

export default {
  name: "NameInput",
  data() {
    return {
      characterName: "",
      nameError: "A név nem megfelelő! Válassz másikat.",
      creationError: "",
      creationComplete: "",
      hasError: false,
      nameReady: false
    };
  },
  methods: {
    handleClick() {
      const readyName = titleCase(this.characterName);
      this.checkNameNasty(this.characterName, forbiddenNames);
      this.checkNameNasty(this.characterName, forbiddenNumbers);
      this.checkNameNasty(this.characterName, forbiddenSymbols);
      this.checkNameExists(readyName, this.$store.state.meglevoKarakterNevek);
      if (!this.hasError) {
        this.$store.commit(mutationTypes.SET_CHARACTER_NAME, readyName);
        this.creationComplete = "A név megfelelő";
        this.nameReady = true;
        setTimeout(() => {
          this.creationComplete = "";
        }, 3000);
      }
    },
    checkNameNasty(charName, nastyNames) {
      charName = charName.toLowerCase();
      const happened = [];
      for (const name of nastyNames) {
        if (charName.includes(name)) {
          happened.push(name);
        }
      }
      if (happened.length !== 0 || charName.length < 3) {
        this.hasError = true;
        setTimeout(() => {
          this.hasError = false;
        }, 3000);
      }
    },
    checkNameExists(charname, existingNames) {
      for (const name of existingNames) {
        const nm = titleCase(name);
        if (charname === nm) {
          this.hasError = true;
          setTimeout(() => {
            this.hasError = false;
          }, 3000);
        }
      }
    }
  },
  created() {
    this.$store.dispatch(actionTypes.GET_EXISTING_CHARACTER_NAMES);
  }
};
</script>

<style scoped></style>
