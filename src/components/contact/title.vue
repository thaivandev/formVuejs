<template>
  <div class="wrap--title">
    <div class="back has-text-left container">
      <button class="button is-inverted" v-on:click="goBack">
        <img class="" src="@/assets/arrow_left.png" />
        戻る
      </button>
    </div>
    <div class="subtitle text-center primary--color is-6">
        日本語対応）
    </div>
    <div class="title text-center primary--color"> 資料請求・導入のご相談 </div>
  </div>

</template>
<script>
export default {
  name: 'Title',
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
    padding-top: 25px

    @media (max-width: 768px)
      padding: 30px 0 50px

    .title
      position: relative;
      padding-bottom: 100px;
      border-bottom: solid 1px $primary

      @media (max-width: 768px)
        font-size: 25px
        padding-bottom: 80px

      &:after
        content: ""
        background: $primary
        position: absolute
        bottom: 70px
        left: calc(50% - 50px)
        height: 1px
        width: 100px
        @media (max-width: 768px)
          bottom: 60px

    .back
      display: flex
      align-items: center

      @media (max-width: 768px)
        display: none

      .button
        border: none
        font-size: 25px
        color: #003a81

        @media (max-width: 768px)
          font-size: 16px

      img
        width: 36px
        margin-right: 15px
        @media (max-width: 768px)
          width: 24px
          margin-right: 5px
</style>
