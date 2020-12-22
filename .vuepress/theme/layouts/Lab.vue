<template>
  <div>
    <div
      style="max-width: 800px; margin-bottom: 3rem"
      v-for="(item, index) in $pagination.pages"
      :key="index"
      class="mx-auto card bg-cover bg-center text-white"
      v-lazy:background-image="$withBase('/images/' + item.frontmatter.bg)"
    >
      <div class="flex flex-col items-center justify-center py-20">
        <div class="text-2xl">{{ item.title }}</div>
        <div class="flex items-center my-5">
          <router-link :to="item.path" class="text-white px-2">
            <vp-icon name="eye" size="1.8rem" />
          </router-link>
          <a
            class="text-white px-2"
            :href="item.frontmatter.url"
            target="_blank"
          >
            <vp-icon name="website" size="1.05rem"
          /></a>
          <a
            class="text-white px-2"
            :href="item.frontmatter.github"
            target="_blank"
          >
            <vp-icon name="github" size="1.3rem" />
          </a>
        </div>
        <div class="">{{ item.frontmatter.description }}</div>
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
