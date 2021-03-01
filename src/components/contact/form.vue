<template>
  <div class="">
    <Title formName="form"/>
    <div class="wrap__form">
      <p class="description is-has-text-left">導入前のご相談から日本人スタッフがすべて日本語でお伺いいたします。まずは以下の専用フォームよりお問い合わせください。最適なご提案をさせていただきます。</p>

      <div class="name container">
        <div class="title is-6 fw700">資料請求・導入のご相談入力フォーム</div>
        <div class="right__content"><span>※</span>入力必須項目</div>
      </div>

      <div class="form__contact container">
        <div class="columns is-vcentered is-flex-wrap-wrap has-text-left gap20">
          <div class="column is-12">
            <div class="columns is-vcentered">
              <div class="column is-3">
                <div class="title is-6 name--filed"><span>※</span>お問い合わせの種類</div>
              </div>
              <div class="column is-9" v-bind:class="formData.error.typeRequered ? 'error' : ''">
                <div class="wrap--checkbox">
                  <label  class="checkbox wrap--input">
                    <input type="checkbox" v-model="formData.typeRequered"   value="導入のご相談"/>
                    <span class="layer"></span>
                    <span class="checkmark"></span>
                    <span>導入のご相談</span>
                  </label>
                  <label class="checkbox wrap--input">
                    <input type="checkbox" v-model="formData.typeRequered" value="資料のご請求">
                    <span class="checkmark"></span>
                    <span class="layer"></span>
                    <span>資料のご請求</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-12">
            <div class="columns is-vcentered is-gapless">
              <div class="column is-3">
                <div class="title is-6 name--filed"><span>※</span>ご導入予定国</div>
              </div>
              <div class="column is-9" v-bind:class="formData.error.country ? 'error' : ''">
                <div class="wrap--radio">
                  <div class="control">
                    <label class="radio  wrap--input">
                      <input type="radio" v-model="formData.country" value="日本">
                      <span class="checkmark"></span>
                      日本
                    </label>
                    <label class="radio  wrap--input">
                      <input type="radio" v-model="formData.country" value="日本以外">
                      <span class="checkmark"></span>
                      日本以外
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="border--bottom pt-4"></div>
          </div>

          <div class="column is-12">
            <div class="columns ">
              <div class="column is-3">
                <div class="title is-6 name--filed py-15"><span>※</span>ご検討中の機器</div>
              </div>
              <div class="column is-9" v-bind:class="formData.error.device ? 'error' : ''">
                <div class="wrap--checkbox">
                  <label class="checkbox wrap--input">
                    <input type="checkbox" v-model="formData.device"  value="ULTRAcel Q+"/>
                    <span class="checkmark"></span>
                    <span class="layer"></span>
                    <span>ULTRAcel Q+ </span>
                  </label>
                  <label class="checkbox wrap--input">
                    <input type="checkbox" v-model="formData.device" value="LinearFirm">
                    <span class="checkmark"></span>
                    <span class="layer"></span>
                    <span>LinearFirm</span>
                  </label>

                  <label class="checkbox wrap--input">
                    <input type="checkbox" v-model="formData.device" value="LIPOcelⅡ">
                    <span class="checkmark"></span>
                    <span class="layer"></span>
                    <span>LIPOcelⅡ</span>
                  </label>
                  <label class="checkbox wrap--input">
                    <input type="checkbox" v-model="formData.device" value="AcGen">
                    <span class="checkmark"></span>
                    <span class="layer"></span>
                    <span>AcGen</span>
                  </label>

                  <label class="checkbox wrap--input">
                    <input type="checkbox" v-model="formData.device" value="POTENZA">
                    <span class="checkmark"></span>
                    <span class="layer"></span>
                    <span>POTENZA</span>
                  </label>
                  <label class="checkbox wrap--input">
                    <input type="checkbox" v-model="formData.device" value="cellec V">
                    <span class="checkmark"></span>
                    <span class="layer"></span>
                    <span>cellec V</span>
                  </label>

                  <label class="checkbox wrap--input">
                    <input type="checkbox" v-model="formData.device" value="smoothcool">
                    <span class="checkmark"></span>
                    <span class="layer"></span>
                    <span>smoothcool</span>
                  </label>
                  <label class="checkbox wrap--input">
                    <input type="checkbox" v-model="formData.device" value="TRI-BEAM PREMIUM">
                    <span class="checkmark"></span>
                    <span class="layer"></span>
                    <span>TRI-BEAM PREMIUM</span>
                  </label>

                  <label class="checkbox wrap--input">
                    <input type="checkbox" v-model="formData.device" value="Edge ONE">
                    <span class="checkmark"></span>
                    <span class="layer"></span>
                    <span>Edge ONE</span>
                  </label>

                </div>
              </div>
            </div>
          </div>

          <div class="column is-12">
            <div class="columns is-vcentered is-gapless">
              <div class="column is-3">
                <div class="title is-6 name--filed"><span>※</span>導入検討施設の開業状況</div>
              </div>
              <div class="column is-9" v-bind:class="formData.error.openStatus ? 'error' : ''">
                <div class="wrap--radio">
                  <div class="control">
                    <label class="radio  wrap--input">
                      <input type="radio" v-model="formData.openStatus" value="開業済">
                      <span class="checkmark"></span>
                      開業済
                    </label>
                    <label class="radio  wrap--input">
                      <input type="radio" v-model="formData.openStatus" value="開業前">
                      <span class="checkmark"></span>
                      開業前
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-12">
            <div class="columns is-vcentered">
              <div class="column is-3">
                <div class="title is-6 name--filed">ご連絡先施設名・会社名</div>
              </div>
              <div class="column is-9">
                <input class="input is-medium" name="companyName" @input="inputHandler" v-model="formData.companyName" type="text" value="" />
              </div>
            </div>
          </div>

          <div class="column is-12">
            <div class="columns is-vcentered">
              <div class="column is-3">
                <div class="title is-6 name--filed">部署名</div>
              </div>
              <div class="column is-9">
                <input class="input is-medium" name="department" v-model="formData.department" @input="inputHandler" type="text" value="" placeholder="個人の方は記入不要" />
              </div>
            </div>
          </div>

          <div class="column is-12">
            <div class="columns is-vcentered">
              <div class="column is-3">
                <div class="title is-6 name--filed"><span>※</span>お名前</div>
              </div>
              <div class="column is-9"  v-bind:class="formData.error.name ? 'error' : ''">
                <input
                  class="input is-medium"
                  name="name"
                  v-model="formData.name"
                  @input="inputHandler"
                  type="text"
                  value=""
                  placeholder="山田 太郎"
                />
                <span class="is-danger" v-show="formData.name == ''">記入漏れ：お名前をご記入ください</span>
              </div>
            </div>
          </div>

          <div class="column is-12">
            <div class="columns is-vcentered">
              <div class="column is-3">
                <div class="title is-6 name--filed"><span>※</span>ふりがな</div>
              </div>
              <div class="column is-9 "  v-bind:class="formData.error.furigana ? 'error' : ''">
                <input class="input is-medium" @input="inputHandler" name="furigana" v-model="formData.furigana" type="text" value="" placeholder="やまだ たろう" />
              </div>
            </div>
          </div>

          <div class="column is-12">
            <div class="columns is-vcentered">
              <div class="column is-3">
                <div class="title is-6 name--filed"><span>※</span>電話番号</div>
              </div>
              <div class="column is-9" v-bind:class="formData.error.phoneNumber ? 'error' : ''">
                <input class="input is-medium" v-model="formData.phoneNumber" @input="inputHandler" name="phoneNumber" type="text" value="" placeholder="例：03-1234-5678" />
                <span>（ハイフンを入れてください）</span>
              </div>
            </div>
          </div>

          <div class="column is-12">
            <div class="columns is-vcentered">
              <div class="column is-3">
                <div class="title is-6 name--filed"><span>※</span>メールアドレス</div>
              </div>
              <div class="column is-9" v-bind:class="formData.error.email ? 'error' : ''">
                <input class="input is-medium" @input="inputHandler" name="email" v-model="formData.email" type="text" value="" placeholder="abc@jeisys.com" />
              </div>
            </div>
          </div>

          <div class="column is-12">
            <div class="columns ">
              <div class="column is-3">
                <div class="title is-6 name--filed py-15"><span>※</span>ご希望のご連絡方法</div>
              </div>
              <div class="column is-9" v-bind:class="formData.error.contactFavorite ? 'error' : ''">
                <div class="wrap--checkbox">
                  <label class="checkbox wrap--input">
                    <input type="checkbox" v-model="formData.contactFavorite"  value="どれでも構わない"/>
                    <span class="checkmark"></span>
                    <span class="layer"></span>
                    <span>どれでも<br class="is-hidden-desktop">構わない </span>
                  </label>
                  <label class="checkbox wrap--input">
                    <input type="checkbox" v-model="formData.contactFavorite" value="メール">
                    <span class="checkmark"></span>
                    <span class="layer"></span>
                    <span>メール</span>
                  </label>

                  <label class="checkbox wrap--input">
                    <input type="checkbox" v-model="formData.contactFavorite" value="電話">
                    <span class="checkmark"></span>
                    <span class="layer"></span>
                    <span>電話</span>
                  </label>
                  <label class="checkbox wrap--input">
                    <input type="checkbox" v-model="formData.contactFavorite" value="オンライン商談（別途日時相談）">
                    <span class="checkmark"></span>
                    <span class="layer"></span>
                    <span class="isMobile">オンライン商談（別途日時相談）</span>
                  </label>
                </div>
                <div class="w-full has-text-right add-more-performance">
                  <a href="">オンライン商談とは ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-12">
            <div class="columns is-vcentered">
              <div class="column is-3">
                <div class="title is-6 name--filed"><span>※</span>郵便番号</div>
              </div>
              <div class="column is-9 zip-code" v-bind:class="formData.error.zipCode ? 'error' : ''">
                <div class="box--zip">
                  <input class="input is-medium" @input="inputHandler" name="zipCode" v-model="formData.zipCode" type="text" value="" placeholder="1230001(半角英数・7桁指定)" />
                  <span>（ハイフンなし）</span>
                </div>
                <button class="button is-medium btn--zipCode">住所検索</button>
              </div>
            </div>
          </div>

          <div class="column is-12">
            <div class="columns is-vcentered">
              <div class="column is-3">
                <div class="title is-6 name--filed"><span>※</span>都道府県</div>
              </div>
              <div class="column is-9" v-bind:class="formData.error.province ? 'error' : ''">
                <div class="select is-medium w-full">
                  <select v-model="formData.province" class="w-full" >
                    <option value="都道府県を選択">都道府県を選択</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-12">
            <div class="columns is-vcentered">
              <div class="column is-3">
                <div class="title is-6 name--filed"><span>※</span>市区町村</div>
              </div>
              <div class="column is-9" v-bind:class="formData.error.city ? 'error' : ''">
                <input class="input is-medium" @input="inputHandler" name="city" v-model="formData.city" type="text" value="" placeholder="新宿区" />
              </div>
            </div>
          </div>

          <div class="column is-12">
            <div class="columns is-vcentered">
              <div class="column is-3">
                <div class="title is-6 name--filed">町番地</div>
              </div>
              <div class="column is-9">
                <input class="input is-medium"  v-model="formData.town" type="text" value="" placeholder="1-1-1" />
              </div>
            </div>
          </div>

          <div class="column is-12">
            <div class="columns is-vcentered">
              <div class="column is-3">
                <div class="title is-6 name--filed">ビル名</div>
              </div>
              <div class="column is-9">
                <input class="input is-medium" v-model="formData.buildingName" type="text" value="" placeholder="例：03-1234-5678" />
              </div>
            </div>
          </div>

          <div class="column is-12">
            <div class="columns is-vcentered">
              <div class="column is-3">
                <div class="title is-6 name--filed">その他</div>
              </div>
              <div class="column is-9">
                <textarea class="textarea is-medium" v-model="formData.other" value="" placeholder="ご質問・ご希望等ありましたらご記入ください" ></textarea>
              </div>
            </div>
          </div>

          <div class="column is-12">
            <div class="terms has-text-centered ">
              <p>Jeisysからのお知らせ（日本語）の受け取りを希望しますか？</p>
              <div class="wrap--checkbox is-justify-content-center">
                <label  class="checkbox wrap--input terms">
                  <input type="checkbox" v-model="formData.terms"  value="Jeisysからのお知らせメールを受け取る"/>
                  <span class="checkmark"></span>
                  <span v-bind:class="!formData.terms ? 'error' : ''">Jeisysからのお知らせメールを受け取る</span>
                </label>
              </div>
            </div>
          </div>

          <div class="column is-12">
            <div class="has-text-centered ">
              <button class="button submit fw700" type="submit" v-on:click="checkForm"> <img class="image" src="@/assets/ar_right.png" alt="arrow" /> 入力内容確認</button>
            </div>
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
      formData: {
        typeRequered: ['導入のご相談'],
        country: '日本',
        device: ['ULTRAcel Q+'],
        openStatus: '開業済',
        companyName: '株式会社○○○○○○',
        department: '',
        name: '',
        furigana: '',
        phoneNumber: '',
        email: '',
        contactFavorite: ['どれでも構わない'],
        zipCode: '',
        province: '都道府県を選択',
        city: '',
        town: '',
        buildingName: '',
        other: '',
        terms: true,
        error: {
          typeRequered: false,
          country: false,
          device: false,
          openStatus: false,
          companyName: false,
          name: false,
          furigana: false,
          phoneNumber: false,
          email: false,
          contactFavorite: false,
          zipCode: false,
          province: false,
          city: false
        }
      },
      formDataAfter: {}
    }
  },
  methods: {
    setStatusError: function (field) {
      this.formData.error = {
        ...this.formData.error,
        [field]: false
      }
    },
    inputHandler: function (e) {
      const { value, name } = e.target
      if (value.length > 0) {
        this.setStatusError(name)
      }
    },
    checkForm: function (e) {
      const check = []
      for (var key in this.formData.error) {
        if (this.formData[key]) continue
        this.formData.error[key] = true
      }

      if (!this.validEmail(this.formData.email)) {
        this.formData.error = {
          ...this.formData.error,
          email: true
        }
        return
      }

      for (const key in this.formData.error) {
        if (this.formData.error[key] === false ) continue
        check.push(key)
      }

      if ((check && check.length > 0) || (this.formData && !this.formData.terms)) {
        return
      }

      localStorage.removeItem('formData')
      localStorage.setItem('formData', JSON.stringify(this.formData))
      this.$router.push('/preview')
      e.preventDefault()
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  },
  mounted: function () {
    if (localStorage.getItem('formData')) {
      try {
        this.formData = JSON.parse(localStorage.getItem('formData'))
      } catch (e) {
        console.log('error', e)
      }
    }
  }
}

