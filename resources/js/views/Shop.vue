<template>
  <div class="card">
    <div class="card-body">
      <search-filter @search="search" />
      <product-list ref="productList" />
    </div>
  </div>
</template>

<script>
import ProductList from '../components/ProductList';
import SearchFilter from '../components/SearchFilter';

export default {
  components: {
    'product-list': ProductList,
    'search-filter': SearchFilter
  },
  methods: {
    search(filter) {
      this.$refs.productList.getResults(1, filter);
    },
  }
}
</script>
