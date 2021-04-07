<template>
  <div class="modal modal-active">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            {{ title }}
          </h5>
          <button @click="$emit('close')" class="close"><span>&times;</span></button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" @click="$emit('close')">Close</button>
          <button class="btn btn-primary" @click="$emit('confirm')">{{ confirmation }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    confirmation: {
      type: String,
      default: 'Save changes'
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-active {
  display: block;
}
</style>