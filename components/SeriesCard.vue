<template>
  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <NuxtLink @click="changeItemState" :to="`/item/${series.name}`" href="#">
      <img class="rounded-t-lg" :src="`${imageSiteUrl}${series.poster_path}`" alt="Series Image"/>
    </NuxtLink>
    <div class="p-5">
      <span>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ series.name }}
        </h5>
      </span>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        First air date : {{ series.first_air_date }}
      </p>
      <p v-if="series.overview"
         class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {{ series.overview }}
      </p>

      <p v-else
         class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        No overview available
      </p>
    </div>
  </div>

</template>

<script setup lang="ts">
import type {Series} from "~/types/series";

defineProps<{
  series: Series
}>()

const imageSiteUrl = 'https://image.tmdb.org/t/p/w500/'

const itemState = useState('chosenItem', () => {
})

const changeItemState = (item: any) => {
  itemState.value = item
}
</script>

<style scoped>

</style>