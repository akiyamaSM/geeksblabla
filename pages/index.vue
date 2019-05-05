<template>
  <section class="bg-black h-screen">
    <div>
      <Navigation></Navigation>
    </div>
  </section>
</template>

<script>
import Navigation from '../components/Navigation';

export default {
  components: {
    Navigation
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
