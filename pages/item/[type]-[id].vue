<template>
  <div>
    <MovieCard v-if="type === 'movie' && data"  :movie="data.item" />
    <SeriesCard  v-if="type === 'series' && data"  :series="data.item"/>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const id = route.params.id as string
const type = route.params.type as string

const {data} = useFetch(`/api/movies/${type}/${id}`)
</script>

<style scoped>

</style>