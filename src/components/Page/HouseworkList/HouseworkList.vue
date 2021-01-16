<template>
  <ul>
    <li
      v-for="housework in houseworks"
      :key="housework.id"
      class="flex items-center justify-between py-6 px-6 shadow rounded-2xl"
    >
      <span class="text-xl font-bold">
        {{ housework.name }}
      </span>
      <span class="text-3xl text-gray-700"> {{ housework.point }}pt </span>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { GetHouseWorks, Housework } from '~/packages/housework/GetHouseWorks'

export default Vue.extend({
  data() {
    return {
      houseworks: [] as Housework[],
    }
  },
  async mounted() {
    this.houseworks = await GetHouseWorks()
  },
})
</script>

<style lang="scss" scoped></style>
