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
    <li v-else-if="subtype === 'ordered-list-item'" class="ol">
      {{ block.text }}
    </li>
    <li v-else-if="subtype === 'unordered-list-item'" class="ul">
      {{ block.text }}
    </li>
    <p v-else>{{ block.text }}</p>
  </div>
  <div v-else-if="type === 'image'">
    <img :src="block.media[0].url" />
  </div>
  <a v-else-if="type === 'link'" class="link-container" :href="block.url">
    <h1 v-if="block.site_name || block.title">
      {{ block.site_name || block.title }} &rarr;
    </h1>
    <p v-if="block.description">{{ block.description }}</p>
  </a>
  <div v-else-if="type === 'audio'">
    <div v-if="hasEmbedHtml" v-html="block.embed_html" />
    <iframe v-else-if="hasEmbedUrl" :src="block.embed_url"></iframe>
    <audio controls v-else-if="hasMediaObject">
      <source :src="block.url" :type="block.type" />
    </audio>
    <p v-else>{{ block.url }}</p>
  </div>
  <div v-else-if="type === 'video'">
    <div v-if="hasEmbedHtml" v-html="block.embed_html" />
    <iframe
      v-else-if="hasEmbedIFrame"
      :src="block.embed_iframe.url"
      :height="block.embed_iframe.height + 'px'"
    ></iframe>
    <iframe
      v-else-if="hasEmbedUrl"
      :src="block.embed_url"
      frameBorder="0"
    ></iframe>
    <video controls v-else-if="hasMediaObject">
      <source :src="block.url" :type="block.type" />
    </video>
  </div>
</template>

<script>
export default {
  name: "PostContentBlock",
  props: {
    block: {
      type: Object,
    },
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
    },
    hasMediaObject() {
      return !!this.block.media;
    },
    hasEmbedHtml() {
      return !!this.block.embed_html;
    },
    hasEmbedIFrame() {
      return !!this.block.embed_iframe;
    },
    hasEmbedUrl() {
      return !!this.block.embed_url;
    },
  },
};
</script>

<style lang="scss" scoped>
.heading1-container {
  background: #f7f7f7;
  border-bottom: 2px solid #dfdfdf;
  padding: 5px 0 3px 0;
  margin-bottom: 10px;

  h1 {
    text-align: center;
    font-size: 28px;
  }
}

h2 {
  font-size: 20px;
  margin-left: 15px;
}

p {
  margin: 15px 15px 0 15px;

  &.quirky {
    font-family: "Dancing Script";
    font-size: 32px;
  }

  &.indented {
    margin: 0 30px 0 15px;
    text-align: justify;
    padding: 0 0 0 10px;
    border-left: 3px solid #e7e7e7;
  }

  &.chat {
    font-family: monospace;
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
  padding: 0 10px 55px 10px;
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

.link-container {
  display: block;
  color: inherit;
  background: #f7f7f7;
  padding: 15px;
  border-bottom: 2px solid #e7e7e7;

  h1 {
    margin-left: 15px;
  }
}
</style>
