<template>
  <footer class="text-center text-third dark:text-light">
    <div class="container mx-auto">
      <h2>about {{ title }}</h2>
      <p>
        The main objective of Fetrah is to be a general flag that allows all
        individuals, groups, and factions, to declare their explicit and
        unequivocal rejection of all the directed lopy that are promoted and of
        everything contrary to the natural human instinct,
      </p>
    </div>
    <div class="my-4 capitalize grid grid-cols-2 gap-2">
      <div>
        created by <b>{{ APP_AUTHOR }}</b>
      </div>
      <div>{{ new Date().getFullYear() }} all right reserved</div>
    </div>
  </footer>
</template>

<script>
import { APP_AUTHOR, title } from "@/config";

export default {
  data: () => ({ title, APP_AUTHOR }),
};
</script>
