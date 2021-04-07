<template>
  <div id="main">
    <header>
      <app-header />
    </header>
    <main>
      <div class="container">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  components: {
    'app-header': Header
  }
}
</script>
