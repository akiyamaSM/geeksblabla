<template>
  <div class="container mx-auto flex-1 flex flex-col md:flex-row text-white font-sans text-xs">
    <div class="episodes md:w-2/5 h-64 md:h-128 overflow-scroll overflow-x-hidden md:mr-5" id="episodes">
      <ListEpisodes v-if="blablas.length !== 0" :blablas="blablas" :active="blablas[0]"></ListEpisodes>
    </div>
    <div class="episode md:w-3/5 h-64 md:h-128 flex flex-col" id="episode">
      <FacebookPlayer v-if="blablas.length !== 0" :blabla="blablas[0]"></FacebookPlayer>
    </div>
  </div>
</template>

<script>

import FacebookPlayer from '../../components/FacebookPlayer'
import ListEpisodes from '../../components/ListEpisodes'

export default {
    head () {
        return {
            script: [
                { src: 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2' }
            ]
        }
    },
    components:{
        FacebookPlayer,
        ListEpisodes
    },
    async asyncData(context){
        let stories = await context.app.$storyapi.get('cdn/stories', {
            'starts_with': 'blablas/',
        });

        return {
            blablas: stories.data.stories,
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
