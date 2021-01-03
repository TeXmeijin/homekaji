<template>
  <div>
    <AuthWrapper>
      <h1>Account Page</h1>
      Display when logged in.
      <MyFooter></MyFooter>
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

<style lang="scss" scoped></style>
