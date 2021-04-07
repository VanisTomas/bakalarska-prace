<template>
  <div class="card">
    <div class="card-body">
      <div class="ajax-form">
        <loader v-if="loading" :absolute="true" />
        <form @submit.prevent="changePassword">
          <fieldset :disabled="loading">
            <app-input v-model="form.old" type="password" label="Old password" placeholder="**********" :error="error.old" />
            <app-input v-model="form.password" type="password" label="New password" placeholder="**********" :error="error.password" />
            <app-input v-model="form.password_confirmation" type="password" label="Password confirmation" placeholder="**********" :error="error.password_confirmation" />
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
      form: {
        old: '',
        password: '',
        password_confirmation: ''
      },
      error: {},
      loading: false
    };
  },
  methods: {
    async changePassword() {
      if (this.validateInputs()) {
        this.loading = true;
        try {
          await User.changePassword(this.form);
          this.$toasted.success('Password successfully changed');
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
      if (!this.form.old.trim()) {
        this.error.old = 'Old password is required';
      }
      if (!this.form.password.trim()) {
        this.error.password = 'New password is required';
      } else if (this.form.password.length < 8) {
        this.error.password = 'New password must be at least 8 characters long';
      }
      if (!this.form.password_confirmation.trim()) {
        this.error.password_confirmation = 'Password confirmation is required';
      } else if (this.form.password !== this.form.password_confirmation) {
        this.error.password_confirmation = 'Passwords do not match';
      }
      if (this.isObjectEmpty(this.error)) {
        return true;
      }
      return false;
    }
  }
}
</script>
