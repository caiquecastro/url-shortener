<template>
  <div class="about">
    <h1 class="AppTitle">Latest Urls</h1>

    <div class="ErrorMessage" v-show="errorMessage">
      {{ errorMessage }}
    </div>

    <table class="w-full" v-if="!errorMessage">
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
import api from "@/api";

export default {
  data() {
    return {
      urls: [],
      errorMessage: ""
    };
  },
  async created() {
    try {
      const response = await api.get("/urls");

      this.urls = response.data;
    } catch (err) {
      this.errorMessage = err.message;
    }
  }
};
</script>
