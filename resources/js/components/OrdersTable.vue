<template>
  <div class="orders-table">
    <div class="orders-head">
      <div>Order No.</div>
      <div v-if="admin">User</div>
      <div>Date</div>
      <div>Amount</div>
    </div>
    <div v-for="(order, index) in orders" :key="order.id" class="orders-row">
      <div class="orders-row-header" @click="toggleInfo(index)">
        <div>{{ order.id }}</div>
        <div v-if="admin">{{ getUsername(order.user) }}</div>
        <div>{{ dateFormat(order.created_at) }}</div>
        <div>{{ order.amount }} CZK</div>
      </div>
      <transition name="slide">
        <div v-show="detailsDisplayed[index]" class="orders-row-detail">
          <ul class="list-group">
            <li v-for="product in order.product" :key="product.id" class="list-group-item">
              <div class="d-flex justify-content-between">
                <span>{{ product.pivot.quantity }} x {{ product.title }}</span>
                <span>Total: {{ product.pivot.quantity * product.price }} CZK</span>
              </div>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    orders: {
      type: Array,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      detailsDisplayed: []
    };
  },
  methods: {
    toggleInfo(index) {
      if (this.detailsDisplayed[index]) {
        this.$set(this.detailsDisplayed, index, false);
      } else {
        this.$set(this.detailsDisplayed, index, true);
      }
    },
    getUsername(user) {
      return user ? `${user.name} ${user.surname}` : 'Unsigned buyer';
    }
  }
}
</script>

<style lang="scss" scoped>
.orders-table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  .orders-head {
    display: flex;
    vertical-align: bottom;
    border-top: 1px solid #dee2e6;
    border-bottom: 2px solid #dee2e6;
    padding: 0.75rem;
    font-weight: bold;
    > div {
      flex: 1;
    }
  }
  .orders-row {
    border-top: 1px solid #dee2e6;
    &:nth-child(odd) {
      background-color: rgba(0, 0, 0, 0.05);
    }
    .orders-row-header {
      display: flex;
      vertical-align: top;
      padding: 0.75rem;
      cursor: pointer;
      > div {
        flex: 1;
      }
      &:hover {
        background-color: #d6dada;
      }
    }
    .orders-row-detail {
      padding: 1rem;
    }
  }
}
.slide-enter-active,
.slide-leave-active {
  transform-origin: top;
  transition: transform 0.3s ease-in-out;
}
.slide-enter-to,
.slide-leave {
  transform: scaleY(1);
}

.slide-enter,
.slide-leave-to {
  transform: scaleY(0);
}
</style>
