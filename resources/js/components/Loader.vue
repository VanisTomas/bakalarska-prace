<template>
  <div class="loader" :class="{ absolute: absolute }">
    <spinner :size="60" :line-size="5" />
  </div>
</template>

<script>
import Spinner from 'vue-simple-spinner';

export default {
  components: {
    'spinner': Spinner
  },
  props: {
    absolute: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.loader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  &.absolute {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    z-index: 10000000;
  }
}
</style>
