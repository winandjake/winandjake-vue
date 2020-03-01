<template>
  <div v-if="type === 'text'" :class="subtypeContainer">
    <h1 v-if="subtype === 'heading1'">{{ block.text }}</h1>
    <h2 v-else-if="subtype === 'heading2'">{{ block.text }}</h2>
    <p v-else-if="subtype === 'quirky'" class="quirky">{{ block.text }}</p>
    <blockquote v-else-if="subtype === 'quote'">
      <p>{{ block.text }}</p>
    </blockquote>
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
    },
    subtypeContainer() {
      return this.subtype ? this.subtype + "-container" : "";
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

  &.quirky {
    font-family: "Dancing Script";
    font-size: 32px;
  }
}

img {
  width: 100%;
  height: auto;
}

blockquote {
  font-family: "Roboto Condensed", sans-serif;
  font-size: 20px;
  width: 100%;
  height: auto;
  padding: 0 10px 35px 10px;
  quotes: "“" "”";
  line-height: 1.4;

  div,
  p {
    margin: 0 25px;
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
</style>
