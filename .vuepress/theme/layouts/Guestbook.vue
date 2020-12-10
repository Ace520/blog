<template>
  <div style="max-width: 800px" class="mx-auto guestbook">
    <div>
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
