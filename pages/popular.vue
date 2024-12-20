<template>
  <section>
    <h1 class=" mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
      Popular Movies
    </h1>

    <ul class="grid grid-cols-5 gap">
      <li v-for="movie in data?.movies?.results ??[]">
        <MovieCard :movie="movie"/>
      </li>
    </ul>
  </section>

  <section>
    <h1 class=" mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
      Popular TV series
    </h1>

    <ul class="grid grid-cols-5 gap">
      <li v-for="serie in data?.series?.results ??[]">
        <SeriesCard :series="serie"/>
      </li>
    </ul>
  </section>

</template>

<script setup lang="ts">
const {data} = await useFetch('/api/movies/popular')

</script>

<style scoped>

</style>