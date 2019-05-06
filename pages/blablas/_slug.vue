<template>
  <div class="container mx-auto flex-1 flex text-white font-sans text-xs">
    <div class="episodes w-2/5 h-128 overflow-scroll overflow-x-hidden mr-5">
      <div class="preview flex items-center opacity-50 hover:active-episode" :class="{'active-episode': blabla.id === myBlabla.id}" v-for="(blabla, index) in blablas" :key="blabla.id" :id="blabla.slug">
        <div class="mr-2">
          <a :href="getUrl(blabla.slug)">
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350" height="50px" width="50px"><path d="M175,0C78.343,0,0,78.343,0,175c0,96.656,78.343,175,175,175c96.656,0,175-78.344,175-175C350,78.343,271.656,0,175,0z M258.738,189.05l-104.386,71.812c-2.904,1.989-6.284,3.006-9.673,3.006c-2.728,0-5.436-0.648-7.93-1.951	c-5.605-2.965-9.125-8.777-9.125-15.103V103.188c0-6.326,3.52-12.139,9.125-15.104c5.605-2.94,12.377-2.535,17.603,1.055	l104.386,71.811c4.619,3.18,7.387,8.441,7.387,14.05C266.125,180.609,263.358,185.87,258.738,189.05z"></path></svg>
          </a>
        </div>
        <div class="details">
          <a :href="getUrl(blabla.slug)">
            <h1 class="text-lg font-medium mb-1">{{ blabla.content.title }}</h1>
            <p>
              {{ blabla.content.time }} | January 24, 2019
            </p>
          </a>
        </div>
      </div>
    </div>
    <div class="episode w-3/5 flex flex-col">
      <FacebookPlayer :blabla="myBlabla"></FacebookPlayer>
    </div>
  </div>
</template>

<script>
import FacebookPlayer from '../../components/FacebookPlayer'

export default {
  components:{
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
