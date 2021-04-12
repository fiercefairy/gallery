<template lang='pug'>
  .gallery
    h1 {{name.charAt(0).toUpperCase() + name.slice(1)}}
    p(v-if="galleries[name].description") {{galleries[name].description}}
    vac(v-if="galleries[name].eventTime", :end-time="galleries[name].eventTime")
      template(v-slot:process="{ timeObj }")
        .event.hue-rotate
          .date Sales Event on {{new Date(galleries[name].eventTime).toLocaleDateString()}} at {{new Date(galleries[name].eventTime).toLocaleTimeString()}}
          span(v-if="timeObj.d!=='0'") {{ `${timeObj.d} days, ` }}
          span(v-if="timeObj.h!=='00'") {{ `${timeObj.h} hours, `}}
          span(v-if="timeObj.m!=='00'") {{ `${timeObj.m} minutes, ` }}
          span {{ `${timeObj.s} seconds` }}
      template(v-slot:finish)
        .event Now Available! Visit: <a :href="galleries[name].eventURL" target="hen">{{galleries[name].eventURL}}</a>
    row(container, :gutter="12")
      column(v-for="item in thumbs" :xs="12", :md="4", :lg="3", :key="item.objectId")
        router-link(:to="`${name}/${item.objectId}`")
          Obj(:mime="item.token_info.formats[0].mimeType", :hash="item.token_info.artifactUri.replace('ipfs://','')")
          h4.title.hue-rotate {{item.token_info && item.token_info.name}}
        p.desc(v-if="!galleries[name].description") {{item.token_info.description}}
        //- p.editions {{item.total_amount}}
        p
          span(v-if="item.swaps && item.swaps.length") {{ lowestPrice(item.swaps) }} XTZ&nbsp;
          span(v-else) SOLD OUT:&nbsp;
          a.link.hue-rotate(target="hen", :href='`https://www.hicetnunc.xyz/objkt/${item.objectId}`') OBJKT {{item.objectId}}
            span.token_id
        hr
</template>


<script>
import Obj from '../components/Obj.vue'
export default {
  name: 'Gallery',
  components: {
    Obj
  },
  methods: {
    lowestPrice: function (swaps) {
      return swaps.reduce((sum, s)=>{
            if(Number(s.xtz_per_objkt) < sum) sum = Number(s.xtz_per_objkt);
            return sum;
          }, Infinity) / 1000000;
    }
  },
  props: {
    name: String,
    galleryData: Object,
    galleries: Object
  },
  computed: {
    // galleries is a human friendly CMS that organizes the items
    // galleryData has all the meta info
    // join up all the data in the order specified by the CMS file
    thumbs: function (){
      console.log(this.galleryData[this.name])
      return this.galleries[this.name].items.map(id=>this.galleryData[this.name].find(o=>o.objectId===`${id}`))
    }
  }
}
</script>
<style lang="sass">
/* global styles */
.gallery
  img, video
    width:100%
    max-width: 256px
  model-viewer, iframe
    width:256px
    height:256px
</style>
<style lang="sass" scoped>
h1
  margin: .3em
  color: #7b7b7b
.gallery
  text-align: center
  .event
    background-color: #0b2035
    margin: .2em
    padding: .5em
.desc
  text-align: left
</style>
