<template>
  <div>
    <button class="auth-button" @click="onGoogleSignInClicked">
      Sign In With Google
    </button>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import firebase from "firebase";

export default Vue.extend({
  methods: {
    onGoogleSignInClicked() {
      const provider = new firebase.auth.GoogleAuthProvider();
      this.$fire.auth.signInWithRedirect(provider)
    }
  }
})
</script>

<style lang='scss' scoped>

.auth-button {
  padding: 8px 16px;
  font-weight: bold;
  border-radius: 4px;
  background: #fafafa;
  border: 1px solid #555;
}

</style>