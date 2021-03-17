<template>
  <header>

    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
          <img src="@/assets/logo.png"  alt="logo">
          <span class="logo1 fw700">日本語版</span>
        </div>

        <a @click="isActive = !isActive" role="button" class="navbar-burger btn__menu is-align-items-center" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <img class="image" src="@/assets/menu.png" alt="btn menu" />
        </a>
        <div class="navbar-burger is-flex is-align-items-center bg--box--contact is-justify-content-center is-hidden-desktop">
          <div class="contact">
              <img class="image " src="@/assets/mail.png" alt="email">
              <div>
                資料請求・<br>
                導入のご相談
              </div>
          </div>
        </div>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isActive }">
        <div class="navbar-start">

        </div>

        <div class="navbar-end">
          <a class="navbar-item fw500">
            HOME
          </a>
          <a class="navbar-item fw500">
              製品情報
          </a>
          <a class="navbar-item fw500">
            トピックス
          </a>
          <a class="navbar-item fw500">
            イベント
          </a>
          <a class="navbar-item fw500">
            WEBセミナー
          </a>
          <a class="navbar-item fw500">
            臨床報告
          </a>
          <a class="navbar-item fw500">
            論文・資料
          </a>
          <div class="navbar-item bg--box--contact is-hidden-mobile is-justify-content-center">
            <div class="">
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

    <nav class="breadcrumb has-succeeds-separator noMobile is-flex is-align-items-center is-hidden-mobile" aria-label="breadcrumbs">
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
    position: relative

    .breadcrumb
      height: 77px

      ul li a
        font-size: 15px

    @media (min-width: 1366px)
      .container
        max-width: 1170px !important

    @media (max-width: 1023px)
      .btn__menu
        display: flex
        &:hover
          background: transparent
        img
          margin-left: auto
          max-width: 25px

    .fw700
      font-weight: 700

    .fw500
      font-weight: 500

    .wrap--logo
      display: flex

    .logo1
      display: inline-block
      margin-left: 15px
      font-size: 15px

      @media (max-width: 768px)
        font-size: 10px

    .top--header
      &.is-gapless
        margin-bottom: 0

    .bg--box--contact
      background: linear-gradient(to right, #003a81, #006d84)
      padding-bottom: 0
      width: 190px

      @media (max-width: 768px)
        font-size: 10px
        width: 110px
        height: 62px
        margin-left: 13px

        img
          width: 20px

    .navbar
      min-height: 120px

      @media (max-width: 768px)
        min-height: 62px

      .navbar-item
        font-size: 15px

    .contact
      color: #fff
      display: flex
      align-items: center
      justify-content: center
      padding: 10px 0

      img
        margin-right: 10px
        max-width: 28px

      @media (max-width: 768px)
        font-size: 10px
        padding: 12px 0

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
