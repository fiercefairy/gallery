<template lang='pug'>
  .gallery
    h1 {{name.charAt(0).toUpperCase() + name.slice(1)}}
    p(v-if="galleries[name].description") {{galleries[name].description}}
    vac(v-if="galleries[name].eventTime", :end-time="galleries[name].eventTime")
      template(v-slot:process="{ timeObj }")
        .event
          .date Sales Event on {{new Date(galleries[name].eventTime).toLocaleDateString()}} at {{new Date(galleries[name].eventTime).toLocaleTimeString()}}
          span {{ `${timeObj.d} days, ${timeObj.h} hours, ${timeObj.m} minutes, ${timeObj.s} seconds` }}
      template(v-slot:finish)
        .event Now Available! Visit: <a :href="galleries[name].eventURL" target="hen">{{galleries[name].eventURL}}</a>
    row(container, :gutter="12")
      column(v-for="item in galleryData[name]" :xs="12", :md="4", :lg="3")
        router-link(:to="`${name}/${item.objectId}`")
          img(v-if="item.token_info.formats[0].mimeType!=='video/mp4'", :src="`https://cloudflare-ipfs.com/ipfs/${item.token_info.artifactUri.replace('ipfs://','')}`")
          video(v-if="item.token_info.formats[0].mimeType==='video/mp4'", :src="`https://ipfs.io/ipfs/${item.token_info.artifactUri.replace('ipfs://','')}`", loop, autoplay)
          h4.title {{item.token_info.name}}
        p.desc(v-if="!galleries[name].description") {{item.token_info.description}}
        p Check Availability: <a class="link" target="hen" :href='`https://www.hicetnunc.xyz/objkt/${item.objectId}`'>OBJKT {{item.objectId}}<span class="token_id"></span></a>
        hr
</template>


<script>
export default {
  name: 'Gallery',
  props: {
    name: String,
    galleryData: Object,
    galleries: Object
  }
}
</script>

<style lang="sass" scoped>
h1
  margin: .3em
.gallery
  text-align: center
  img, video
    width:100%
    max-width: 256px
  .event
    background-color: #0b2035
    margin: .2em
    padding: .5em
.desc
  text-align: left
</style>
