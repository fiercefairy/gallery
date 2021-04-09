<template lang="pug">
  .main
    header
      row(container, :gutter="12")
        column(:xs="5", :sm="3", :md="3", :lg="2", :xl="2")
          #logo
            img(alt="Adam Eivy" src="./assets/logo.png")
            ul.links
              li: a.hue-rotate(href="https://twitter.com/antic", target="twitter")
                font-awesome-icon(:icon="{ prefix: 'fab', iconName: 'twitter' }")
              li: a.hue-rotate(href="https://instagram.com/atomantic", target="instagram")
                font-awesome-icon(:icon="{ prefix: 'fab', iconName: 'instagram' }")
        column(:xs="7", :sm="9", :md="9", :lg="10", :xl="10")
          h1 Digital Art Galleries of Adam Eivy
      #nav
        router-link(to="/")
          font-awesome-icon.hue-rotate(:icon="{ prefix: 'fas', iconName: 'home' }")
        span(v-for="(value, name) in galleries" :key="name")
          .split |
          router-link.hue-rotate(:to="'/'+name") {{name.charAt(0).toUpperCase() + name.slice(1)}}
    #content
      router-view(galleries, galleryData)
</template>


<script>
export default {
  name: 'App',
  props: {
    galleries: Object,
    galleryData: Object
  }
}
</script>

<style lang="sass">

body
  font-family: helvetica, arial, sans-serif
  background-color: #000
  color: #fff
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  background-image: url('./assets/bg.png')
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: right bottom

#logo
  img
    width:115px
    display: inline-block
  .links
    list-style: none
    padding:0
    margin: .5em 0 0 0
    display: inline-block
    vertical-align: top
    a
      line-height:1.2em

header
  h1
    margin: 0
    text-align: right
#nav
  text-align: right
  margin: 0 0 1em 0
  .split
    display: inline-block
    width: 1em
    text-align: center
a
  font-weight: bold
  color: #e4a767
a.router-link-exact-active
  color: #ddf6fd
  text-decoration: none

.hue-rotate
  -webkit-animation: filter-animation 60s infinite
  animation: filter-animation 60s infinite

@-webkit-keyframes filter-animation
  0%
    -webkit-filter: hue-rotate(0deg)
  50%
    -webkit-filter: hue-rotate(360deg)
  100%
    -webkit-filter: hue-rotate(0deg)

@keyframes filter-animation
  0%
    filter: hue-rotate(0deg)
  50%
    filter: hue-rotate(360deg)
  100%
    filter: hue-rotate(0deg)
</style>
