<template>
  <section class="section contact__thank">
    <Title />
    <div class="content container">
      <div class="title--contact">
        <div class="title is-4 fw700 dear">お問い合わせ <br> ありがとうございました</div>
      </div>
      <p>通常、当社または現地法人・代理店より3営業日以内にご連絡差し上げております。ご連絡まで今しばらくお待ちください。</p>

      <div class="wrap--special p30 my-30">
        <div class="title is-6 fw700">日本からお問い合わせの方へ</div>
        <p>
          お問い合わせ内容によっては、Jeisys Medical Japan株式会社（日本法人）を通じてご連絡させていただく場合がございます。予めご承知おきください。
        </p>
      </div>

      <div class="has-text-centered">
        <div class="fw700">自動返信メールを送信しています</div>
        <p> ※通常、すぐに受信・ご確認いただけます</p>
      </div>

      <div class="my-30 has-text-left">
        <div class="fw700">！受信が確認できない</div>
        <p>まずはご使用のメールサービスの受信拒否設定・迷惑メールフォルダのご確認をお願いいたします。</p>

        <div class="fw700">自動返信メールにはどのような内容が書かれていますか？</div>
        <p>お送りした内容はお申込内容の控えとなります。ご質問事項等への回答は、確認後に改めてご連絡させていただきます。</p>

        <div class="fw700">Jeisysに連絡した方が良いですか？</div>
        <div>通常、3営業日以内にご連絡差し上げております。それ以上経過しても当社から連絡のない場合、システム不具合の可能性が考えられます。</div>
        <p>お急ぎの方、ご不安な方は、大変お手数ですが以下のメールアドレスまで直接その旨お知らせください。（日本語でお問い合わせください）</p>

        <div class="bg--email has-text-centered">jpmail@jeisys.com</div>
      </div>

      <div class="has-text-centered">
        <button class="button fw700 home" v-on:click="goHome">
          <img class="image is-32x32" src="@/assets/ar_right.png" alt="arrow right" />
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
    font-size: 20px

    @media (max-width: 768px)
      font-size: 14px

      .content
       padding: 0 15px

    p
      margin-bottom: 30px

      @media (max-width: 768px)
        margin-bottom: 30px

    .dear
      padding-bottom: 50px
      border-bottom: solid 1px #ccc

    .container
      @media (min-width: 1366px)
        max-width: 1050px

    .bg--email
      background-color: #fefefe
      padding: 15px 0
      border: dashed 1px #ccc

    .my-30
      margin: 30px 0

    .p30
      padding: 30px

      @media (max-width: 768px)
        padding: 30px 10px
        margin: 30px 0

    .title--contact
      padding: 40px 0

      @media (max-width: 768px)
        padding: 0 0 30px

    .wrap--special
      background-color: #eff5fc

      @media (max-width: 768px)
        p
          margin: 0

    .home
      background: #003a81
      width: 350px
      padding: 40px 0
      margin: 50px 0
      color: white

      img
        margin-right: 20px

      @media (max-width: 768px)
        width: auto
        padding: 30px
        margin: 15px 0 150px

</style>
