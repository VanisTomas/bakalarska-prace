<template>
  <div class="card">
    <div class="card-header">Registration</div>
    <div class="card-body">
      <div class="col-md-6 offset-md-3">
        <div class="ajax-form">
          <loader v-if="loading" :absolute="true" />
          <form @submit.prevent="register">
            <fieldset :disabled="loading">
              <app-input v-model="user.name" type="text" label="Name" placeholder="Name" :error="error.name" />
              <app-input v-model="user.surname" type="text" label="Surname" placeholder="Surname" :error="error.surname" />
              <app-input v-model="user.birthdate" type="date" label="Birthdate" :error="error.birthdate" />
              <app-input v-model="user.email" type="email" label="Email" placeholder="email@email.com" :error="error.email" />
              <app-input v-model="user.password" type="password" label="Password" placeholder="**********" :error="error.password" />
              <app-input v-model="user.password_confirmation" type="password" label="Password confirmation" placeholder="**********" :error="error.password_confirmation" />
              <input type="submit" class="btn btn-primary" value="Register" />
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
        name: '',
        surname: '',
        birthdate: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      error: {},
      loading: false
    };
  },
  methods: {
    async register() {
      if (this.validateInputs()) {
        this.loading = true;
        try {
          await User.register(this.user);
          this.$toasted.success('Registration was successful');
          this.$router.push('/login');
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
      if (!this.user.password.trim()) {
        this.error.password = 'Password is required';
      } else if (this.user.password.length < 8) {
        this.error.password = 'Password must be at least 8 characters long';
      }
      if (!this.user.password_confirmation.trim()) {
        this.error.password_confirmation = 'Password confirmation is required';
      } else if (this.user.password !== this.user.password_confirmation) {
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
