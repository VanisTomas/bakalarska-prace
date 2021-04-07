<template>
  <div class="card">
    <div class="card-header">Login</div>
    <div class="card-body">
      <div class="col-md-6 offset-md-3">
        <div class="ajax-form">
          <loader v-if="loading" :absolute="true" />
          <form @submit.prevent="login">
            <fieldset :disabled="loading">
              <app-input v-model="user.email" type="email" label="Email" placeholder="email@email.com" :error="error.email" />
              <app-input v-model="user.password" type="password" label="Password" placeholder="**********" :error="error.password" />
              <input type="submit" class="btn btn-primary" value="Login" />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from '../apis/User';

export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      error: {},
      loading: false
    };
  },
  methods: {
    async login() {
      if (this.validateInputs()) {
        this.loading = true;
        try {
          const response = await User.login(this.user);
          this.$store.dispatch('auth/login', response.data);
          this.$toasted.success('Successfully logged in');
          this.$router.push('/shop');
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
      if (!this.user.email.trim()) {
        this.error.email = 'Email is required';
      } else if (!this.validateEmail(this.user.email)) {
        this.error.email = 'Email is invalid';
      }
      if (!this.user.password.trim()) {
        this.error.password = 'Password is required';
      }
      if (this.isObjectEmpty(this.error)) {
        return true;
      }
      return false;
    }
  }
}
</script>
