<template>
  <div class="card">
    <div class="card-header">Order detail</div>
    <div class="card-body">
      <loader v-if="loading" />
      <template v-else>
        <template v-if="!isObjectEmpty(order)">
          <ul class="list-group mb-4">
            <h4>Summary</h4>
            <li v-for="product in order.product" :key="product.id" class="list-group-item">
              <div class="d-flex justify-content-between">
                <span>{{ product.pivot.quantity }} x {{ product.title }}</span>
                <span>{{ product.pivot.quantity * product.price }} CZK</span>
              </div>
            </li>
            <li class="list-group-item list-group-item-secondary">
              <div class="d-flex justify-content-between">
                <span>Total:</span>
                <span>{{ order.amount }} CZK</span>
              </div>
            </li>
          </ul>
          <template v-if="order.status === 'pending'">
            <payment-button :order-hash="hash" @success="paymentSuccess" @error="paymentError" />
            <button class="btn btn-secondary" @click="showModal = true">Cancel order</button>
          </template>
          <h4 v-else-if="order.status === 'paid'" class="text-success">This order has already been paid</h4>
          <h4 v-else class="text-danger">This order has been cancelled</h4>
        </template>
        <h2 v-else>No matching order</h2>
      </template>
      <modal v-if="showModal" title="Cancel order" confirmation="Cancel order" @close="showModal = false" @confirm="cancelOrder">Are you sure, that you want to cancel this order ?</modal>
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
  props: ['hash'],
  data() {
    return {
      order: {},
      loading: false,
      showModal: false
    };
  },
  created() {
    this.initOrder();
  },
  methods: {
    async initOrder() {
      this.loading = true;
      try {
        const response = await Order.get(this.hash);
        this.order = response.data;
      } catch (error) {
        this.order = null;
      }
      this.loading = false;
    },
    paymentSuccess() {
      this.initOrder();
      this.$toasted.success('Your order was successfully paid');
    },
    paymentError() {
      this.$toasted.error('An error occurred during payment');
    },
    async cancelOrder() {
      this.showModal = false;
      this.loading = true;
      const response = await Order.cancelOrder(this.order.id);
      this.order = response.data;
      this.loading = false;
    }
  }
}
</script>
