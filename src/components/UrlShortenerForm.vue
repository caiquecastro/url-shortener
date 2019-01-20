<template>
  <div class="w-full max-w-lg mx-auto">
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      @submit.prevent="shortenUrl"
    >
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="url">
          Url
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          id="url"
          type="url"
          placeholder="http://www.my-very-long-url.com/with-a-very-long-endpoint?and=very-long-query"
          v-model="url"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue text-white font-bold py-2 px-4 rounded"
          type="submit"
          :disabled="formDisabled"
          :class="formButtonClasses"
        >
          Shorten it!
        </button>
      </div>

      <div class="mt-4 p-4 bg-grey-light rounded" v-show="shortenedUrl">
        {{ shortenedUrl }}
      </div>

      <div
        class="mt-4 p-4 bg-red-light text-white rounded"
        v-show="errorMessage"
      >
        {{ errorMessage }}
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      url: "",
      shortenedUrl: "",
      errorMessage: ""
    };
  },
  computed: {
    formDisabled() {
      return !this.url;
    },
    formButtonClasses() {
      if (this.formDisabled) {
        return ["opacity-50", "cursor-not-allowed"];
      }

      return [
        "focus:outline-none",
        "focus:shadow-outline",
        "hover:bg-blue-dark"
      ];
    }
  },
  methods: {
    async shortenUrl() {
      // this.formDisabled = true;
      this.errorMessage = "";

      try {
        let response = await axios.post("http://localhost:3001/shortener", {
          url: this.url
        });

        this.shortenedUrl = response.data.shortenedUrl;
      } catch (err) {
        this.errorMessage = "An error happened";
        // this.formDisabled = false;
      }
    }
  },
  watch: {
    input() {
      this.shortenedUrl = "";
      // this.formDisabled = false;
    }
  }
};
</script>
