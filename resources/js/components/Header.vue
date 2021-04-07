<template>
  <div class="mb-2">
    <loader v-if="loading" :absolute="true" />
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <router-link class="navbar-brand" to="/">Example e-shop</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/shop">Shop</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown mr-2">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">{{ cartItemCount }}<i class="fas fa-shopping-cart ml-2"></i></button>
            <mini-cart />
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">
              {{ user ? user.name + " " + user.surname : "Account" }}
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <template v-if="admin">
                <router-link class="dropdown-item" to="/admin">Admin</router-link>
              </template>
              <template v-if="user">
                <router-link class="dropdown-item" to="/orders">Orders</router-link>
                <router-link class="dropdown-item" to="/profile">Profile</router-link>
                <a class="dropdown-item" href="#" @click.prevent="logout">Logout</a>
              </template>
              <template v-else>
                <router-link class="dropdown-item" to="/login">Login</router-link>
                <router-link class="dropdown-item" to="/register">Register</router-link>
              </template>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import MiniCart from './MiniCart';
import User from '../apis/User';

export default {
  components: {
    'mini-cart': MiniCart
  },
  data() {
    return {
      loading: false
    };
  },
  computed: {
    user() {
      return this.$store.getters['auth/user'];
    },
    cartItemCount() {
      return this.$store.getters['cart/cartItemCount'];
    },
    admin() {
      return this.$store.getters['auth/admin'];
    }
  },
  methods: {
    async logout() {
      this.loading = true;
      try {
        await User.logout();
        this.$store.dispatch('auth/logout');
        this.$toasted.success('Successfully logged out');
        this.$router.push('/login');
      } catch (error) {
        this.$toasted.error('Logout failed');
      }
      this.loading = false;
    }
  }
}
</script>
