<template>
  <div class="card">
    <div class="card-header">Your orders</div>
    <div class="card-body">
      <loader v-if="loading" />
      <template v-else>
        <template v-if="orders.length">
          <orders-table :orders="orders" />
          <pagination :data="ordersData" @pagination-change-page="getResults" />
        </template>
        <h3 v-else>You have no orders</h3>
      </template>
    </div>
  </div>
</template>

<script>
import Order from '../apis/Order';
import OrdersTable from '../components/OrdersTable';

export default {
  components: {
    'orders-table': OrdersTable
  },
  data() {
    return {
      ordersData: {},
      loading: false
    };
  },
  computed: {
    orders() {
      return this.ordersData.data;
    }
  },
  created() {
    this.getResults();
  },
  methods: {
    async getResults(page = 1) {
      this.loading = true;
      const response = await Order.getOrders(page);
      this.ordersData = response.data;
      this.loading = false;
    }
  }
}
</script>
