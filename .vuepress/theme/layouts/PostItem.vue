<template>
  <div class="grid grid-cols-12 gap-4">
    <div class="card col-span-9">
      <div class="p-4 border-b">
        <div class="mb-2">{{ $page.title }}</div>
        <div class="flex">
          <div>{{ $page.frontmatter.topic }}</div>
          <div>{{ $page.frontmatter.tags }}</div>
          <div>{{ $page.frontmatter.date }}</div>
        </div>
      </div>
      <div class="p-4">
        <Content />
      </div>
      <div>
        <Comment />
      </div>
    </div>
    <div class="card col-span-3">
      <div style="height: 100vh; position: sticky; top: 0">
        <div
          class="px-2"
          v-for="(item, index) in $page.headers"
          :key="index"
          :class="'level-' + item.level"
        >
          <a :href="'#' + item.slug">
            {{ item.title }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Comment } from "@vuepress/plugin-blog/lib/client/components";

export default {
  components: {
    Comment,
  },
  mounted() {

  },
};
</script>