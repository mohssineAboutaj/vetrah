<template>
  <div class="bg-blue-100 overflow-hidden relative">
    <nav
      class="absolute top-0 inset-x-0 z-50 text-blue-100 font-black flex justify-between items-center p-2"
    >
      <img src="./assets/logo.png" alt="logo" class="w-10 h-10" />
      <span class="uppercase">{{ APP_NAME }}</span>
      <img src="./assets/logo.png" alt="logo" class="w-10 h-10" />
    </nav>
    <header
      class="w-screen bg-cover text-white transform transition-all ease-in-out duration-1000 overflow-hidden relative"
      :class="getStarted ? '-translate-y-full h-0' : '-translate-y-0 h-screen'"
    >
      <img
        src="./assets/fetrah.jpg"
        alt="fetrah-bg"
        class="absolute inset-0 h-full w-full z-0"
      />
      <div
        class="flex justify-center items-center w-full h-full bg-black bg-opacity-50 relative z-10"
      >
        <div class="relative text-center">
          <h1 class="font-bold mb-16 text-4xl md:text-6xl">
            <div class="mb-4">#{{ title }}</div>
            <div class="mb-4">#support{{ title }}</div>
          </h1>
          <div>
            <h2 class="text-4xl font-semibold capitalize">
              make your own cover and support {{ title }}
            </h2>
            <div class="text-center inline-block">
              <button class="btn mt-10" @click="getStarted = true">
                get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="container mx-auto h-screen">
      <div
        v-if="!image"
        class="flex justify-center items-center w-screen h-screen"
      >
        <label
          for="dropzone-file"
          class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg
              class="mb-3 w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p
              class="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold"
            >
              {{ acceptFilesType.join(", ").replaceAll("image/", "") }}
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            :accept="acceptFilesType.join(',')"
            class="hidden"
            @input="preview"
          />
        </label>
      </div>
      <div v-else>
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-2 items-center mb-4 mx-4"
        >
          <div>
            <label
              for="steps-range"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              background opacity
            </label>
            <input
              v-model="config.opcaity"
              id="steps-range"
              type="range"
              min="5"
              max="95"
              step="5"
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>
          <div>
            <div class="flex items-center mb-4">
              <input
                v-model="config.bgTop"
                id="default-checkbox"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >background in top</label
              >
            </div>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <label class="btn w-full cursor-pointer" for="dropzone-file">
              change image
            </label>
            <button class="btn-reverse w-full" @click="reset">reset all</button>
          </div>
        </div>
        <div class="relative w-full overflow-hidden max-w-4xl mx-auto">
          <img :src="image" alt="image" class="z-20 w-full relative" />
          <img
            src="./assets/fetrah.jpg"
            alt="fetrah-bg"
            class="absolute inset-0 w-full h-full"
            :class="[setOpacity, config.bgTop ? 'z-30' : 'z-10']"
          />
        </div>
        {{ config }}
      </div>
    </main>
    <input
      id="dropzone-file"
      type="file"
      :accept="acceptFilesType.join(',')"
      class="hidden"
      @input="preview"
    />
  </div>
</template>

<script>
import { name as APP_NAME } from "../package.json";

const defaultConfig = {
  opcaity: 50,
  bgTop: true,
};

export default {
  name: "App",
  data: () => ({
    title: "fetrah",
    APP_NAME,
    image: "",
    getStarted: false,
    config: Object.assign({}, defaultConfig),
    defaultConfig,
    acceptFilesType: ["image/png", "image/jpeg", "image/jpg"],
  }),
  computed: {
    setOpacity() {
      switch (Number(this.config.opcaity)) {
        case 5:
          return "opacity-5";
        case 10:
          return "opacity-10";
        case 15:
          return "opacity-15";
        case 20:
          return "opacity-20";
        case 25:
          return "opacity-25";
        case 30:
          return "opacity-30";
        case 35:
          return "opacity-35";
        case 40:
          return "opacity-40";
        case 45:
          return "opacity-45";
        case 50:
          return "opacity-50";
        case 55:
          return "opacity-55";
        case 60:
          return "opacity-60";
        case 65:
          return "opacity-65";
        case 70:
          return "opacity-70";
        case 75:
          return "opacity-75";
        case 80:
          return "opacity-80";
        case 85:
          return "opacity-85";
        case 90:
          return "opacity-90";
        case 95:
          return "opacity-95";
        default:
          return this.defaultConfig.opcaity;
      }
    },
  },
  methods: {
    readAsDataURL(file) {
      return new Promise((resolve, reject) => {
        const fr = new FileReader();
        fr.onload = () => resolve(fr.result);
        fr.onerror = () => reject(fr);
        fr.readAsDataURL(file);
      });
    },
    preview(e) {
      if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0];

        this.readAsDataURL(file).then((data) => {
          this.image = data;
        });
      }
    },
    reset() {
      this.config = this.defaultConfig;
      this.image = "";
    },
  },
};
</script>
