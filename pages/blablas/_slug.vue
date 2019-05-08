<template>
  <div class="container mx-auto flex-1 flex flex-col md:flex-row text-white font-sans text-xs">
    <div class="episodes md:w-2/5 h-64 md:h-128 overflow-scroll overflow-x-hidden md:mr-5" id="episodes">
      <ListEpisodes v-if="blablas.length !== 0" :blablas="blablas" :active="myBlabla"></ListEpisodes>
    </div>
    <div class="episode md:w-3/5 h-64 md:h-128 flex flex-col" id="episode">
      <FacebookPlayer v-if="blablas.length !== 0" :blabla="myBlabla"></FacebookPlayer>
    </div>
  </div>
</template>

<script>
import FacebookPlayer from '../../components/FacebookPlayer'
import ListEpisodes from '../../components/ListEpisodes'

export default {
  components:{
      FacebookPlayer,
      ListEpisodes
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
      });

      let blablas = stories.data.stories;
      let myBlabla = stories.data.stories.filter((story) => story.slug === context.params.slug);

      if(myBlabla.length === 0){
          context.error("Blabla not found");
      }
      return {
          blablas,
          myBlabla: myBlabla[0]
      }
  },
  methods:{
      getUrl(slug){
          return '/blablas/'+ slug;
      }
  },
  mounted(){
      document.querySelector(`#${this.myBlabla.slug}`).scrollIntoView({behavior: 'instant'})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .preview{
    @apply .rounded-lg .bg-grey-darkest .text-grey-dark .p-3 .m-3;
  }

  .active-episode{
    @apply .opacity-100;
  }
</style>
