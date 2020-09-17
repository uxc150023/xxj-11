<template>
  <div class="page-module">
    <nav-menu :tabs="tabs"></nav-menu>
    <visit-card />
    <router-view />
  </div>
</template>
<script lang="ts" src="./website.ts"></script>
<style lang="scss" scoped>
.page-module {
}
</style>
