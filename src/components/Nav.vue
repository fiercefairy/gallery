<template lang="pug">
  .nav
    router-link(to="/")
      font-awesome-icon.hue-rotate(:icon="{ prefix: 'fas', iconName: 'home' }")
    span(v-for="(value, name) in galleries" :key="name")
      .split |
      router-link.hue-rotate(:to="'/'+name") {{name.charAt(0).toUpperCase() + name.slice(1)}}
</template>

<script>

export default {
  name: 'Nav',
  props: {
    galleries: Object
  }
}
</script>

<style scoped lang="sass">
</style>
