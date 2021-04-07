<template>
  <div class="card">
    <div class="card-body">
      <loader v-if="loading" />
      <template v-else>
        <template v-if="!isObjectEmpty(product)">
          <div class="mb-3" v-if="admin">
            <router-link class="btn btn-primary" :to="{ name: 'admin-product', params: { id: id } }">Edit</router-link>
            <button class="btn btn-danger" @click="showModal = true">Delete</button>
          </div>
          <div class="row">
            <div class="col-md-4">
              <img class="w-100" :src="product.image" alt="Product Image" />
            </div>
            <div class="col-md-8">
              <h1>{{ product.title }}</h1>
              <h3>{{ product.price }} CZK</h3>
              <h5 :class="{ 'text-success': product.in_stock > 0, 'text-danger': product.in_stock === 0 }">In stock: {{ product.in_stock }}</h5>
              <input v-model="quantity" type="number" min="1" class="text-center col-sm-1 mr-2 p-1" />
              <button class="btn btn-primary" @click="addToCart">Add to Cart</button>
              <p class="mt-2">{{ categoryName }}</p>
            </div>
          </div>
          <p class="mt-2">{{ product.description }}</p>
        </template>
        <h2 v-else>No matching product</h2>
      </template>
      <modal v-if="showModal && admin" title="Delete product" confirmation="Delete" @close="showModal = false" @confirm="deleteProduct">Are you sure, that you want to delete this product ?</modal>
    </div>
  </div>
</template>

<script>
import Product from '../apis/Product';

export default {
  props: ['id'],
  data() {
    return {
      product: {},
      loading: false,
      quantity: 1,
      showModal: false
    };
  },
  created() {
    this.initProduct();
  },
  computed: {
    admin() {
      return this.$store.getters['auth/admin'];
    },
    categoryName() {
      return this.product.category && this.product.category.name ? this.product.category.name : 'Unknown category';
    }
  },
  methods: {
    async initProduct() {
      this.loading = true;
      try {
        const response = await Product.get(this.id);
        this.product = response.data;
      } catch (error) {
        this.product = null;
      }
      this.loading = false;
    },
    addToCart() {
      if (parseInt(this.quantity) > 0) {
        this.$store.dispatch('cart/addToCart', {
          product: this.product,
          quantity: parseInt(this.quantity)
        });
        this.$toasted.success('Product was added to cart');
      } else {
        this.$toasted.error('Invalid quantity');
      }
    },
    deleteProduct() {
      Product.delete(this.id);
      this.$toasted.success('Product was successfully deleted');
      this.$router.push('/shop');
    }
  }
}
</script>
