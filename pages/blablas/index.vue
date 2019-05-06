<template>
  <div>
  </div>
</template>

<script>
export default {
    async asyncData(context){
        let stories = await context.app.$storyapi.get('cdn/stories', {
            'starts_with': 'blablas/',
        });

        return {
            blablas: stories.data.stories,
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>