<template>
  <div>
    <FacebookPlayer url="https://www.facebook.com/sfoukahi/videos/2254365704624093/"></FacebookPlayer>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
