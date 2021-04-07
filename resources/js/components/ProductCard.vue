<template>
  <div class="col-md-3 mb-3">
    <div class="card h-100 text-left">
      <img class="card-img-top" :src="product.image" alt="Product Image" />
      <div class="card-body">
        <h4 class="card-title">
          <router-link :to="{ name: 'product', params: { id: product.id } }">{{ product.title }}</router-link>
        </h4>
        <strong>{{ product.price }} CZK</strong>
        <p class="card-text">{{ description }}</p>
      </div>
      <strong class="text-center" :class="{ 'text-success': product.in_stock > 0, 'text-danger': product.in_stock === 0 }">In stock: {{ product.in_stock }}</strong>
      <div class="px-4 pb-3 text-center">
        <button class="btn btn-secondary" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  computed: {
    description() {
      return this.product.description.length > 75 ? `${this.product.description.substring(0, 75)}...` : this.product.description;
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch('cart/addToCart', {
        product: this.product,
        quantity: 1
      });
      this.$toasted.success('Product was added to cart');
    }
  }
}
</script>

<style lang="scss" scoped>
img.card-img-top {
  min-height: 150px;
}
</style>