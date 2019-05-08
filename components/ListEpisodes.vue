<template>
  <div>
    <div class="preview flex items-center opacity-50 hover:active-episode" :class="{'active-episode': blabla.id === active.id}" v-for="(blabla, index) in blablas" :key="blabla.id" :id="blabla.slug">
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
</template>

<script>
export default {
  props:[
    'blablas',
    'active'
  ],
methods:{
  getUrl(slug){
    return '/blablas/'+ slug;
  }
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
