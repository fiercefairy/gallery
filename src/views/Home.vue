<template lang="pug">
  .home
    row(container, :gutter="12")
      column.gallery(v-for="(value, name) in thumbs", :xs="6", :s="6", :md="4", :lg="3", :xl="4", :key="name")
        router-link(:to="`/${name}`")
          img(v-if="value.formats[0].mimeType!=='video/mp4'", :src="`https://cloudflare-ipfs.com/ipfs/${value.artifactUri.replace('ipfs://','')}`")
          video(v-if="value.formats[0].mimeType==='video/mp4'", :src="`https://ipfs.io/ipfs/${value.artifactUri.replace('ipfs://','')}`", loop, autoplay)
          .title {{name.charAt(0).toUpperCase() + name.slice(1)}}
</template>

<script>
export default {
  name: 'Home',
  props: {
    galleryData: Object,
    galleries: Object
  },
  computed: {
    // galleries is a human friendly CMS
    // galleryData has all the meta info
    // we need galleryData but the "main" thumb is stored in galleries
    thumbs: function (){
      const items = {};
      Object.keys(this.galleries).forEach(name=>{
        items[name] = this.galleryData[name].find(i=>i.objectId===`${this.galleries[name].main}`).token_info
      })
      return items
    }
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
