<template>
  <div>
    <div v-if="type === 'text'">
      <h1 v-if="subtype === 'heading1'">{{ block.text }}</h1>
      <h2 v-else-if="subtype === 'heading2'">{{ block.text }}</h2>
      <p v-else-if="subtype === 'quirky'" class="quirky">{{ block }}</p>
      <p v-else-if="subtype === 'quote'" class="quote">{{ block.text }}</p>
      <p v-else-if="subtype === 'indented'" class="indented">
        {{ block.text }}
      </p>
      <p v-else-if="subtype === 'chat'" class="chat">{{ block.text }}</p>
      <ol v-else-if="subtype === 'ordered-list-item'">
        {{
          block.text
        }}
      </ol>
      <ul v-else-if="subtype === 'unordered-list-item'">
        {{
          block.text
        }}
      </ul>
      <p v-else>{{ block.text }}</p>
    </div>
    <div v-else-if="type === 'image'">
      <img :src="block.media[0].url" />
    </div>
    <div v-else-if="type === 'link'">
      <p>Link type:</p>
      <pre>{{ block }}</pre>
    </div>
    <div v-else-if="type === 'audio'">
      <p>Audio type:</p>
      <pre>{{ block }}</pre>
    </div>
    <div v-else-if="type === 'video'">
      <p>Video type:</p>
      <pre>{{ block }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostContentBlock",
  props: {
    block: {
      type: Object
    }
  },
  computed: {
    type() {
      return this.block.type;
    },
    subtype() {
      return this.block.subtype;
    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>
