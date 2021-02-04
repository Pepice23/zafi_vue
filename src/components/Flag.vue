<template>
  <div class="text-center">
    <div class="row  mt-1">
      <div class="col">
        <img
          src="../assets/logos/alliance-logo.png"
          alt="alliance"
          class="flag"
        />
      </div>
      <div class="col">
        <img src="../assets/logos/wow-logo.jpg" alt="wow" class="logo" />
      </div>
      <div class="col">
        <img src="../assets/logos/horde-logo.png" alt="horde" class="flag" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Flag"
};
</script>

<style scoped>
.flag {
  width: 200px;
  height: 200px;
}
.logo {
  width: 400px;
  height: 200px;
}
</style>
