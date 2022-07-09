<template>
  <div class="bg-light dark:bg-dark dark:text-light overflow-x-hidden relative">
    <navbar-component />
    <header
      class="w-screen bg-cover text-light transform transition-all ease-in-out duration-1000 overflow-hidden relative"
      :class="getStarted ? '-translate-y-full h-0' : '-translate-y-0 h-screen'"
    >
      <bg-component />
      <div
        class="flex justify-center items-center w-full h-full bg-black bg-opacity-50 relative z-10"
      >
        <div class="relative text-center">
          <h1 class="font-bold mb-16 text-4xl md:text-6xl">
            <div class="mb-4">#{{ title }}</div>
            <div class="mb-4">#support{{ title }}</div>
          </h1>
          <div>
            <h2>make your own cover and support {{ title }}</h2>
            <div class="text-center inline-block">
              <button class="btn btn-primary mt-10" @click="getStarted = true">
                get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="container mx-auto h-full my-20">
      <div
        v-if="!image"
        class="flex justify-center items-center w-full h-screen"
      >
        <label
          for="dropzone-file"
          class="flex flex-col justify-center items-center w-full h-64 border-2 border-dashed cursor-pointer trans-colors rounded-xl max-w-xl bg-primary text-light border-light hover:bg-transparent hover:text-secondary hover:border-secondary dark:bg-secondary dark:border-transparent dark:hover:text-primary dark:hover:border-primary"
        >
          <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <upload-icon :size="80" class="mb-4" />
            <p>
              <span class="font-semibold">Click to upload</span>
              <span v-if="false">or</span>
              <span v-if="false" class="font-semibold">drag and drop</span>
            </p>
            <p class="uppercase font-bold">
              {{
                acceptFilesType.join(", ").replaceAll(globalStringToReplace, "")
              }}
            </p>
            <p>
              <u class="uppercase font-bold">
                {{ acceptFilesType[0].replace(globalStringToReplace, "") }}
              </u>
              preferd
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
        <div class="grid grid-cols-4 gap-8 items-center mb-4">
          <div class="col-span-4 md:col-span-3 flex items-center">
            <label
              for="steps-range"
              class="block mb-2 text-sm font-medium capitalize"
            >
              filter opacity
            </label>
            <input
              v-model="config.opcaity"
              id="steps-range"
              type="range"
              min="5"
              max="95"
              step="5"
              class="w-full h-2 bg-primary rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div class="col-span-4 md:col-span-1 flex items-center">
            <input
              v-model="config.bgTop"
              id="default-checkbox"
              type="checkbox"
              class="w-4 h-4 rounded text-primary border-light focus:ring-primary focus:ring-1"
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium capitalize"
            >
              {{ title }} filter in top
            </label>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          <label class="btn btn-primary cursor-pointer" for="dropzone-file">
            change image
          </label>
          <button class="btn btn-primary" @click="reset">reset all</button>
          <button class="btn btn-primary" @click="download('png')">
            download png
          </button>
          <button class="btn btn-primary" @click="download('jpg')">
            download jpg
          </button>
        </div>
        <div
          id="image-container"
          class="relative w-full h-auto overflow-hidden max-w-xl mx-auto"
        >
          <img :src="image" alt="image" class="z-20 relative w-full h-auto" />
          <bg-component :class="[config.bgTop ? 'z-30' : 'z-10', setOpacity]" />
        </div>
      </div>
    </main>
    <footer-component />

    <!-- upload input -->
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
import { saveAsJpeg, saveAsPng } from "save-html-as-image";
import { title } from "@/config";
import UploadIcon from "vue-material-design-icons/CloudUploadOutline.vue";
import NavbarComponent from "./components/NavbarComponent.vue";
import BgComponent from "./components/BgComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

const defaultConfig = {
  opcaity: 50,
  bgTop: true,
};

export default {
  name: "App",
  components: { UploadIcon, NavbarComponent, BgComponent, FooterComponent },
  data: () => ({
    title,
    globalStringToReplace: "image/",
    image: "",
    getStarted: false,
    moved: false,
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
    download(type = "png") {
      const node = document.getElementById("image-container");
      const options = {
        filename: this.APP_NAME + "-" + Date.now(),
        printDate: false,
      };

      if (type === "png") {
        saveAsPng(node, options);
      } else {
        saveAsJpeg(node, options);
      }
    },
  },
};
</script>
