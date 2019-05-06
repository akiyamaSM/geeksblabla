<template>
  <div class="flex-1 container mx-auto text-white flex items-center justify-center">
      <div class="flex flex-col w-2/5">
          <h1 class="text-5xl leading-normal mb-2">Enjoy Top Tech
              Topics In Darija
              With GeeksBlabla
          </h1>
          <a href="/blablas" class="geek-button self-start">See All Blablas</a>
      </div>
      <div class="w-3/5">
          <FacebookPlayer :blabla="myBlabla"></FacebookPlayer>
      </div>
  </div>
</template>

<script>
import FacebookPlayer from '../components/FacebookPlayer'

export default {
    components: {
        FacebookPlayer
    },
    head () {
        return {
            script: [
                { src: 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2' }
            ]
        }
    },
    async asyncData(context){
        let stories = await context.app.$storyapi.get('cdn/stories', {
            'starts_with': 'blablas/',
            'perPage': 1,
            'page': 1,
        });
        return {
            myBlabla: stories.data.stories[0]
        }
    },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
