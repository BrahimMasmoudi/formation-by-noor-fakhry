<template>
  <!--{{ data?.nowPlayingMovies}}-->
  <section>
    <h1 class=" mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
      Now playing Movies
    </h1>

    <ul class="grid grid-cols-5 gap">
      <li v-for="movie in data?.nowPlayingMovies?.results ??[]">
        <MovieCard :movie="movie"/>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const {data} = await useFetch('/api/movies/now-playing')
</script>

<style scoped>

</style>