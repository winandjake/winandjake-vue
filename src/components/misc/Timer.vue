<template>
  <div id="timer">
    <h4>Our Next Meetup Is In</h4>
    <p v-if="countdown && remaining > 0">{{ remainingStr }}</p>
    <span v-else
      ><b-spinner />
      <p>Loading...</p></span
    >
  </div>
</template>

<script>
export default {
  name: "Timer",
  props: {
    nextTrip: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      countdown: undefined,
      remaining: -1
    };
  },
  computed: {
    remainingStr() {
      const r = this.remaining;
      const seconds = Math.floor((r / 1000) % 60);
      const minutes = Math.floor((r / 1000 / 60) % 60);
      const hours = Math.floor((r / (1000 * 60 * 60)) % 24);
      const days = Math.floor(r / (1000 * 60 * 60 * 24));
      return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds from now`;
    }
  },
  methods: {
    destroyCountdown() {
      if (this.countdown) {
        clearInterval(this.countdown);
        this.countdown = undefined;
      }
    }
  },
  mounted() {
    this.countdown = setInterval(() => {
      const r = Date.parse(this.nextTrip) - Date.parse(new Date());
      if (r <= 0) {
        this.destroyCountdown();
        return;
      }

      this.remaining = r;
    });
  },
  beforeDestroy() {
    this.destroyCountdown();
  }
};
</script>

<style lang="scss" scoped>
#timer {
  background: #99351e;
  padding: 10px;
  border-radius: 3px;
  float: right;
  position: relative;
  bottom: 125px;
  right: 15px;
  width: 300px;
  text-align: center;
  h4 {
    font-family: "Neucha", cursive;
  }
}
</style>
