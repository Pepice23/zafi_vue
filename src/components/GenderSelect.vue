<template>
  <div class="text-center">
    <div class="row">
      <div class="col">
        <button
          :class="['btn', isSelectedM ? 'btn-success' : 'btn-primary']"
          @click="onMaleSelect"
        >
          Male
        </button>
      </div>
      <div class="col">
        <button
          :class="['btn', isSelectedF ? 'btn-success' : 'btn-primary']"
          @click="onFemaleSelect"
        >
          Female
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { types as mutationTypes } from "@/store/mutations";

export default {
  name: "GenderSelect",
  data() {
    return { isSelectedM: false, isSelectedF: false, selectedGender: "" };
  },
  methods: {
    onMaleSelect() {
      this.selectedGender = "Male";
      this.isSelectedM = true;
      this.isSelectedF = false;
      this.$store.commit(mutationTypes.SET_GENDER, this.selectedGender);
    },
    onFemaleSelect() {
      this.selectedGender = "Female";
      this.isSelectedM = false;
      this.isSelectedF = true;
      this.$store.commit(mutationTypes.SET_GENDER, this.selectedGender);
    }
  }
};
</script>

<style scoped></style>
