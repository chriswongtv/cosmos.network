<template>
  <div class="nav-inner tm-container tm-wrapper">
    <div class="nav-first">
      <NuxtLink to="/" class="logo tm-rf-1 tm-rf0-m-up tm-medium tm-lh-solid">
        <logo-hub-brandmark class="logo__hub" />Hub
      </NuxtLink>
    </div>
    <div class="nav-second">
      <ul>
        <li>
          <NuxtLink to="/features" class="tm-rf-1 tm-medium tm-lh-title tm-link"
            >Features</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/learn/staking"
            class="tm-rf-1 tm-medium tm-lh-title tm-link"
            >Staking</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/learn/faq"
            class="tm-rf-1 tm-medium tm-lh-title tm-link"
            >FAQ</NuxtLink
          >
        </li>
        <li>
          <a
            href="https://hub.cosmos.network"
            target="_blank"
            rel="noreferrer noopener"
            class="tm-rf-1 tm-medium tm-lh-title tm-link tm-link-external"
            >Documentation</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
@media $breakpoint-large
  .nav
    ul
      margin-right calc(-1 * var(--spacing-5))
      margin-left calc(-1 * var(--spacing-5))
      display flex
      justify-content center
    .tm-link
      padding var(--spacing-7) var(--spacing-5)
    &-first
      flex 1 1 0%
    &-second
      display block
      grid-columns 1
    &-last
      flex 1 1 0%
    &-mobile-toggle
      display none

  .nav-primary
    .logo-secondary
      display none
    // .nav-inner
    //   display grid
    //   grid-template-columns repeat(3, 1fr)

  .nav-second .nuxt-link-exact-active:before
    content ""
    position absolute
    display block
    border-bottom 1px solid
    width calc(1rem + 1px)
    bottom -1px
    left 50%
    margin-left -0.5rem
</style>
