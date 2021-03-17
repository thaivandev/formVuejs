<template>
  <section class="section contact__thank">
    <Title />
    <div class="content container">
      <div class="title--contact">
        <div class="title is-4 fw700 dear">お問い合わせ <br> ありがとうございました</div>
      </div>
      <p class="has-text-justified is-size-5">通常、当社または現地法人・代理店より3営業日以内にご連絡差し上げております。ご連絡まで今しばらくお待ちください。</p>

      <div class="wrap--special is-flex is-align-items-center is-flex-wrap-wrap is-justify-content-center">
        <div class="title is-6 fw700">日本からお問い合わせの方へ</div>
        <p>
          お問い合わせ内容によっては、Jeisys Medical Japan株式会社（日本法人）を通じてご連絡させていただく場合がございます。予めご承知おきください。
        </p>
      </div>

      <div class="has-text-centered">
        <div class="fw700">自動返信メールを送信しています</div>
        <p class=""> ※通常、すぐに受信・ご確認いただけます</p>
      </div>

      <div class="my-30 has-text-left">
        <div class="fw700">！受信が確認できない</div>
        <p>まずはご使用のメールサービスの受信拒否設定・迷惑メールフォルダのご確認をお願いいたします。</p>

        <div class="fw700">自動返信メールにはどのような内容が書かれていますか？</div>
        <p>お送りした内容はお申込内容の控えとなります。ご質問事項等への回答は、確認後に改めてご連絡させていただきます。</p>

        <div class="fw700">Jeisysに連絡した方が良いですか？</div>
        <div>通常、3営業日以内にご連絡差し上げております。それ以上経過しても当社から連絡のない場合、システム不具合の可能性が考えられます。</div>
        <p class="mb-5">お急ぎの方、ご不安な方は、大変お手数ですが以下のメールアドレスまで直接その旨お知らせください。（日本語でお問い合わせください）</p>

        <div class="bg--email has-text-centered">jpmail@jeisys.com</div>
      </div>

      <div class="has-text-centered">
        <button class="button fw700 home" v-on:click="goHome">
          <img class="image" src="@/assets/ar_right.png" alt="arrow right" />
          HOMEへ戻る
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Title from './title'
export default {
  components: {
    Title
  },
  methods: {
    goHome: function () {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="sass" scoped>
  .contact__thank
    padding: 0
    font-size: 16px

    @media (max-width: 768px)
      font-size: 15px

      .content
       padding: 0 15px

    p
      margin-bottom: 40px

      @media (max-width: 768px)
        margin-bottom: 25px
        &.mb-5
          margin-bottom: 25px !important
        &.is-size-5
          font-size: 15px !important

    .dear
      padding: 70px 0 35px
      border-bottom: solid 1px #ccc
      font-size: 28px
      @media (max-width: 768px)
        padding: 35px 0 25px
        font-size: 21px

    .container
      @media (min-width: 1366px)
        max-width: 770px

    .bg--email
      background-color: #fefefe
      padding: 15px 0
      border: dashed 1px #ccc
      @media(max-width: 768px)
        height: 58px

    .mb-40
      margin-bottom: 40px

    .p30
      padding: 30px

      @media (max-width: 768px)
        padding: 30px 10px
        margin: 30px 0

    .title--contact
      padding: 0 0 40px

      @media (max-width: 768px)
        padding: 0 0 25px

    .wrap--special
      background-color: #eff5fc
      height: 157px
      font-size: 16px
      padding: 40px
      margin-bottom: 40px
      p
       margin: 0

      @media (max-width: 768px)
        font-size: 13px
        padding: 15px 15px 20px
        height: 116px
        margin-bottom: 25px
        .title
          margin-bottom: 10px
        p
          margin: 0

    .home
      background: #003a81
      width: 295px
      padding: 40px 0
      margin: 80px 0 180px
      color: white
      height: 85px

      img
        margin-right: 20px
        @media(max-width: 768px)
          margin-right: 10px
          max-width: 27px

      @media (max-width: 768px)
        width: 165px
        height: 49px
        padding: 30px
        margin: 45px 0 50px
        font-size: 13px

</style>
