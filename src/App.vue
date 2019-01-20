<template>
  <div id="app" class="container mx-auto">
    <img alt="Url Shortener logo" class="text-center block m-auto" src="./assets/logo.png" />
    <div id="nav" class="bg-white mb-2 p-4 rounded">
      <ul class="list-reset flex mx-auto">
        <li class="mr-6">
          <router-link to="/" class="Nav__button">Home</router-link>
        </li>
        <li class="mr-6">
          <router-link to="/latest" class="Nav__button">Latest urls</router-link>
        </li>
      </ul>
    </div>
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <router-view />
    </div>
    <p class="text-center text-grey text-xs">
      ©2018 - Url Shortener by Caique Castro. All rights reserved.
    </p>
  </div>
</template>
