<template>
  <section class="bg-black min-screen">
    <div>
      <Navigation></Navigation>
        <nuxt />
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
  a{
    @apply .no-underline .text-grey-darker .font-medium;
  }

  a:hover{
    @apply .text-grey-light;
  }
</style>
