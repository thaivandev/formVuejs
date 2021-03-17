<template>
  <footer class="footer">
    <div class="backTop" v-on:click="backToTop">
      <img src="@/assets/arrow_up.png" alt="" />
    </div>
    <div class="top--footer has-text-centered">
        <div class="content--box">
            <div class="wrap">
              <img src="@/assets/mail.png" alt="email"/>
              <div class="content--text">
                <p class="fw700">資料請求・導入のご相談</p>
                <p>日本人スタッフがご相談を承ります</p>
              </div>
            </div>
        </div>
        <p class="is-size-6">
          製品使用予定国が定めた承認等取得済製品につい <br class="is-hidden-desktop">ては <br class="is-hidden-touch">
          現地法人・現地代理店で直接ご購入いただける製品もございます。<br>
          まずはお気軽にお問い合わせください。
        </p>
    </div>

    <div class="middle--footer social has-text-centered p30 is-flex is-justify-content-center is-align-items-center">
        <span class="is-hidden-touch"> SHARE </span>
        <img class="image" src="@/assets/fb.png" alt="facebook" />
        <img class="image" src="@/assets/tw.png" alt="twichter" />
        <img class="image" src="@/assets/ins.png" alt="instegram" />
    </div>

    <div class="wrap--info container">
        <div class="title is-6 has-text-centered no-border mb-0">当社製品に関するオンラインWEBセミナーを開催しています</div>

        <div class="columns wrap--images">
          <div class="column is-6">
            <img src="@/assets/footer1.jpg" class="img-responsive" alt="footer" />
          </div>
          <div class="column is-6">
            <img src="@/assets/footer2.jpg" class="img-responsive" alt="footer" />
          </div>
        </div>

        <div class="title is-6 has-text-centered no-bor-mobile mb-50">製品一覧</div>

        <div class="columns is-gapless">
          <div class="column is-4">
            <div class="title is-6 x2">HIFU - 高密度焦点式超音波</div>
            <ul>
              <li>
                <a href=""> ULTRAcel Q+ - ウルトラセルQプラ</a>
              </li>
              <li>
                <a href=""> LinearFirm - リニアファーム</a>
              </li>
              <li>
                <a href=""> LIPOcelⅡ - リポセル2</a>
              </li>
            </ul>
          </div>

          <div class="column is-4">

            <div class="title is-6 x2">RF・NeedleRF - 高周波・ニードル高周波</div>
            <ul>
              <li class="">
                <a href=""> AcGen - アクジェン</a>
              </li>
              <li>
                <a href=""> POTENZA - ポテンツァ</a>
              </li>
            </ul>

            <div class="title is-6 py30 x2">C-IPL - キセノン光線</div>
            <ul>
              <li>
                <a href=""> cellec V - セレックV </a>
              </li>
              <li>
                <a href=""> smoothcool - スムースクール</a>
              </li>
            </ul>
          </div>

          <div class="column is-4">
            <div class="title is-6 x2">Nd:YAG- Nd:ヤグレーザー</div>
            <ul>
              <li>
                <a href=""> TRI-BEAM PREMIUM - トライビームプレミアム</a>
              </li>
            </ul>

            <div class="title is-6 py30 x2">Co2 - Co2レーザー</div>
            <ul>
              <li>
                <a href=""> TRI-BEAM PREMIUM - トライビームプレミアム</a>
              </li>
            </ul>

          </div>

        </div>

    </div>
    <div class="copy--right has-text-centered">
        <div class="appendix">
            利用規約    <span>|</span>    個人情報保護方針    <span>|</span>    会社情報    <span>|</span>    GLOBAL
        </div>
        <p>Copyright ⓒ Jeisys Corporation All Rights Reserved.</p>
        <p>All product information on this website is <br class="is-hidden-desktop"> for overseas customer only.</p>
    </div>
  </footer>
