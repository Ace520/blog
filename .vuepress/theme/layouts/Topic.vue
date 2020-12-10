<template>
  <ul id="default-layout">
    <li v-for="topic in $topic.list">
      <router-link class="page-link" :to="topic.path">{{ topic.name }}</router-link>
    </li>
  </ul>
</template>