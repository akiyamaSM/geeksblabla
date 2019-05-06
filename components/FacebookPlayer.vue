<template>
  <div>
    <div class="fb-video min-h-full" :data-href="blabla.content.link.url" data-show-text="false">
    </div>
    <h1 class="text-lg font-medium text-grey-lighter my-4">{{ blabla.content.title }}</h1>
    <h2 class="mb-1 text-sm">May 11, 2019</h2>
  </div>
</template>

<script>
export default {
    props: ['blabla']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>