<template>
  <div class="card">
    <div class="card-header">Category edit</div>
    <div class="card-body">
      <loader v-if="loading" />
      <template v-else>
        <div class="ajax-form" v-if="categories.length">
          <loader v-if="saveLoading" :absolute="true" />
          <div v-for="(category, index) in categories" :key="index" class="form-group d-flex">
            <input v-model="category.name" type="text" class="form-control" :disabled="saveLoading" @change="saveChanges(index)" />
            <button class="btn btn-danger ml-4" :disabled="saveLoading" @click="removeCategory(index)">Delete</button>
          </div>
        </div>
        <h2 v-else>No categories</h2>
        <button class="btn btn-primary" @click="addCategory">Add category</button>
      </template>
    </div>
  </div>
</template>

<script>
import Category from '../../apis/Category';

export default {
  data() {
    return {
      categories: [],
      loading: false,
      saveLoading: false
    };
  },
  created() {
    this.initCategories();
  },
  methods: {
    async initCategories() {
      this.loading = true;
      try {
        const response = await Category.getAll();
        this.categories = response.data;
      } catch (error) {
        this.categories = [];
      }
      this.loading = false;
    },
    addCategory() {
      this.categories.push({ name: '' });
    },
    async removeCategory(index) {
      this.saveLoading = true;
      try {
        if (this.categories[index].id) {
          await Category.delete(this.categories[index].id);
        }
        this.categories.splice(index, 1);
      } catch (error) {
        this.$toasted.error('Deleting category failed');
      }
      this.saveLoading = false;
    },
    async saveChanges(index) {
      this.saveLoading = true;
      try {
        if (this.categories[index].id) {
          await Category.update(this.categories[index].id, this.categories[index]);
        } else {
          const response = await Category.add(this.categories[index]);
          this.categories[index] = response.data;
        }
        this.$toasted.success('Changes saved');
      } catch (error) {
        this.$toasted.error('Category name cannot be empty');
      }
      this.saveLoading = false;
    }
  }
}
</script>
