<template>
  <div id="global-layout" class="flex flex-col">
    <div class="header flex-none bg-cover bg-center" 
    v-lazy:background-image="$withBase($page.frontmatter && $page.frontmatter.bg ? '/images/'+$page.frontmatter.bg : '/images/girl1.jpg')">
        <div class="container mx-auto h-16 flex items-center justify-between">
        <div class="flex items-center">
          <router-link to="/" class="nav-logo">Blog</router-link>
              <SearchBox/>
        </div>
        <div>
            <router-link class="nav-link" :class="item.layout.indexOf($frontmatter.layout) > -1 ? 'nav-link-active':''" v-for="(item,index) in $themeConfig.nav" :key="index" :to="item.link">{{ item.text }}</router-link>
        </div>
        </div>
    </div>
    <div class="flex-1 m-t--8">
        <div class="container mx-auto content">
            <DefaultGlobalLayout/>
        </div>
    </div>
    <div class="flex-none footer mt-16">
        <div class="container mx-auto flex items-center justify-center h-full">
            <a href="https://github.com/ulivz/70-lines-of-vuepress-blog-theme">Github</a> · Powered by VuePress</p>
        </div>
    </div>
  </div>
</template>

<script>
import GlobalLayout from "@app/components/GlobalLayout.vue";
import SearchBox from "@SearchBox";

export default {
  components: { DefaultGlobalLayout: GlobalLayout, SearchBox },
  mounted() {
  },
};
</script>
<style scoped>
.nav-link {
  color: #ffffff;
  margin-left: 1rem;
  background-color: rgba(10, 10, 1, 0.2);
  border-radius: 1rem;
  padding: 0.3rem 0.9rem;
  font-size: 14px;
  text-decoration: none;
}
.nav-link-active {
  color: #f878fa !important;
}
.nav-logo {
  color: #ffffff;
  margin-right: 1.5rem;
  background-color: rgba(10, 10, 1, 0.2);
  border-radius: 1rem;
  padding: 0.3rem 0.9rem;
  font-size: 14px;
  text-decoration: none;
}
.header {
  height: 21rem;
}
.m-t--8 {
  margin-top: -8rem;
}
.content {
  min-height: 100vh;
}
.footer {
  height: 10rem;
  background-color: #eeeeee;
}
</style>