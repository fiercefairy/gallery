<template lang='pug'>
  .gallery
    h1 {{name.charAt(0).toUpperCase() + name.slice(1)}}
    row(container, :gutter="12")
      column(v-for="item in galleryData[name]" :xs="12", :md="4", :lg="3")
        .grid-group-image
          img(v-if="item.token_info.formats[0].mimeType!=='video/mp4'", :src="`https://cloudflare-ipfs.com/ipfs/${item.token_info.artifactUri.replace('ipfs://','')}`")
          video(v-if="item.token_info.formats[0].mimeType==='video/mp4'", :src="`https://ipfs.io/ipfs/${item.token_info.artifactUri.replace('ipfs://','')}`", loop, autoplay)
        .grid-group-meta
          h4.title {{item.token_info.name}}
        hr.grid-group-line
        article.grid-group-text
          p.desc {{item.token_info.description}}
          p HicEtNunc: <a class="link" :href='`https://www.hicetnunc.xyz/objkt/${item.objectId}`'>OBJKT {{item.objectId}}<span class="token_id"></span></a>
</template>


<script>
export default {
  name: 'Gallery',
  props: {
    name: String,
    galleryData: Object
  }
}
</script>

<style lang="sass" scoped>
.gallery
  text-align: center
  img, video
    width:100%
    max-width: 256px
.desc
  text-align: left
</style>
