<template>
  <div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4"
    >
      <div v-for="(item, index) in $pagination.pages" :key="index">
        <div class="card mb-4 p-4 flex justify-between">
          <div class="flex-1 flex flex-col justify-between">
            <router-link :to="item.path" class="font-bold">
              {{ item.title }}
            </router-link>
            <div class="text-sm text-gray-600 leading-6">
              <div class="pl-1" v-if="item.frontmatter.date">
                {{ fDate(item.frontmatter.date) }}
              </div>
              <div class="pl-1" v-if="item.frontmatter.topic">
                {{ item.frontmatter.topic }}
              </div>
              <div v-if="item.frontmatter.tags" class="flex items-center mt-1">
                <div
                  v-for="(item1, index1) in item.frontmatter.tags"
                  :key="index1"
                  class="tag-1 truncate"
                >
                  {{ item1 }}
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="item.frontmatter.bg"
            class="bg-cover bg-center flex-none w-32 h-32"
            v-lazy:background-image="$withBase('/images/' + item.frontmatter.bg)"
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
  methods: {
    fDate(date) {
      let d = new Date(date);
      return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    },
  },
};
</script>
<style scoped>
</style>