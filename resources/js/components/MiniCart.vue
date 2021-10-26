<template>
  <div class="dropdown-menu p-2 dropdown-menu-right">
    <div v-if="cart.length" @click.stop>
      <div v-for="item in cart" :key="item.product.id">
        <div class="px-2 d-flex justify-content-between">
          <div>
            <strong>{{ item.product.title }}</strong>
            <br />
            <span>{{ item.quantity }} x {{ item.product.price }} CZK</span>
          </div>
          <div>
            <i class="fas fa-trash-alt fa-2x mt-3" role="button" @click.prevent="removeFromCart(item.product)"></i>
          </div>
        </div>
        <hr />
      </div>
      <div class="d-flex justify-content-between">
        <span>Total: {{ cartTotalPrice }} CZK</span>
        <a href="#" class="btn btn-secondary btn-sm" @click.prevent="clearCart">Clear Cart</a>
      </div>
    </div>
    <h5 v-else class="text-center mt-2">Cart is empty</h5>
    <hr />
    <div class="text-center">
      <router-link class="btn btn-primary" to="/cart">View cart</router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.getters['cart/cart'];
    },
    cartTotalPrice() {
      return this.$store.getters['cart/cartTotalPrice'];
    }
  },
  created() {
    this.$store.dispatch('cart/getCartItems');
  },
  methods: {
    removeFromCart(product) {
      this.$store.dispatch('cart/removeFromCart', product);
    },
    clearCart() {
      this.$store.dispatch('cart/clearCart');
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
  min-width: 320px;
}
.fa-trash-alt:hover {
  opacity: 0.7;
}
</style>
