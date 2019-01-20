<template>
  <div id="app" class="container mx-auto">
    <img alt="Vue logo" class="text-center block m-auto" src="./assets/logo.png" />
    <UrlShortnerForm />
    <p class="text-center text-grey text-xs">
      ©2018 - Url Shortener by Caique Castro. All rights reserved.
    </p>
  </div>
</template>

<script>
import UrlShortnerForm from "./components/UrlShortenerForm.vue";

export default {
  name: "app",
  components: {
    UrlShortnerForm
  }
};
</script>
