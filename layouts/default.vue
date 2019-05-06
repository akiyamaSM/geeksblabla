<template>
  <section class="bg-black min-h-screen flex flex-col">
    <Navigation></Navigation>
      <nuxt />
    <GeekFooter></GeekFooter>
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
  a{
    @apply .no-underline .text-grey-darker .font-medium;
  }

  a:hover{
    @apply .text-grey-light;
  }
</style>
