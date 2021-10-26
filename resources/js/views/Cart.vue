<template>
  <div class="card">
    <div class="card-header">Your cart</div>
    <div class="card-body">
      <loader v-if="loading" />
      <template v-else>
        <ul v-if="cart.length" class="list-group">
          <li v-for="item in cart" :key="item.product.id" class="list-group-item">
            <div class="d-flex justify-content-between align-items-center flex-wrap">
              <div>
                <img class="img-thumbnail" :src="item.product.image" alt="Product Image" />
                <span class="ml-1">{{ item.product.title }}</span>
              </div>
              <div>
                <span class="mr-2">Quantity:</span>
                <input v-model="item.quantity" class="text-center col-sm-4" type="number" min="1" :disabled="loading" @change="updateQuantity(item)" />
                <span class="ml-2">{{ item.quantity * item.product.price }} CZK</span>
                <button class="btn btn-danger ml-2" :disabled="loading" @click="removeFromCart(item.product)">Remove</button>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="d-flex justify-content-between align-items-center flex-wrap">
              <span>Total:</span>
              <span>{{ cartTotalPrice }} CZK</span>
            </div>
          </li>
        </ul>
        <h3 v-else>Cart is empty</h3>
        <div v-if="cart.length" class="mt-3">
          <button class="btn btn-secondary" :disabled="loading" @click="clearCart">Clear cart</button>
          <button class="btn btn-primary" :disabled="loading" @click="showModal = true">Create order</button>
        </div>
      </template>
      <modal v-if="showModal" title="Create order" confirmation="Create order" @close="showModal = false" @confirm="createOrder">Are you sure, that you want to create this order ?</modal>
    </div>
  </div>
</template>

<script>
import Order from '../apis/Order';

export default {
  data() {
    return {
      showModal: false,
      loading: false
    };
  },
  computed: {
    cart() {
      return this.$store.getters['cart/cart'];
    },
    cartTotalPrice() {
      return this.$store.getters['cart/cartTotalPrice'];
    }
  },
  methods: {
    removeFromCart(product) {
      this.$store.dispatch('cart/removeFromCart', product);
    },
    clearCart() {
      this.$store.dispatch('cart/clearCart');
    },
    updateQuantity(item) {
      if (item.quantity > 0) {
        this.$store.dispatch('cart/updateQuantity', item);
      }
    },
    async createOrder() {
      this.showModal = false;
      this.loading = true;
      const data = {
        amount: this.cartTotalPrice,
        items: this.cart,
        order_hash: this.generateHash(20)
      };
      await Order.createOrder(data);
      this.$store.dispatch('cart/clearCart');
      this.$toasted.success('Your order was successfully created');
      this.$router.push('/order/' + data.order_hash);
    }
  }
}
</script>

<style lang="scss" scoped>
.img-thumbnail {
  width: 70px;
  height: 70px;
}
</style>
