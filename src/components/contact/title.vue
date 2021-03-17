<template>
  <div class="wrap--title" v-bind:class="formName ? 'pt-0' : ''">
    <div class="back has-text-left container" v-bind:class="formName ? formName : ''">
      <button class="button is-inverted" v-on:click="goBack">
        <img class="" src="@/assets/arrow_left.png" />
        戻る
      </button>
    </div>
    <div class="subtitle text-center primary--color is-6 py-15">
        日本語対応）
    </div>
    <div class="title text-center primary--color"> 資料請求・導入のご相談 </div>
  </div>

</template>
<script>
export default {
  name: 'Title',
  props: {
    formName: {
      type: String
    }
  },
  methods: {
    goBack: function () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>
<style lang="sass" scoped>
  $primary: #003a81

  .primary--color
    color: $primary

  .wrap--title
    padding-top: 35px

    @media (min-width: 1366px)
      .container
        max-width: 1170px !important

    @media (max-width: 768px)
      padding: 50px 0 0
      .py-15
        font-size: 12px
        padding: 0 0 15px
        margin: 0 0 15px

    .title
      position: relative;
      padding-bottom: 120px;
      border-bottom: solid 1px $primary
      font-size: 46px

      @media (max-width: 768px)
        font-size: 28px
        padding-bottom: 100px

      &:after
        content: ""
        background: $primary
        position: absolute
        bottom: 90px
        left: calc(50% - 50px)
        height: 1px
        width: 100px
        @media (max-width: 768px)
          bottom: 75px

    .back
      display: flex
      align-items: center

      @media (max-width: 768px)
        padding: 0 15px

        &:not(.form)
          display: none

      .button
        border: none
        font-size: 25px
        color: #003a81
        padding: 0

        @media (max-width: 768px)
          font-size: 16px
          height: 30px
          margin-bottom: 10px

      img
        width: 36px
        margin-right: 15px
        @media (max-width: 768px)
          width: 24px
          margin-right: 5px
</style>
