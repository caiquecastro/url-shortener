<template>
  <div class="w-full mx-auto">
    <h1 class="AppTitle">Shorten your url</h1>
    <form @submit.prevent="shortenUrl">
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

      <a
        class="ShortenedLink"
        v-show="shortenedUrl"
        :href="shortenedUrl"
        target="_blank"
      >
        <img class="mr-2" src="../assets/link.svg" alt="Link to Full Address" />
        <span v-text="shortenedUrl"></span>
      </a>

      <div class="ErrorMessage" v-show="errorMessage">
        {{ errorMessage }}
      </div>
    </form>
  </div>
</template>

<script>
import api from "../api";

export default {
  data() {
    return {
      url: "",
      shortenedUrl: "",
      errorMessage: "",
      urlChanged: true
    };
  },
  computed: {
    formDisabled() {
      return !this.url || !this.urlChanged;
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
      this.urlChanged = false;
      this.errorMessage = "";

      try {
        let response = await api.post("/urls", {
          url: this.url
        });

        this.shortenedUrl = response.data.shortenedUrl;
      } catch (err) {
        this.errorMessage = err.message;
      }
    }
  },
  watch: {
    url() {
      this.shortenedUrl = "";
      this.urlChanged = true;
    }
  }
};
</script>
