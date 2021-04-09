<template lang='pug'>
  .fullitem
    Obj(:mime="item.token_info.formats[0].mimeType", :hash="item.token_info.artifactUri.replace('ipfs://','')")
    h4.title {{item.token_info.name}}
    p.desc {{item.token_info.description}}
    p Check Availability:&nbsp;
      a.link.hue-rotate(target="hen", :href='`https://www.hicetnunc.xyz/objkt/${item.objectId}`') OBJKT {{item.objectId}}
        span.token_id

</template>


<script>
import Obj from '../components/Obj.vue'
export default {
  name: 'Item',
  components: {
    Obj
  },
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


<style lang="sass">
/* global styles */
.fullitem
  img, video
    max-width: 100%
  iframe, model-viewer
    width: 100%
    height: 700px
</style>
<style lang="sass" scoped>
h1
  margin: .3em
.gallery
  text-align: center
img, video
  max-width:100%
.desc
  text-align: center
  max-width: 500px
  margin: auto
</style>
