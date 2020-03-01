<template>
  <b-col cols="12" md="6">
    <b-card>
      <template #header>
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
      {{ post }}
      <template #footer>
        <b-row>
          <b-col cols="6">
            <div class="like_and_reblog">
              <li v-html="post.buttons.like"></li>
              <li class="reblog_btn" v-html="post.buttons.reblog"></li>
            </div>
          </b-col>
          <b-col cols="6">
            <div class="notes-container">
              <div v-if="hasNoteCount">
                <a href="#" @click.prevent="$bvModal.show(notesModalId)">
                  {{ post.note_count.with_label }}
                </a>
                <b-modal
                  :id="notesModalId"
                  @shown="notesModalOpened"
                  @hide="notesModalClosed"
                >
                  <div v-if="notes.loading">
                    <b-spinner /> Loading notes for this post, please wait...
                  </div>
                  <div v-else>
                    <div v-if="notes.content" v-html="notes.content"></div>
                    <div v-else>
                      <p>
                        <strong>
                          Failed to load notes for this post, please try again
                          later.
                        </strong>
                      </p>
                    </div>
                  </div>
                </b-modal>
              </div>
            </div>
          </b-col>
        </b-row>
      </template>
    </b-card>
  </b-col>
</template>

<script>
import moment from "moment-timezone";
import axios from "axios";

export default {
  name: "Post",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dayFormat: "DD MMMM, YYYY",
      timeFormat: "hh:mm a",
      notes: {
        loading: false,
        content: undefined
      }
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
    },
    hasNoteCount() {
      return Object.prototype.hasOwnProperty.call(this.post, "note_count");
    },
    notesModalId() {
      return `post-${this.post.post_id}-notes-modal`;
    }
  },
  methods: {
    sendTime(time) {
      return {
        day: time.format(this.dayFormat),
        time: time.format(this.timeFormat)
      };
    },
    async notesModalOpened() {
      this.notes.loading = true;
      try {
        this.notes.content = (await axios.get(this.post.notes_partial)).data;
      } catch {
        this.notes.content = undefined;
      }
      this.notes.loading = false;
    },
    notesModalClosed() {
      this.notes.content = undefined;
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  background: rgba(255, 255, 255, 0) !important;
  margin: 8px 10px;

  .card-header,
  .card-footer {
    background: rgba(183, 108, 138, 0.93);
  }

  .post-time {
    font-family: "Damion", cursive;
    text-align: center;

    h3,
    h4 {
      color: #520c28;
    }
  }

  .post-reblog-section {
    background: rgba(194, 141, 232, 0.91);
    padding: 2px 10px;

    a {
      color: #e9d796;
      text-decoration: none;
      font-weight: regular;

      &:active,
      &:hover {
        color: #d0b75c;
      }
    }
  }

  .card-body,
  blockquote {
    background: white;
  }

  .card-body {
    padding: 0;

    .text-body {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 5px 15px;
      }

      p {
        margin: 0 15px;
        padding: 10px 0;
      }

      .npf_row {
        margin: 0 !important;
      }

      img {
        width: 100%;
        height: auto;
      }

      blockquote {
        background: #f9f9f9;
        font-family: "Roboto Condensed", sans-serif;
      }

      blockquote + p {
        margin-top: 10px;
      }

      > blockquote {
        font-size: 18px;
        width: 100%;
        height: auto;
        border-left: 10px solid #ccc;
        border-bottom: 5px solid #ccc;
        padding: 3px 10px;
        margin: 0;
        quotes: "“" "”" "‘" "’";
        line-height: 1.4;

        div,
        p {
          margin: 0 25px;
        }

        p:last-of-type {
          margin-bottom: 15px;
        }

        figure {
          margin-top: 20px;
        }

        &:before {
          content: open-quote;
          display: inline;
          line-height: 0;
          position: relative;
          top: 40px;
          color: #ccc;
          font-size: 3em;
        }
      }

      > iframe {
        width: 100%;
      }

      .chat-messages {
        margin: 10px 0;
        list-style-type: circle;
      }
    }
  }

  .card-footer {
    .like_and_reblog {
      li {
        display: inline-block;
        margin-right: 15px;

        .reblog_btn {
          position: absolute;
          bottom: 10.5px;
        }
      }
    }

    .notes-container {
      float: right;

      a {
        color: #684771;

        &:hover,
        &:active {
          color: #756579;
          text-decoration: none;
        }
      }

      .notes-ajax-target {
        overflow-y: scroll;
        padding: 20px;

        ol {
          list-style-type: circle;

          li {
            padding: 5px 0;
          }
        }
      }
    }
  }
}
</style>
