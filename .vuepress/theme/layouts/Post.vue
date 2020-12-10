<template>
  <div>
    <div class="grid grid-cols-12 gap-4">
      <div
        class="col-span-4"
        v-for="(item, index) in $pagination.pages"
        :key="index"
      >
        <div class="card mb-4 p-4 flex justify-between">
          <div class="flex-1 flex flex-col justify-between">
            <router-link :to="item.path">
              {{ item.title }}
            </router-link>
            <div>
              <div>{{ item.frontmatter.topic }}</div>
              <div>{{ item.frontmatter.tags }}</div>
              <div>{{ item.frontmatter.date }}</div>
            </div>
          </div>
          <div
            v-if="item.frontmatter.bg"
            class="bg-cover bg-center flex-none"
            v-lazy:background-image="$withBase(item.frontmatter.bg)"
            style="width: 7rem; height: 7rem"
          ></div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <Pagination />
    </div>
  </div>
</template>
<script>
import { Pagination } from "@vuepress/plugin-blog/lib/client/components";

export default {
  components: { Pagination },
  data() {
    return {};
  },
  mounted() {},
};
</script>
