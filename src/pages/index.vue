<template>
  <div>
    <AuthWrapper>
      <section class="px-2 py-6">
        <h1>Housework List Page</h1>
        <div>
          <HouseworkList></HouseworkList>
        </div>
        <MyFooter></MyFooter>
      </section>
      <template #logout>
        <p>Googleログイン</p>
        <GoogleAuth></GoogleAuth>
      </template>
    </AuthWrapper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
