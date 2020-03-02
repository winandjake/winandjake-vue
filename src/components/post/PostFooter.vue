<template>
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
                    Failed to load notes for this post, please try again later.
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

<script>
import axios from "axios";

export default {
  name: "PostFooter",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      notes: {
        loading: false,
        content: undefined
      }
    };
  },
  computed: {
    hasNoteCount() {
      return Object.prototype.hasOwnProperty.call(this.post, "note_count");
    },
    notesModalId() {
      return `post-${this.post.post_id}-notes-modal`;
    }
  },
  methods: {
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
.like_and_reblog {
  li {
    display: inline-block;
    margin-right: 15px;

    &.reblog_btn {
      position: absolute;
      bottom: 9.4px;
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
</style>
