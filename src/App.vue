<template>
  <div class="bg-blue-50 overflow-hidden">
    <header
      class="w-screen bg-cover text-white transform transition-all ease-in-out duration-1000 overflow-hidden"
      :style="`background-image: url(${require('./assets/fetrah.jpg')}) `"
      :class="getStarted ? '-translate-y-full h-0' : '-translate-y-0 h-screen'"
    >
      <div
        class="flex justify-center items-center w-full h-full bg-black bg-opacity-50"
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
              <button
                class="rounded-md py-4 px-6 mt-10 text-2xl uppercase bg-blue-300 text-pink-500 hover:text-blue-300 hover:bg-pink-500 transition-colors ease-in-out duration-300 font-bold"
                @click="getStarted = true"
              >
                create
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="container mx-auto my-8 h-screen">
      <input type="file" accept="image/png" @input="preview" />
      <div class="relative w-full overflow-hidden">
        <img :src="image" alt="image" class="z-10 w-full" />
        <img
          src="./assets/fetrah.jpg"
          alt="fetrah-bg"
          class="z-20 absolute inset-0 w-full h-full opacity-50"
        />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    title: "fetrah",
    image: "",
    getStarted: false,
  }),
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
  },
};
</script>
