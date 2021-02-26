<template>
  <header>

    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="@/assets/logo.png"  alt="logo">
          <span class="logo1 fw700">日本語版</span>
        </a>

        <a @click="isActive = !isActive" role="button" class="navbar-burger btn__menu is-align-items-center" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <img class="image" src="@/assets/menu.png" alt="btn menu" style="margin-right: 20px;max-width: 36px"/>
        </a>
        <div class="navbar-burger bg--box--contact">
          <div class="bg--box--contact">
            <div class="contact">
                <img class="image " src="@/assets/mail.png" alt="email" style="max-width: 24px">
                <div>
                  資料請求・<br>
                  導入のご相談
                </div>
            </div>
          </div>
        </div>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isActive }">
        <div class="navbar-start">

        </div>

        <div class="navbar-end">
          <a class="navbar-item">
            HOME
          </a>
          <a class="navbar-item">
              製品情報
          </a>
          <a class="navbar-item">
            トピックス
          </a>
          <a class="navbar-item">
            イベント
          </a>
          <a class="navbar-item">
            WEBセミナー
          </a>
          <a class="navbar-item">
            臨床報告
          </a>
          <a class="navbar-item">
            論文・資料
          </a>
          <div class="navbar-item bg--box--contact is-hidden-mobile">
            <div class="bg--box--contact">
              <div class="contact">
                  <img src="@/assets/mail.png" alt="email">
                  <div>
                    資料請求・<br>
                    導入のご相談
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <nav class="breadcrumb has-succeeds-separator noMobile" aria-label="breadcrumbs">
        <ul class="container">
          <li><a href="#">HOME</a></li>
          <li class="is-active"><a href="#" aria-current="page"> 資料請求・導入のご相談 </a></li>
        </ul>
    </nav>

  </header>
</template>
<script>
export default {
  data: function () {
    return {
      isActive: false,
      showNavbar: true,
      repsonsive: window.innerWidth
    }
  }
}
</script>
<style lang="sass" scoped>
  $primary-color: #003a81;
  $white: #fff;
  $black1: #292929;
  $black2: #333333;

  header
    position: relative;

    @media (max-width: 1024px)
      .btn__menu
        display: flex

    .fw700
      font-weight: 700

    .wrap--logo
      display: flex

    .logo1
      display: inline-block
      margin-left: 15px

    .top--header
      &.is-gapless
        margin-bottom: 0

    .bg--box--contact
      background: linear-gradient(to right, #003a81, #006d84)
      padding-bottom: 0

      @media (max-width: 768px)
        font-size: 12px

    .contact
      color: #fff
      display: flex
      align-items: center
      justify-content: center
      padding: 10px 0

      @media (max-width: 768px)
        font-size: 10px
        padding: 12px 0

      img
        margin-right: 10px

    .menu
      text-align: right

    .breadcrumb
      background: $primary-color
      color: white

      ul
        padding: 10px 0

        a
          color: white
    @media (max-width: 1023px)
      .contact
        padding: 0

      .navbar-burger
        &.bg--box--contact
          width: auto
          margin: unset
          display: flex
          align-items: center
          padding: 0 10px

    @media (min-width: 1024px) and (max-width: 1366px)
      .flex0
        margin-top: 15px !important
        width: 50% !important

    @media (max-width: 768px)
      .noMobile
        display: none

      .flex0
        flex-grow: 1 !important
        flex: 0 !important
</style>
