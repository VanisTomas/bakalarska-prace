<template>
  <div class="mt-3">
    <loader v-if="loading" />
    <template v-else>
      <template v-if="products.length">
        <div class="col-md-3">
          <app-input v-model="order_by" type="select" label="Sort by" :options="sort_options" />
        </div>
        <div class="d-flex align-items-stretch flex-wrap">
          <product-card v-for="product in products" :key="product.id" :product="product" />
        </div>
        <pagination :data="productsData" @pagination-change-page="getResults" />
      </template>
      <h3 v-else>No matching products</h3>
    </template>
  </div>
</template>

<script>
import ProductCard from './ProductCard';
import Product from '../apis/Product';

export default {
  components: {
    'product-card': ProductCard
  },
  data() {
    return {
      productsData: {},
      loading: false,
      order_by: 'title',
      sort_options: [
        {
          value: 'title',
          label: 'Title'
        },
        {
          value: 'category',
          label: 'Category'
        },
        {
          value: 'price_descending',
          label: 'Price descending'
        },
        {
          value: 'price_ascending',
          label: 'Price ascending'
        }
      ],
      filter: {}
    };
  },
  created() {
    this.getResults();
  },
  watch: {
    order_by() {
      this.getResults(1, this.filter, this.order_by);
    },
  },
  computed: {
    products() {
      return this.productsData.data;
    }
  },
  methods: {
    async getResults(page = 1, filter = {}, order_by = this.order_by) {
      this.loading = true;
      this.filter = filter;
      const response = await Product.getProducts(page, filter, order_by);
      this.productsData = response.data;
      this.loading = false;
    }
  }
}
</script>
