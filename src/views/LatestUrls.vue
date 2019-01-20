<template>
  <div class="about">
    <h1 class="text-grey-darker mb-4">Latest Urls</h1>

    <div
        class="mt-4 p-4 bg-red-light text-white rounded"
        v-show="errorMessage"
      >
      {{ errorMessage }}
    </div>

    <table class="w-full">
      <thead>
        <tr>
          <th>Original link</th>
          <th>Shortened link</th>
          <th>Clicks</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="url in urls" :key="url.id">
          <td v-text="url.original"></td>
          <td>
            <a :href="url.shortened" v-text="url.shortened" target="_blank"></a>
          </td>
          <td v-text="url.clicks"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      urls: [],
      errorMessage: ""
    };
  },
  async created() {
    try {
      const response = await axios.get("http://localhost:3001/urls");

      this.urls = response.data;
    } catch (err) {
      this.errorMessage = err.message;
    }
  }
}
</script>
