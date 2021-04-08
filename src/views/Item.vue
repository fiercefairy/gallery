<template lang='pug'>
  .item
    img(v-if="item.token_info.formats[0].mimeType!=='video/mp4'", :src="`https://cloudflare-ipfs.com/ipfs/${item.token_info.artifactUri.replace('ipfs://','')}`")
    video(v-if="item.token_info.formats[0].mimeType==='video/mp4'", :src="`https://ipfs.io/ipfs/${item.token_info.artifactUri.replace('ipfs://','')}`", loop, autoplay)
    h4.title {{item.token_info.name}}
    p.desc {{item.token_info.description}}
    p Check Availability: <a class="link" target="hen" :href='`https://www.hicetnunc.xyz/objkt/${item.objectId}`'>OBJKT {{item.objectId}}<span class="token_id"></span></a>

</template>


<script>
export default {
  name: 'Item',
  computed: {
    item: function () {
      return this.galleryData[this.name].find(i=>i.objectId===this.$route.params.id)
    }
  },
  props: {
    name: String,
    galleries: Object,
    galleryData: Object,
  }
}
</script>

<style lang="sass" scoped>
h1
  margin: .3em
.gallery
  text-align: center
img, video
  max-width:100%
.desc
  text-align: left
</style>
