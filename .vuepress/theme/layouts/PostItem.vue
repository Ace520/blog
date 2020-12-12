<template>
  <div class="grid grid-cols-11 gap-4">
    <div class="card col-span-11 sm:col-span-11 md:col-span-11 lg:col-span-11 xl:col-span-9">
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
    <div class="card col-span-2 sm:hidden md:hidden lg:hidden xl:block">
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