</template>
<script>
export default {
  methods: {
    backToTop: function () {
      window.scrollTo({top: 0, behavior: 'smooth'})
      return {}
    }
  }
}
</script>
<style lang="sass">
  $primary-color: #003a81;
  $white: #fff;
  $black1: #292929;
  $black2: #333333;

  footer

    .container
      @media (min-width: 1366px)
        max-width: 1170px !important

    .fw700
      font-weight: 700
      @media (max-width: 768px)
        font-size: 17px

    .social
      img
        margin: 0 25px
        @media (max-width: 768px)
          max-width: 24px
          margin: 0 12px

    .backTop
      position: fixed
      z-index: 999999
      bottom: 50px
      right: 30px
      cursor: pointer

      @media (max-width: 768px)
        max-width: 40px

    &.footer
      padding: 0
      color: white
      background: #333333

    .py30
      padding-top: 30px

    .p30
      padding: 30px 0

    .mb-50
      margin-bottom: 50px !important
      @media(max-width: 768px )
        margin-bottom: 0 !important

    .wrap--info
      padding: 120px 0

      @media (max-width: 768px)
        padding: 0
        margin-bottom: 0px
        border-bottom: solid 1px #ccc
        .px-15-mobile
          padding: 0 15px

      .wrap--images
        padding: 50px 0 90px
        margin: 0

        @media (max-width: 768px)
          max-width: 280px;
          padding: 0
          margin: auto
          gap: 20px

      ul
        &:not(:last-child)
          margin-bottom: 50px
        li
          background: url('../assets/arr_li.png') no-repeat left 0px center
          background-size: 7px 7px
          padding:  0 0 0 25px
          margin-bottom: 25px
          &:last-child
            margin-bottom: 0

          @media (max-width: 768px)
            background: url('../assets/arr_li.png') no-repeat left 25px center
            background-size: 7px 7px
            padding: 25px 0 25px 40px
            margin-bottom: 0

          a
            color: $white
        @media (max-width: 768px)
          &:not(:last-child)
            margin-bottom: 0
          li a
            font-size: 12px

      @media (max-width: 768px)
        .title
          margin-bottom: 0
          padding: 50px 0 25px
          border-top : solid 1px white
          border-bottom: solid 1px white

          &.x2
            padding: 25px 15px
            font-size: 13px

          &.no-bor-mobile
            padding: 50px 0 25px
            border: none

          &.no-border
            border: none
            max-width: 70%
            margin: auto
            line-height: 25px

          &.p30
            border: none

        li
          border-bottom: solid 1px white
          font-size: 13px

          &:last-child
            border: none

    .copy--right
      padding: 0 0 30px

      p
        margin: 0

      @media (max-width: 768px )
        font-size: 12px
        font-weight: 100
        text-align: center
        padding-bottom: 25px
        p
          max-width: 80%
          margin: auto

    .appendix
      padding: 0 0 50px
      font-size: 15px

      span
        padding: 0 20px

      @media (max-width: 768px)
        margin: auto;
        width: 270px;
        padding: 50px 0 30px;
        font-size: 12px
        span
          padding: 0 7px
          &:last-child
            display: none

    .top--footer
      padding: 80px 0
      background: #003a81

      .content--box
        margin-bottom: 40px
      .content
        display: flex
        justify-content: center
        align-items: center

      .wrap
        border: solid 1px #fff
        background: linear-gradient(to right, #003a81, #006c84)
        max-width: 630px
        height: 155px
        padding: 40px 0
        margin: auto
        display: flex
        flex-wrap: wrap
        justify-content: center
        align-items: center
        font-size: 28px

        img
          margin-right: 15px

        .content--text
          p
            &:fist-child
              font-size: 36px
            &:last-child
              font-size: 22px
            @media(max-width: 768px)
              &:fist-child
                font-size: 20px
              &:last-child
                font-size: 13px

        p
          margin-bottom: 0
          text-align: left

          &:last-child
            margin-left: 10px

        @media (max-width: 768px)
          width: 310px
          height: 93px
          padding: 20px 0
          font-size: 14px
          img
            width: 30px
        @media( max-width: 320px)
          width: 240px
          height: 73px
          padding: 10px 0
          p
            font-size: 14px
            &:last-child
              font-size: 12px !important
          img
            max-width: 18px
            margin-right: 5px

      @media (max-width: 768px)
        padding: 40px 30px
        font-size: 13px
        .content--box
          margin-bottom: 35px
        .is-size-6
          font-size: 13px !important

    .contact--thank
      color: #003a81

    .middle--footer
      background: #292929
      height: 100px
      img
        max-height: 30px

      span
        margin: 0 25px

      @media (max-width: 768px)
        height: 60px
        img
          max-height: 20px

    .title
      color: white
</style>
