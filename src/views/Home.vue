<template lang="pug">
  .home
    row(container, :gutter="12")
      column.gallery(:xs="6", :s="6", :md="4", :lg="3", :xl="2")
        router-link(to="/paintings")
          img(src="https://cloudflare-ipfs.com/ipfs/QmcdBh76zHixZPCFkQ5aZPPmUV8DAg6MRNx5MLQnjbMNwB")
          .title Paintings
      column.gallery(:xs="6", :s="6", :md="4", :lg="3", :xl="2")
        router-link(to="/pretender")
          img(src="https://cloudflare-ipfs.com/ipfs/QmPsGx4CGnuFmNq5jwroSxFC4q7sCHkoRfaWM58kqcWV3Q")
          .title Pretender
      column.gallery(:xs="6", :s="6", :md="4", :lg="3", :xl="2")
        router-link(to="/prosopagnosia")
          img(src="https://cloudflare-ipfs.com/ipfs/QmfGpCHBLVGfYSzJwKFXJdcS6H1tXN2mqgtkYaN8jvkhcN")
          .title Prosopagnosia
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="sass" scoped>
.gallery
  text-align: center
  img
    width:100%
    max-width: 256px
</style>
