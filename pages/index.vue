<template>
  <section class="bg-black min-screen">
    <div>
      <Navigation></Navigation>

      <GeekFooter></GeekFooter>
    </div>
  </section>
</template>

<script>
import Navigation from '../components/Navigation';
import GeekFooter from '../components/GeekFooter';

export default {
  components: {
    Navigation,
    GeekFooter
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
