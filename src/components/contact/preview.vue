<template>
  <div class="preview__contact">
    <Title />
    <div class="has-pad container">
      <div class="px-100">
        <div class="description has-text-left">
          <p>入力内容をご確認のうえ、送信ボタンをおしてください。修正の場合はページ下部の</p>
          <p>「修正」ボタンをおしてください</p>
        </div>

        <div class="name">
          <div class="title is-6 fw700">入力内容の確認</div>
        </div>

        <div class="columns is-flex-wrap-wrap fw500 content is-gapless gap40">
          <div class="column is-12 has-text-left gap" v-for="(value, key) in formData" :key="key" v-show="fieldName[key]">
            <div class="columns is-vcentered" >
              <div class="column is-4">
                {{ fieldName[key] }}
              </div>
              <div class="column is-8 py-0">
                <div class="right">
                  {{ Array.isArray(value) ? value.toString() : value}}
                </div>
              </div>
            </div>
          </div>

          <div class="column is-12">
            <div class="terms has-text-centered ">
              <p>Jeisysからのお知らせ（日本語）の受け取りを希望しますか？</p>
              <div class="wrap--checkbox is-justify-content-center">
                <label  class="checkbox wrap--input">
                  <img src="@/assets/check.png" alt="check" />
                  <span>Jeisysからのお知らせメールを受け取る</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="columns is-gapless is-flex-wrap-wrap">
          <div class="column is-12">
            <div class="has-text-centered wrap--button is-justify-content-center">
              <button class="button back fw700" v-on:click="goBack">
                <img class="image default" src="@/assets/ar_left.png" alt="arrow"/>
                <img class="image hover left" src="@/assets/ar_right.png" alt="arrow"/>
                修正
              </button>
              <button class="button submit fw700" type="submit" v-on:click="goNext">
                <img class="image default right" src="@/assets/ar_left.png" alt="arrow"/>
                <img class="image hover" src="@/assets/ar_right.png" alt="arrow"/>
                送信
              </button>
            </div>
          </div>

          <div class="column is-12">
            <p class="policy">本フォームを利用して送信した場合、<br class="is-hidden-desktop"><a href="">個人情報保護方針</a> および <a href="">利用規約</a> に同意したと<br class="is-hidden-desktop">みなします。</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Title from './title'
export default {
  components: {
    Title
  },
  data: () => {
    return {
      formData: {},
      fieldName: {
        typeRequered: 'お問い合わせの種類',
        country: 'ご導入予定国',
        device: 'ご検討中の機器',
        openStatus: '導入検討施設の開業状況',
        companyName: 'ご連絡先施設名・会社名',
        department: '部署名',
        name: 'お名前',
        furigana: 'ふりがな',
        phoneNumber: '電話番号',
        email: 'メールアドレス',
        contactFavorite: 'ご希望のご連絡方法',
        zipCode: '郵便番号',
        province: '都道府県',
        city: '市区町村',
        town: '町番地',
        buidingName: 'ビル名',
        other: 'その他'
      }
    }
  },
  mounted: function () {
    if (localStorage.getItem('formData')) {
      try {
        this.formData = JSON.parse(localStorage.getItem('formData'))
      } catch (e) {
        console.log(e)
      }
    }
  },
  methods: {
    goBack: function () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    goNext: function () {
      localStorage.removeItem('formData')
      this.$router.push('/thanks')
    }
  }
}
</script>

<style lang="sass" scoped>
  .preview__contact
    padding: 0

    .gap40
      gap: 40px

    .px-100
      padding: 0 100px

    .policy
      margin: 20px auto 170px

    @media (max-width: 768px)

      .policy
        text-align: center
        font-size: 15px
        a
          text-decoration: underline

    .py-0
      padding-top: 0
      padding-bottom: 0

    .has-pad
      @media (max-width: 768px)
        padding: 0 15px 50px

    .container
      @media (min-width: 1366px)
        max-width: 1285px

    .content
      .gap
        @media (max-width: 768px)
          margin-bottom: 25px
      .right
        @media (max-width: 768px)
          margin-left: 20px

    .description
      max-width: 770px
      margin: auto
      height: 49px
      margin: 70px auto 100px
      @media (max-width: 768px)
        padding: 0 0 60px

    .wrap--button
      display: flex
      gap: 20px

      @media (max-width: 768px)
        margin-top: 25px

      .button
        background: white
        width: 223px
        height: 85px
        padding: 40px 0
        color: #003a81
        font-size: 20px
        border: solid 1px
        transition: ease 0.5s

        &:hover
          background: #003a81
          color: white

          img
            &.default
              display: none

            &.default.right
              transform: rotate(180deg)
              display: none

            &.hover
              display: block

            &.hover.left
              transform: rotate(180deg)

        img
          margin-right: 25px

          &.default.right
            transform: rotate(180deg)

          &.hover
            display: none

        @media (max-width: 768px)
          width: auto
          padding: 25px

          img
            width: 24px
            margin-right: 10px
            margin-left: 0

    .terms
      max-width: 750px
      margin: 50px auto
      background: #eff5fc
      padding: 30px 50px

      @media (max-width: 768px)
        margin: 25px 0
        padding: 25px 15px
        text-align: left !important

      .wrap--input
        background: transparent
        color: #003a81

    .name
      display: flex
      border-bottom: 1px solid #ccc
      justify-content: space-between
      margin: 0px 0 50px

      @media (max-width: 768px)
        margin: 0 0 25px
        .title
          font-size: 14px

      .title
        padding-left: 10px
        border-left: solid 5px #003a81
        margin-bottom: 20px
        font-size: 25px
        @media (max-width: 768px)
          font-size: 14px

</style>