</script>
<style lang="sass">
  .wrap__form
    .gap20
      gap: 20px

    @media (max-width: 768px)
      padding: 0 15px
      font-size: 14px

    .border--bottom
      border-bottom: solid 1px #ccc
    .py-15
      padding-top: 15px

    .add-more-performance
      padding-top: 15px

    .error
      color: red

      .input
        border-color: red

        &:focus
          outline: none !important
          outline-width: 0
          box-shadow: unset

    .zip-code
      display: flex
      gap: 20px

      .box--zip
        width: calc(100% - 225px)
        @media (max-width: 768px)
          width: calc(100% - 85px)

      button
        background: black
        color: white
        width: 225px
        min-height: 60px
        @media (max-width: 768px)
          width: 85px
          min-height: 46px
          font-size: 13px

    .w-full
      width: 100%
      a
        text-decoration: underline

    .description
      max-width: 750px
      margin: auto
      padding: 80px 0

      @media (max-width: 768px)
        padding: 0 0 50px
        font-size: 15px
        text-align: justify

    .name
      display: flex
      border-bottom: 1px solid #ccc
      justify-content: space-between

      @media (max-width: 768px)
        flex-wrap: wrap
        .title
          order: 2
        .right__content
          order: 1
          width: 100%
          text-align: right
          margin-bottom: 10px

      .title
        padding-left: 10px
        border-left: solid 5px #003a81
        margin-bottom: 20px
        font-size: 25px

        @media( max-width: 768px)
          font-size: 14px

      .right__content
        font-weight: 400

        span
          color: red

    .form__contact
      padding: 50px 0

      @media (max-width: 768px)
        padding: 30px 0
        .is-large
          font-size: 14px

      .submit
        background: #003a81
        width: 290px
        padding: 42px 0
        color: white
        font-size: 18px
        margin: 0px 0 100px

        @media (max-width: 768px)
          width: 180px
          font-size: 13px
          padding: 25px 0

        img
          margin-right: 15px
          @media (max-width: 768px)
            max-width: 26px

      .terms
        max-width: 570px
        margin: 50px auto
        background: #eff5fc
        padding: 30px 50px
        border: none !important

        @media (max-width: 768px)
          margin: 25px 0
          padding: 25px 15px
          text-align: left !important

        .wrap--input
          background: transparent

          span
            color: black !important

            &.error
              color: red !important

      .name--filed
        span
          color: red

      .wrap--checkbox,
      .wrap--radio .control
        display: flex
        gap: 30px
        flex-wrap: wrap

        @media (max-width: 768px)
          gap: 15px

          label
            width: calc(50% - 8px)
            height: 46px

        .radio
          margin: 0

          &.wrap--input
            background: white
            color: black
            padding: 10px 0
            width: auto
      
      .wrap--radio .control
        .wrap--input.radio
          border: none
        @media (max-width: 768px)
          gap: 60px

          .wrap--input.radio
            height: auto
            padding: 25px 0 5px
            border: none

      .wrap--input
        position: relative
        padding: 15px 10px
        cursor: pointer
        user-select: none
        background: white
        color: black
        display: flex
        align-items: center
        width: calc(50% - 15px)
        z-index: 1
        border: solid 1px #ccc
        min-height: 60px

        span
          @media (max-width: 768px)
            &.isMobile
              width: calc(100% - 20px)

        &.terms
          width: 400px
          margin: 0

        input:checked ~ .layer
          position: absolute
          width: 100%
          height: 100%
          background: black
          top: 0
          left: 0
          z-index: 0

        input:checked ~ span
          color: white
          z-index: 2

        input
          position: absolute
          opacity: 0
          cursor: pointer
          height: 0
          width: 0

        .checkmark
          position: relative
          top: 0
          left: 0
          height: 25px
          width: 25px
          background-color: #fff
          border: solid 1px #ccc
          display: inline-block
          margin-right: 15px
          @media (max-width: 768px)
              width: 19px
              height: 19px
              margin-right: 5px

          &:after
            content: ""
            position: absolute
            display: none

          &:after
            left: 8px
            top: 3px
            width: 8px
            height: 15px
            border: solid 1px black
            border-width: 0 3px 3px 0
            -webkit-transform: rotate(45deg)
            -ms-transform: rotate(45deg)
            transform: rotate(45deg)

            @media (max-width: 768px)
              top: 2px
              left: 6px
              width: 6px
              height: 11px
              border: solid 1px black
              border-width: 0 2px 2px 0

        input:checked ~ .checkmark:after
          display: block

        input:checked ~ .checkmark
          background-color: #fff

        input[type="radio"] ~ .checkmark
          border-radius: 50%

          &:after
            top: calc(50% - 5px)
            left: calc(50% - 5px)
            width: 10px
            height: 10px
            border-radius: 50%
            background: black
            @media (max-width: 768px)
              width: 6px
              height: 6px
              top: calc(50% - 3px)
              left: calc(50% - 3px)

      input, select, .select
        min-height: 60px
        @media (max-width: 768px)
          min-height: 46px
          font-size: 16px
        
        @media (max-width: 768px)
          &.radio
            &.wrap--input
              border: none
            span
              &:last-child
                width: 19px
          span
            &:last-child
              width: calc(100% - 24px)

</style>
