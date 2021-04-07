<template>
  <div class="card">
    <div class="card-body">
      <router-link class="btn btn-primary" to="profile/edit">Edit profile</router-link>
      <router-link class="btn btn-primary" to="profile/password">Change password</router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters['auth/user'];
    }
  },
}
</script>
