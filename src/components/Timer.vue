<template>
  <div id="timer">
    <h4>Our Next Meetup Is In</h4>
    <p v-if="countdown && Object.keys(remaining).length">{{ remainingStr }}</p>
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
      remaining: {}
    };
  },
  computed: {
    remainingStr() {
      const r = this.remaining;
      return `${r.days} days, ${r.hours} hours, ${r.minutes} minutes, and ${r.seconds} seconds from now`;
    }
  },
  methods: {
    getTimeRemaining() {
      var total = Date.parse(this.nextTrip) - Date.parse(new Date());
      var seconds = Math.floor((total / 1000) % 60);
      var minutes = Math.floor((total / 1000 / 60) % 60);
      var hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      var days = Math.floor(total / (1000 * 60 * 60 * 24));
      return {
        total,
        days,
        hours,
        minutes,
        seconds
      };
    },
    startCountdown() {
      this.countdown = setInterval(
        () => (this.remaining = this.getTimeRemaining())
      );
    },
    stopCountdown() {
      clearInterval(this.countdown);
    }
  },
  mounted() {
    this.startCountdown();
  },
  beforeDestroy() {
    this.stopCountdown();
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
