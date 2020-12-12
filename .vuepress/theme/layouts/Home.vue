<template>
  <div>
    <div class="grid grid-cols-12 gap-4">
      <div
        class="card col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-4 flex items-center justify-center flex-col p-8"
      >
        <div
          class="bg-cover bg-center h-20 w-20 border rounded-full"
          v-lazy:background-image="$withBase('/avatar.jpg')"
        ></div>
        <div class="mt-4 flex items-center pl-5">
          ACE<vp-icon class="ml-1" name="male" />
        </div>
        <div class="flex items-center mt-4">
          <a href="https://github.com/Ace520" target="_blank" class="px-2">
            <vp-icon name="github" size="1.4rem" />
          </a>
          <a href="https://github.com/Ace520" target="_blank" class="px-2">
            <vp-icon name="wechat" size="1.3rem" />
          </a>
          <a href="https://github.com/Ace520" target="_blank" class="px-2">
            <vp-icon name="qq" size="1.5rem" />
          </a>
          <a
            href="https://github.com/Ace520"
            target="_blank"
            class="px-2 text-red-500"
          >
            <vp-icon name="mail" size="1.7rem" />
          </a>
        </div>
      </div>
      <div
        class="card col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-8 p-4 leading-7"
      >
        <div class="font-bold my-2">自我介绍？</div>
        <p>1、一名92年的中年人，现在从事互联网软件的相关研究与开发。</p>
        <p>2、除了偶尔玩下游戏，其余时间都在Coding，这就是所谓的程序人生吧。</p>
        <p>3、我感觉已经可以安排养老了。</p>
        <p>4、对物联网有了兴趣，没事整一下。</p>
        <p>.....</p>
      </div>
    </div>

    <div>
      <div
        class="border-b flex items-center justify-center text-xl mt-10 mb-8 pb-5"
      >
        开源项目
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4"
      >
        <div
          v-for="(item, index) in labs"
          :key="index"
          v-if="index < 2"
          class="card bg-cover bg-center text-white"
          v-lazy:background-image="$withBase(item.frontmatter.bg)"
        >
          <div class="flex flex-col items-center justify-center h-64">
            <div class="text-xl">{{ item.frontmatter.title }}</div>
            <div class="flex items-center my-3">
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
    </div>

    <div>
      <div
        class="border-b flex items-center justify-center text-xl mt-10 mb-8 pb-5"
      >
        话题
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        <div v-for="(item, index) in $topic.list" :key="index" class="card">
          <div
            class="flex items-center justify-between border-b px-4 py-3 text-sm text-gray-600"
          >
            <div>{{ item.name }}({{ item.pages.length }})</div>
            <router-link :to="item.path">更多</router-link>
          </div>
          <div class="px-4 py-3">
            <div
              class="truncate mb-2"
              v-for="(item1, index1) in item.pages"
              :key="index1"
              v-if="index1 < 5"
            >
              <router-link :to="item1.path">{{ item1.title }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div
        class="border-b flex items-center justify-center text-xl mt-10 mb-8 pb-5"
      >
        标签
      </div>
      <div class="flex flex-wrap">
        <router-link
          v-for="(item, index) in $tag.list"
          :key="index"
          :to="item.path"
          class="text-white bg-gray-600 rounded-full text-xs px-5 py-2 m-2"
        >
          {{ item.name }}({{ item.pages.length }})
        </router-link>
      </div>
    </div>

    <div>
      <div
        class="border-b flex items-center justify-center text-xl mt-10 mb-8 pb-5"
      >
        统计
      </div>
      <div
        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4"
      >
        <div class="flex items-center flex-col">
          <div
            class="w-16 h-16 bg-green-300 text-white rounded-full mx-auto border flex items-center justify-center"
          >
            <vp-icon name="posts" size="1.6rem" />
          </div>
          <div class="my-4 font-bold text-2xl">{{ $site.pages.length }}</div>
          <div class="flex w-full text-sm text-gray-600">
            <p class="flex-1 text-right pr-2">文章</p>
            <p>|</p>
            <p class="flex-1 pl-2">POSTS</p>
          </div>
        </div>
        <div class="flex items-center flex-col">
          <div
            class="w-16 h-16 bg-green-300 text-white rounded-full mx-auto border flex items-center justify-center"
          >
            <vp-icon name="lab" size="1.6rem" />
          </div>
          <div class="my-4 font-bold text-2xl">{{ labLen }}</div>
          <div class="flex w-full text-sm text-gray-600">
            <p class="flex-1 text-right pr-2">实验室</p>
            <p>|</p>
            <p class="flex-1 pl-2">LAB</p>
          </div>
        </div>
        <div class="flex items-center flex-col">
          <div
            class="w-16 h-16 bg-green-300 text-white rounded-full mx-auto border flex items-center justify-center"
          >
            <vp-icon name="tag" size="1.4rem" />
          </div>
          <div class="my-4 font-bold text-2xl">{{ $tag.list.length }}</div>
          <div class="flex w-full text-sm text-gray-600">
            <p class="flex-1 text-right pr-2">标签</p>
            <p>|</p>
            <p class="flex-1 pl-2">TAG</p>
          </div>
        </div>
        <div class="flex items-center flex-col">
          <div
            class="w-16 h-16 bg-green-300 text-white rounded-full mx-auto border flex items-center justify-center"
          >
            <vp-icon name="topic" size="1.5rem" />
          </div>
          <div class="my-4 font-bold text-2xl">{{ $topic.pages.length }}</div>
          <div class="flex w-full text-sm text-gray-600">
            <p class="flex-1 text-right pr-2">话题</p>
            <p>|</p>
            <p class="flex-1 pl-2">TOPIC</p>
          </div>
        </div>
        <div class="flex items-center flex-col">
          <div
            class="w-16 h-16 bg-green-300 text-white rounded-full mx-auto border flex items-center justify-center"
          >
            <vp-icon name="link" size="1.6rem" />
          </div>
          <div class="my-4 font-bold text-2xl">{{ linkLen }}</div>
          <div class="flex w-full text-sm text-gray-600">
            <p class="flex-1 text-right pr-2">友链</p>
            <p>|</p>
            <p class="flex-1 pl-2">LINK</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labs: [],
      labLen: 0,
      linkLen: 0,
    };
  },
  mounted() {
    let labs = [];
    for (let i = 0; i < this.$site.pages.length; i++) {
      if (this.$site.pages[i].id == "lab") {
        labs.push(this.$site.pages[i]);
      } else if (this.$site.pages[i].id == "link") {
        this.linkLen = this.linkLen + 1;
      }
    }
    this.labLen = labs.length;
    this.labs = labs.splice(0, 4);
  },
};
</script>
<style scoped>
</style>