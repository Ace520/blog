<template>
  <div>
    <div
      style="max-width: 800px; margin-bottom: 3rem"
      v-for="(item, index) in $pagination.pages"
      :key="index"
      class="mx-auto card bg-cover bg-center text-white"
      v-lazy:background-image="$withBase(item.frontmatter.bg)"
    >
      <div
        class="flex flex-col items-center justify-center"
        style="padding-top: 4rem; padding-bottom: 4rem"
      >
        <h3>{{ item.title }}</h3>
        <div>
          <a class="text-white px-2" :href="item.frontmatter.url">查看</a>
          <a class="text-white px-2" :href="item.frontmatter.github">github</a>
        </div>
        <div class="m-4">{{ item.frontmatter.description }}</div>
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
