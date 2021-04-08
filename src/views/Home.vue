<template lang="pug">
  .home
    row(container, :gutter="12")
      column.gallery(v-for="(value, name) in galleries", :xs="6", :s="6", :md="4", :lg="3", :xl="4")
        router-link(:to="`/${name}`")
          //- p {{galleryData[name].find(i=>i.objectId===`${value.main}`)}}
          img(:src="`https://cloudflare-ipfs.com/ipfs/${galleryData[name].find(i=>i.objectId===`${value.main}`).token_info.artifactUri.replace('ipfs://','')}`")
          .title {{name.charAt(0).toUpperCase() + name.slice(1)}}
</template>

<script>
export default {
  name: 'Home',
  props: {
    galleryData: Object,
    galleries: Object
  }
}
</script>

<style lang="sass" scoped>
.gallery
  text-align: center
  img
    width:100%
    max-width: 256px
</style>
