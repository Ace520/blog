<template>
  <div>
    <div
      class="card flex items-center justify-center"
      style="height: 16rem; margin-bottom: 3rem"
    >
      友情链接
    </div>

    <div class="grid grid-cols-12 gap-4">
      <div
        class="col-span-2 card"
        v-for="(item, index) in $pagination.pages"
        :key="index"
      >
        <div
          v-lazy:background-image="$withBase(item.frontmatter.bg)"
          style="height: 12rem"
        ></div>
        <div class="px-2 mb-4 mt-4">{{ item.title }}</div>
        <div class="px-2 mb-4">{{ item.frontmatter.description }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
};
</script>
