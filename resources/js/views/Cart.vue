<template>
  <div class="card">
    <loader v-if="loading" :absolute="true" />
    <div class="card-header">Your cart</div>
    <div class="card-body">
      <template v-if="!showPayment">
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
            <div class="d-flex justify-content-between align-items-center flex-wra">
              <span>Total:</span>
              <span>{{ cartTotalPrice }} CZK</span>
            </div>
          </li>
        </ul>
        <h3 v-else>Cart is empty</h3>
        <div v-if="cart.length" class="mt-3">
          <button class="btn btn-secondary" @click="clearCart">Clear cart</button>
          <button class="btn btn-primary" :disabled="loading" @click="showModal = true">Complete order</button>
        </div>
        <modal v-if="showModal" title="Complete order" confirmation="Complete order" @close="showModal = false" @confirm="goToPayment">Are you sure, that you want to complete this order ?</modal>
      </template>
      <template v-else>
        <payment-button :payment="payment" @success="completeOrder" @error="paymentError" />
        <button class="btn btn-secondary" @click="showPayment = false">Cancel order</button>
      </template>
    </div>
  </div>
</template>

<script>
import Order from '../apis/Order';
import PaymentButton from '../components/PaymentButton';

export default {
  components: {
    'payment-button': PaymentButton
  },
  data() {
    return {
      showModal: false,
      loading: false,
      showPayment: false
    };
  },
  computed: {
    cart() {
      return this.$store.getters['cart/cart'];
    },
    payment() {
      const description = [];
      this.cart.forEach(item => {
        description.push(`${item.product.title}: ${item.quantity} x ${item.product.price} CZK`);
      });
      return {
        amount: this.cartTotalPrice,
        description: description.join(', ')
      };
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
    goToPayment() {
      this.showModal = false;
      this.showPayment = true;
    },
    completeOrder() {
      this.loading = true;
      const data = {
        amount: this.cartTotalPrice,
        items: this.cart
      };
      Order.completeOrder(data);
      this.$store.dispatch('cart/clearCart');
      this.$toasted.success('Your order was successful');
      this.$router.push('/shop');
    },
    paymentError() {
      this.$toasted.error('An error occurred during payment');
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
