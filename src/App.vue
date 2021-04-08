<template lang="pug">
  .main
    header
      row(container, :gutter="12")
        column(:xs="5", :sm="3", :md="3", :lg="2", :xl="2")
          #logo
            img(alt="Adam Eivy" src="./assets/logo.png")
            span.links
              a(href="https://twitter.com/antic")
                font-awesome-icon(:icon="{ prefix: 'fab', iconName: 'twitter' }")
        column(:xs="7", :sm="9", :md="9", :lg="10", :xl="10")
          h1 Digital Art Galleries of Adam Eivy
      #nav
        router-link(to="/")
          font-awesome-icon(:icon="{ prefix: 'fas', iconName: 'home' }")
        span(v-for="(value, name) in galleries" :key="name")
          .split |
          router-link(:to="'/'+name") {{name.charAt(0).toUpperCase() + name.slice(1)}}
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


#logo
  img
    width:115px
    display: inline-block
  .links
    margin-top: .5em
    display: inline-block
    vertical-align: top

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
  color: #e47f67
a.router-link-exact-active
  color: #ddf6fd
  text-decoration: none

</style>
