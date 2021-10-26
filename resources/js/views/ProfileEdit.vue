<template>
  <div class="card">
    <div class="card-body">
      <div class="ajax-form">
        <loader v-if="loading" :absolute="true" />
        <form @submit.prevent="saveChanges">
          <fieldset :disabled="loading">
            <app-input v-model="user.name" type="text" label="Name" placeholder="Name" :error="error.name" />
            <app-input v-model="user.surname" type="text" label="Surname" placeholder="Surname" :error="error.surname" />
            <app-input v-model="user.birthdate" type="date" label="Birthdate" :error="error.birthdate" />
            <app-input v-model="user.email" type="email" label="Email" placeholder="email@email.com" :error="error.email" />
            <input type="submit" class="btn btn-primary" value="Save" />
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import User from '../apis/User';

export default {
  data() {
    return {
      user: { ...this.$store.getters['auth/user'] },
      error: {},
      loading: false
    };
  },
  methods: {
    async saveChanges() {
      if (this.validateInputs()) {
        this.loading = true;
        try {
          const response = await User.update(this.user);
          this.$store.dispatch('auth/updateUser', response.data);
          this.$toasted.success('Profile was successfully saved');
          this.$router.push('/profile');
        } catch (error) {
          if (error.response.status === 422) {
            this.error = this.parseServerErrors(error.response.data.errors);
          }
        }
      }
      this.loading = false;
    },
    validateInputs() {
      this.error = {};
      if (!this.user.name.trim()) {
        this.error.name = 'Name is required';
      }
      if (!this.user.surname.trim()) {
        this.error.surname = 'Surname is required';
      }
      if (!this.user.birthdate.trim()) {
        this.error.birthdate = 'Birthdate is required';
      }
      if (!this.user.email.trim()) {
        this.error.email = 'Email is required';
      } else if (!this.validateEmail(this.user.email)) {
        this.error.email = 'Email is invalid';
      }
      if (this.isObjectEmpty(this.error)) {
        return true;
      }
      return false;
    }
  }
}
</script>
