<template lang="pug">
  .obj
    model-viewer(v-if="mimes.model.includes(mime)", :src="`https://ipfs.io/ipfs/${hash}`",
      ar="true",
      autoplay="true",
      auto-rotate="true",
      data-js-focus-visible="true"
    )
    iframe(v-else-if="mimes.iframe.includes(mime)",
      title="html-embed",
      :src="`https://ipfs.io/ipfs/${hash}`",
      sandbox="allow-scripts",
      allow="accelerometer; camera; microphone; geolocation; xr-spatial-tracking; magnetometer; gyroscope",
      scrolling="no"
    )
    video(v-else-if="mimes.video.includes(mime)", :src="`https://ipfs.io/ipfs/${hash}`", loop, autoplay)
    img(v-else-if="mimes.img.includes(mime)", :mime="mime" :src="`https://cloudflare-ipfs.com/ipfs/${hash}`")
    .unsupported(v-else) Sorry, but {{mime}} is unsupported
</template>

<script>

export default {
  name: 'Obj',
  data: ()=>({
    mimes: {
      video: ['video/mp4', 'video/ogg', 'video/quicktime', 'video/webm'],
      iframe: ['image/svg+xml', 'application/pdf', 'application/zip', 'application/x-zip-compressed', 'multipart/x-zip'],
      model: ['model/gltf-binary','model/gltf+json'],
      img: ['image/bmp','image/gif','image/jpeg','image/png','image/tiff']
    }
  }),
  props: {
    hash: String,
    mime: String
  }
}
</script>

<style scoped lang="sass">
</style>
