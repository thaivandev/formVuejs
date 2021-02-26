<template>
  <footer class="footer">
    <div class="backTop" v-on:click="backToTop">
      <img src="@/assets/arrow_up.png" alt="" />
    </div>
    <div class="top--footer has-text-centered">
        <div class="content">
            <div class="wrap">
              <p class="fw700">資料請求・導入のご相談</p>
              <p>日本人スタッフがご相談を承ります</p>
            </div>
        </div>
        <p>
          製品使用予定国が定めた承認等取得済製品については <br>
          現地法人・現地代理店で直接ご購入いただける製品もございます。<br>
          まずはお気軽にお問い合わせください。
        </p>
    </div>

    <div class="middle--footer social has-text-centered p30">
        Share <i class="fa fa-twitter"></i> <i class="fa fa-facebook"></i>
    </div>

    <div class="wrap--info container">
        <div class="title is-6 has-text-centered no-border">当社製品に関するオンラインWEBセミナーを開催しています</div>

        <div class="columns wrap--images">
          <div class="column is-6">
            <img src="@/assets/footer1.jpg" class="img-responsive" alt="" />
          </div>
          <div class="column is-6">
            <img src="@/assets/footer2.jpg" class="img-responsive" alt="" />
          </div>
        </div>

        <div class="title is-6 has-text-centered p30 no-bor-mobile">製品一覧</div>

        <div class="columns is-gapless">
          <div class="column is-4">
            <div class="title is-6">HIFU - 高密度焦点式超音波</div>
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

            <div class="title is-6">RF・NeedleRF - 高周波・ニードル高周波</div>
            <ul>
              <li>
                <a href=""> AcGen - アクジェン</a>
              </li>
              <li>
                <a href=""> POTENZA - ポテンツァ</a>
              </li>
            </ul>

            <div class="title is-6 py30">C-IPL - キセノン光線</div>
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
            <div class="title is-6">Nd:YAG- Nd:ヤグレーザー</div>
            <ul>
              <li>
                <a href=""> TRI-BEAM PREMIUM - トライビームプレミアム</a>
              </li>
            </ul>

            <div class="title is-6 py30">Co2 - Co2レーザー</div>
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
        <p>All product information on this website is for overseas customer only.</p>
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
    .fw700
      font-weight: 700
      @media (max-width: 768px)
        font-size: 17px

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

    .wrap--info
      padding: 100px 0 30px

      @media (max-width: 768px)
        padding: 30px 0 0
        margin-bottom: 30px
        border-bottom: solid 1px #ccc

      .wrap--images
        padding: 30px 0

        @media (max-width: 768px)
          max-width: 75%;
          margin: auto
          padding: 0 0 20px

      ul
       li
        background: url('../assets/arr_li.png') no-repeat left 0px center
        background-size: 7px 7px
        padding: 10px 0 10px 25px

        @media (max-width: 768px)
          background: url('../assets/arr_li.png') no-repeat left 30px center
          background-size: 7px 7px
          padding: 18px 0 18px 50px

        a
         color: $white

      @media (max-width: 768px)
        .title
          margin-bottom: 0
          padding: 18px 0 18px 15px
          border-top: solid 1px white
          border-bottom: solid 1px white

          &.no-bor-mobile
            padding: 30px 0

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
      padding: 0 0 35px

      p
        margin: 0

      @media (max-width: 768px )
        font-size: 12px;
        font-weight: 100;
        text-align: center

        p
          max-width: 80%
          margin: auto

    .appendix
      padding: 40px 0

      span
        padding: 0 10px

      @media (max-width: 768px)
        margin: auto;
        max-width: 80%;
        padding: 20px 0;

    .top--footer
      padding: 50px 0
      background: #003a81

    .top--footer
      .content
        display: flex
        justify-content: center
        align-items: center

      .wrap
        padding: 15px 30px
        border: solid 1px #fff
        background: linear-gradient(to right, #003a81, #006c84)

        p
          margin-bottom: 0
          text-align: left

          &:last-child
            margin-left: 10px

      @media (max-width: 768px)
        padding: 40px 35px
        font-size: 13px

    .contact--thank
      color: #003a81

    .middle--footer
      background: #292929

    .title
      color: white
</style>
