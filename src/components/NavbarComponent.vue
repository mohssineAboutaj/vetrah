<template>
  <nav
    class="fixed top-0 inset-x-0 z-50 font-black flex justify-between items-center p-2 trans-colors"
    :class="
      moved
        ? 'bg-light text-secondary dark:bg-dark dark:text-primary'
        : 'text-primary'
    "
  >
    <a href="/">
      <img src="@/assets/logo.png" alt="logo" class="w-10 h-10" />
    </a>
    <span class="uppercase">{{ APP_NAME }}</span>
    <a :href="APP_REPO" target="_blanc">
      <github-icon :size="35" />
    </a>
  </nav>
</template>

<script setup>
import GithubIcon from "vue-material-design-icons/Github.vue";
import { APP_NAME, APP_REPO } from "@/config";
import { onMounted, ref } from "vue";

// data
const moved = ref(false);

// methods
function checkScrollY() {
  moved.value = window.scrollY > 5;
}

// lifecycle hooks
onMounted(() => {
  checkScrollY();

  window.addEventListener("scroll", () => {
    checkScrollY();
  });
});
</script>
