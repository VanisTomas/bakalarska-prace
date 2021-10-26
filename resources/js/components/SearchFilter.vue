<template>
  <div class="border-bottom">
    <div class="d-flex justify-content-left align-items-center">
      <app-input v-model="filter.title" type="text" placeholder="Search product" />
      <app-input v-model="filter.category" type="select" :options="categories" />
      <app-input v-model="filter.price" type="range" :max="maxPrice" :label="`Price: ${filter.price} CZK`" />
      <app-input v-model="filter.in_stock" type="checkbox" label="In stock" />
    </div>
    <div class="ml-3 mb-3">
      <button class="btn btn-primary" @click="search">Search</button>
      <button class="btn btn-primary" @click="resetFilter">Reset</button>
    </div>
  </div>
</template>

<script>
import Category from '../apis/Category';
import Product from '../apis/Product';

export default {
  data() {
    return {
      filter: {
        title: '',
        in_stock: false,
        price: 0,
        category: ''
      },
      categories: [
        {
          value: '',
          label: 'All categories'
        }
      ],
      maxPrice: 0
    };
  },
  created() {
    this.initCategories();
    this.initMaxPrice();
  },
  methods: {
    async initCategories() {
      const response = await Category.getAll();
      response.data.forEach(category => {
        this.categories.push({ value: category.id, label: category.name });
      });
    },
    async initMaxPrice() {
      const response = await Product.getMaxPrice();
      this.maxPrice = Math.ceil(response.data);
      this.filter.price = this.maxPrice;
    },
    search() {
      this.$emit('search', this.filter);
    },
    resetFilter() {
      this.filter = {
        title: '',
        in_stock: false,
        price: this.maxPrice,
        category: ''
      };
    }
  }
}
</script>

<style lang="scss" scoped>
.d-flex > div {
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
