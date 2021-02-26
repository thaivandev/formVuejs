<template>
  <div>
    <Header />
    <div id="app">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/footer'
import Header from '@/components/header'
export default {
  name: 'App',

  components: {
    Footer,
    Header
  }
}
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;400;700&display=swap')

  body
    @media (max-width: 768px)
      font-size: 14px

  #app
    font-family: 'Noto Sans JP', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50

    .fw500
      font-weight: 500

    .fw700
      font-weight: 700

</style>
