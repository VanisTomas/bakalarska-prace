<template>
  <div class="ajax-form">
    <loader v-if="loading" :absolute="true" />
    <form @submit.prevent="$emit('saveProduct')">
      <fieldset :disabled="loading">
        <app-input v-model="product.title" type="text" label="Title" :error="error.title" />
        <app-input v-model="product.category_id" type="select" label="Category" :options="categories" :error="error.category" />
        <app-input v-model="product.description" type="textarea" label="Description" :error="error.description" />
        <app-input type="file" label="Image" :error="error.image" @fileSelected="fileSelected" />
        <app-input v-model="product.price" type="text" label="Price" :error="error.price" />
        <app-input v-model="product.in_stock" type="number" label="In stock" :error="error.in_stock" min="0" />
        <input type="submit" class="btn btn-primary" value="Save" />
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  props: ['product', 'loading', 'error', 'categories'],
  methods: {
    fileSelected(value) {
      this.product.image = value;
    }
  }
}
</script>
