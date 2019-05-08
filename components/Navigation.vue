<template>
  <div class="md:flex text-center md:text-left  justify-between items-center mx-auto container py-5">
    <a href="/">
      <h1>
        <img class="h-16" src="https://geeksblabla.com/static/logo-f1bd3fe7ad152a1b1c4dbd0fddf1116f.png" alt="Geeks Bla bla">
      </h1>
    </a>
    <nav>
      <a href="/">Home</a>
      <a href="/blablas">Blablas</a>
      <a href="/about">About</a>
    </nav>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to mit CSS to this component only -->
<style scoped>
nav a{
  @apply .m-2;
}

</style>
