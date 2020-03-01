<template>
  <b-row class="post-time">
    <b-col cols="6" class="american">
      <i class="famfamfam-flag-us"></i>
      <h3>{{ usPostTime.day }}</h3>
      <h4>{{ usPostTime.time }}</h4>
    </b-col>
    <b-col cols="6" class="philippine">
      <i class="famfamfam-flag-ph"></i>
      <h3>{{ phPostTime.day }}</h3>
      <h4>{{ phPostTime.time }}</h4>
    </b-col>
  </b-row>
</template>

<script>
import moment from "moment-timezone";

export default {
  name: "PostHeader",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dayFormat: "DD MMMM, YYYY",
      timeFormat: "hh:mm a"
    };
  },
  computed: {
    postTime() {
      return parseInt(this.post.date.time, 10) * 1000;
    },
    usPostTime() {
      return this.sendTime(
        moment(this.postTime)
          .locale("en")
          .tz("America/Los_Angeles")
      );
    },
    phPostTime() {
      return this.sendTime(
        moment(this.postTime)
          .locale("tl-ph")
          .tz("Asia/Manila")
      );
    }
  },
  methods: {
    sendTime(time) {
      return {
        day: time.format(this.dayFormat),
        time: time.format(this.timeFormat)
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.post-time {
  font-family: "Damion", cursive;
  text-align: center;

  h3,
  h4 {
    color: #520c28;
  }
}
</style>
