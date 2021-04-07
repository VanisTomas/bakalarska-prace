<template>
  <div class="card">
    <div class="card-header">{{ title }}</div>
    <div class="card-body">
      <loader v-if="loading" />
      <template v-if="showEdit">
        <product-edit :product="product" :loading="saveLoading" :error="error" :categories="categories" @saveProduct="saveProduct" />
      </template>
      <h2 v-if="!product">No matching product</h2>
    </div>
  </div>
</template>

<script>
import Product from '../../apis/Product';
import Category from '../../apis/Category';
import ProductEdit from '../../components/ProductEdit';

export default {
  components: {
    'product-edit': ProductEdit
  },
  data() {
    return {
      product: {
        title: '',
        category_id: 0,
        description: '',
        image: null,
        price: 0,
        in_stock: 0
      },
      loading: false,
      error: {},
      saveLoading: false,
      categories: []
    };
  },
  computed: {
    productId() {
      return this.$route.params.id;
    },
    title() {
      return this.productId ? 'Edit product' : 'Add product';
    },
    showEdit() {
      return !this.loading && !(this.productId && !this.product);
    }
  },
  async created() {
    this.loading = true;
    await this.initCategories();
    if (this.productId) {
      await this.initProduct();
    }
    this.loading = false;
  },
  methods: {
    async initProduct() {
      try {
        const response = await Product.get(this.productId);
        this.product = response.data;
      } catch (error) {
        this.product = null;
      }
    },
    async initCategories() {
      const response = await Category.getAll();
      response.data.forEach(category => {
        this.categories.push({ value: category.id, label: category.name });
      });
    },
    async saveProduct() {
      if (this.validateInputs()) {
        this.saveLoading = true;
        try {
          if (this.productId) {
            await Product.update(this.productId, this.getFormData(this.product));
            this.$router.push('/product/' + this.productId);
          } else {
            await Product.add(this.getFormData(this.product));
            this.$router.push('/admin');
          }
          this.$toasted.success('Product was successfully saved');
        } catch (error) {
          if (error.response.status === 422) {
            this.error = this.parseServerErrors(error.response.data.errors);
          }
        }
      }
      this.saveLoading = false;
    },
    validateInputs() {
      this.error = {};
      if (!this.product.title.trim()) {
        this.error.title = 'Title is required';
      }
      if (!this.product.category_id) {
        this.error.category = 'Category is required';
      }
      if (!this.product.description.trim()) {
        this.error.description = 'Description is required';
      }
      if (parseInt(this.product.in_stock) < 0) {
        this.error.in_stock = 'In stock cannot be negative number';
      }
      if (this.isObjectEmpty(this.error)) {
        return true;
      }
      return false;
    }
  }
}
</script>
