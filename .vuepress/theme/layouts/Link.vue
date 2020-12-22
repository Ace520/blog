<template>
  <div>
    <div
      class="card grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 p-8"
    >
      <div class="flex items-center justify-center">
        <div class="leading-8" style="width: 18rem">
          <p class="py-3 text-lg">本站信息</p>
          <p>名称： Blog</p>
          <p>描述：责难无以成事</p>
          <p>网址：https://ace520.github.io/blog/</p>
          <p>
            图标：<a
              href="https://static.xmt.cn/cc50c217cbe342ce951324583f2c6139.png"
              target="_blank"
              >点击获取</a
            >
          </p>
        </div>
      </div>
      <div class="border-l flex items-center justify-center">
        <div class="leading-8" style="width: 18rem">
          <p class="py-3 text-lg">交友要求</p>
          <p>1、博文总数 >= 30</p>
          <p>2、内容积极乐观</p>
          <p>3、符合国家相关法律法规</p>
          <p>4、符合本人当时心情</p>
        </div>
      </div>
    </div>
    <div class="text-center my-10">
      <a class="text-2xl" href="#linkComment">添加友链</a>
      <p class="text-gray-600 mt-3">
        不定期清理死链，如有误清，请重新留言添加友链
      </p>
    </div>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 my-8"
    >
      <a
        class="card"
        :href="item.frontmatter.url"
        v-for="(item, index) in $pagination.pages"
        :key="index"
        target="_blank"
      >
        <div
          v-lazy:background-image="$withBase('/images/' + item.frontmatter.bg)"
          class="h-48 bg-cover bg-center"
        ></div>
        <div class="p-2">
          <div class="truncate">{{ item.title }}</div>
          <div class="truncate text-sm text-gray-600 mt-1">
            {{ item.frontmatter.description }}
          </div>
        </div>
      </a>
    </div>
    <div class="vssue-1 card" id="linkComment">
      <Comment />
    </div>
  </div>
</template>
<script>
import { Comment } from "@vuepress/plugin-blog/lib/client/components";

export default {
  components: {
    Comment,
  },

  data() {
    return {};
  },
  mounted() {},
};
</script>
