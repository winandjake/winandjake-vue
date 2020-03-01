<template>
  <section>
    <h1>Win and Jake</h1>
    <Timer nextTrip="June 24 2020" />
  </section>
</template>

<script>
import Timer from "../misc/Timer";

export default {
  name: "Intro",
  components: { Timer }
};
</script>

<style lang="scss" scoped>
section {
  background: #ef8940;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 80px 0 80px 0;

  h1 {
    font-family: "Permanent Marker", cursive;
    text-align: center;
  }
}
</style>
