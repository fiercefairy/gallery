<template lang="pug">
  .home
    row(container, :gutter="12")
      column.gallery(v-for="(value, name) in galleries", :xs="6", :s="6", :md="4", :lg="3", :xl="4")
        router-link(:to="`/${name}`")
          img(v-if="galleryData[name].find(i=>i.objectId===`${value.main}`).token_info.formats[0].mimeType!=='video/mp4'", :src="`https://cloudflare-ipfs.com/ipfs/${galleryData[name].find(i=>i.objectId===`${value.main}`).token_info.artifactUri.replace('ipfs://','')}`")
          video(v-if="galleryData[name].find(i=>i.objectId===`${value.main}`).token_info.formats[0].mimeType==='video/mp4'", :src="`https://ipfs.io/ipfs/${galleryData[name].find(i=>i.objectId===`${value.main}`).token_info.artifactUri.replace('ipfs://','')}`", loop, autoplay)
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
  img, video
    width:100%
    max-width: 256px
</style>
