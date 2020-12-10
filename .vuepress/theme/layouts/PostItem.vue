<template>
  <div class="grid grid-cols-12 gap-4">
    <div class="card col-span-9">
      <div class="p-4 border-b">
        <div class="mb-3 mt-1 text-lg font-bold">{{ $page.title }}</div>
        <div class="flex items-center text-sm text-gray-600">
          <div class="mr-2" v-if="$page.frontmatter.date">
            {{ fDate($page.frontmatter.date) }}
          </div>
          <div class="mr-2" v-if="$page.frontmatter.topic">
            {{ $page.frontmatter.topic }}
          </div>
          <div v-if="$page.frontmatter.tags" class="flex items-center">
            <div
              v-for="(item, index) in $page.frontmatter.tags"
              :key="index"
              class="tag-1 truncate"
            >
              {{ item }}
            </div>
          </div>
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
          class="px-2 truncate"
          v-for="(item, index) in $page.headers"
          :key="index"
          :class="'level-' + item.level"
        >
          <a class="sidebar-link" :href="'#' + item.slug">
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
  mounted() {},
  methods: {
    fDate(date) {
      let d = new Date(date);
      return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    },
  },
};
</script>