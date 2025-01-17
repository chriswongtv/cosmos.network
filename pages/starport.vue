<template>
  <main>
    <div class="section-hero section-first">
      <div class="tm-wrapper tm-section tm-container tm-grid-base">
        <div class="text">
          <div
            class="overline tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline tm-muted"
          >
            Starport
          </div>
          <h1 class="title tm-rf6 tm-bold tm-lh-title tm-title">
            The fastest way to a production blockchain.
          </h1>
          <p class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow">
            Starport offers everything you need to build, test and launch your
            blockchain with a decentralized worldwide community.
          </p>
          <div class="btn-group">
            <tm-button
              to-link="external"
              href="https://gitpod.io/#https://github.com/tendermint/starport/tree/master"
              size="l"
              class="btn"
              >Open in browser
              <span class="icon__right">&#8599;</span></tm-button
            >
            <tm-button
              to-link="external"
              href="https://github.com/tendermint/starport/blob/develop/docs/1%20Introduction/2%20Install.md"
              size="l"
              variant="text"
              class="btn"
              >Install
              <span class="icon__right icon__down">&#8595;</span></tm-button
            >
          </div>
        </div>
        <div class="demo tm-section">
          <iframe
            width="100%"
            height="510"
            src="https://www.youtube.com/embed/NmytpuD33lY?controls=0"
            title="Starport v0.15: IBC Hello, world!"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
      </div>
      <div class="hero-graphics">
        <graphics-starport-hero class="graphics" />
      </div>
    </div>

    <div class="section-intro tm-section tm-container tm-wrapper tm-grid-base">
      <div class="top">
        <div class="overline tm-rf0 tm-medium tm-lh-title tm-overline">
          What is it?
        </div>
        <h1 class="title tm-rf5 tm-bold tm-lh-title tm-title">
          The toolkit of leading blockchains.
        </h1>
      </div>
      <div class="mid logos-list">
        <img src="~static/logos/binance.svg" alt="Binance Logo" />
        <img src="~static/logos/terra-money.svg" alt="Terra Money Logo" />
        <img src="~static/logos/crypto-com.svg" alt="Crypto.com Logo" />
        <img src="~static/logos/cosmos-hub.svg" alt="Cosmos Hub Logo" />
        <img src="~static/logos/thorchain.svg" alt="Thorchain Logo" />
        <img src="~static/logos/okex.svg" alt="OKEx Logo" />
      </div>
      <div class="bottom grid-col-2">
        <div class="col">
          <p class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow">
            Starport is built on top of
            <tm-link
              href="https://github.com/cosmos/cosmos-sdk"
              class="tm-medium"
              >Cosmos SDK</tm-link
            >, the world’s most popular blockchain framework. It accelerates
            chain development by scaffolding everything you need, so you can
            focus on business logic.
          </p>
        </div>
        <div class="col">
          <div class="stat">
            <div class="stat-value tm-rf7 tm-lh-title tm-bold tm-title">
              95
              <div class="col">
                <span class="tm-rf4 tm-lh-title tm-bold super">%</span
                ><span class="tm-rf4 tm-lh-title tm-bold super">faster</span>
              </div>
            </div>
            <p class="stat-subtitle tm-rf0 tm-lh-title">
              From idea to production code.
            </p>
          </div>
        </div>
        <div class="col">
          <div class="stat tm-title">
            <div class="stat-value tm-rf7 tm-lh-title tm-bold">
              4
              <div class="col">
                <span class="tm-rf4 tm-lh-title tm-bold"
                  >of top 20 blockchains</span
                >
              </div>
            </div>
            <p class="stat-subtitle tm-rf0 tm-lh-title">
              Built with Cosmos SDK –
              <tm-link
                href="https://coingecko.com"
                class="tm-link-external tm-medium"
                >coingecko.com</tm-link
              >
            </p>
          </div>
        </div>
        <div class="col">
          <div class="stat">
            <div class="stat-value tm-rf7 tm-lh-title tm-bold tm-title">
              7 sec
            </div>
            <p class="stat-subtitle tm-rf0 tm-lh-title">
              Transactions confirmed in seconds.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section-cli tm-section tm-container tm-wrapper">
      <div class="top tm-grid-base">
        <div class="graphics">
          <div class="graphics__inner">
            <graphics-starport-cli class="graphics__item" />
          </div>
        </div>
        <div class="text">
          <div class="step tm-rf0 tm-medium tm-lh-title tm-overline">01</div>
          <h1 class="title tm-rf5 tm-bold tm-lh-title tm-title">
            Build your blockchain in minutes.
          </h1>
          <p class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow">
            Use Starport CLI to scaffold and assemble a production-ready
            blockchain in minutes.
          </p>
          <tm-button
            to-link="external"
            href="https://gitpod.io/#https://github.com/tendermint/starport/tree/master"
            size="l"
            variant="text"
            class="btn"
            >Launch CLI <span class="icon__right">&#8599;</span></tm-button
          >
        </div>
      </div>
      <div class="tm-grid-base">
        <div class="bottom grid-col-2">
          <div class="col">
            <tm-crosshair />
            <h4 class="title tm-rf1 tm-bold tm-lh-title tm-title">
              Create a blockchain in a single command.
            </h4>
            <p class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
              Skip past weeks of writing boilerplate. Create data types unique
              to your chain with powerful scaffolding features.
            </p>
          </div>
          <div class="col">
            <tm-crosshair />
            <h4 class="title tm-rf1 tm-bold tm-lh-title tm-title">
              Start a dev server with hot reload and state persistence.
            </h4>
            <p class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
              Experiment with your chain in dev mode through token creation,
              token allocation, module configuration, and more.
            </p>
          </div>
          <div class="col">
            <tm-crosshair />
            <h4 class="title tm-rf1 tm-bold tm-lh-title tm-title">
              Mint a brand new token and send it to the Cosmos Hub.
            </h4>
            <p class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
              Interchain token transfers are native to Starport. Use its
              built-in IBC relayer to send assets and data to other chains.
            </p>
          </div>
          <div class="col">
            <tm-crosshair />
            <h4 class="title tm-rf1 tm-bold tm-lh-title tm-title">
              Design state-of-the-art interfaces with UI generation.
            </h4>
            <p class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
              Develop your frontend quicker with automatically generated APIs in
              JavaScript, TypeScript, and Vue.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section-cloud tm-section tm-container tm-wrapper">
      <div class="top tm-grid-base">
        <div class="text">
          <div class="step tm-rf0 tm-medium tm-lh-title tm-overline">02</div>
          <h1 class="title tm-rf5 tm-bold tm-lh-title tm-title">
            Preview your blockchain online.
          </h1>
          <p class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow">
            Use Starport Cloud to continuously deploy your blockchain
            application in a preview environment.
          </p>
          <tm-button size="l" variant="text" disabled class="btn"
            >Coming soon</tm-button
          >
        </div>
        <div class="graphics">
          <div class="graphics__inner">
            <graphics-starport-cloud class="graphics__item" />
          </div>
        </div>
      </div>
      <div class="tm-grid-base">
        <div class="bottom grid-col-2">
          <div class="col">
            <tm-crosshair />
            <h4
              class="title tm-rf1 tm-bold tm-lh-title tm-title measure-narrower"
            >
              Instant blockchain deployment
            </h4>
            <p class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
              Run a single command to deploy a preview of your blockchain live.
            </p>
          </div>
          <div class="col">
            <tm-crosshair />
            <h4
              class="title tm-rf1 tm-bold tm-lh-title tm-title measure-narrower"
            >
              Front-end deployment
            </h4>
            <p class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
              Easily preview and develop your client-side app, powered by a
              deployed blockchain.
            </p>
          </div>
          <div class="col">
            <tm-crosshair />
            <h4
              class="title tm-rf1 tm-bold tm-lh-title tm-title measure-narrower"
            >
              Interchain infrastructure
            </h4>
            <p class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
              Send and receive transactions between blockchains (with IBC
              Protocol) via your own relayer.
            </p>
          </div>
          <div class="col">
            <tm-crosshair />
            <h4
              class="title tm-rf1 tm-bold tm-lh-title tm-title measure-narrower"
            >
              Developer tools
            </h4>
            <p class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
              Test and diagnose any problems with your chain in a production
              environment.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section-production">
      <div class="tm-wrapper tm-section tm-container tm-grid-base">
        <div class="text center">
          <div class="step tm-rf0 tm-medium tm-lh-title tm-overline">03</div>
          <h1 class="title tm-rf5 tm-bold tm-lh-title tm-title">
            Take your blockchain to production.
          </h1>
          <p class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow">
            Use Starport Network to coordinate the launch of your blockchain
            with anyone in the world.
          </p>
          <tm-button size="l" variant="text" disabled class="btn"
            >Coming soon</tm-button
          >
        </div>
      </div>
      <div class="graphics">
        <div class="graphics__inner">
          <graphics-starport-starport-network class="graphics__item" />
        </div>
      </div>
    </div>

    <div class="section-sdk tm-section tm-container tm-wrapper">
      <div class="tm-grid-base">
        <div class="text">
          <div class="step tm-rf0 tm-medium tm-lh-title tm-overline">
            Cosmos SDK
          </div>
          <h1 class="title tm-rf5 tm-bold tm-lh-title tm-title">
            Build a part of the new economy.
          </h1>
          <tm-button
            to-link="external"
            href="https://cosmos.network/sdk"
            size="l"
            variant="text"
            class="btn"
            >Learn more <span class="icon__right">&#8594;</span></tm-button
          >
        </div>
        <div class="bottom grid-col-2">
          <div class="col">
            <img src="~static/sdk/1.svg" alt="Money as a primitive" />
            <h2 class="title tm-rf2 tm-bold tm-lh-title">
              Money as a primitive
            </h2>
          </div>
          <div class="col">
            <img src="~static/sdk/2.svg" alt="Empowered communities" />
            <h2 class="title tm-rf2 tm-bold tm-lh-title">
              Empowered communities
            </h2>
          </div>
          <div class="col">
            <img
              src="~static/sdk/3.svg"
              alt="Digital assets that truly belong to users"
            />
            <h2 class="title tm-rf2 tm-bold tm-lh-title">
              Digital assets that truly belong to users
            </h2>
          </div>
          <div class="col">
            <img src="~static/sdk/4.svg" alt="Permissionless APIs" />
            <h2 class="title tm-rf2 tm-bold tm-lh-title">
              Permissionless APIs
            </h2>
          </div>
          <div class="col">
            <img src="~static/sdk/5.svg" alt="Interchain token transfers" />
            <h2 class="title tm-rf2 tm-bold tm-lh-title">
              Interchain token transfers
            </h2>
          </div>
          <div class="col">
            <img
              src="~static/sdk/6.svg"
              alt="Resilience and decentralization"
            />
            <h2 class="title tm-rf2 tm-bold tm-lh-title">
              Resilience and decentralization
            </h2>
          </div>
        </div>
      </div>
    </div>

    <div class="section-cta tm-section tm-container tm-wrapper">
      <div class="top cta">
        <div class="text">
          <div class="overline tm-rf0 tm-medium tm-lh-title tm-overline">
            Starport
          </div>
          <div class="title tm-rf5 tm-bold tm-lh-title">
            Build your own blockchain.
          </div>
          <div class="btn-group">
            <tm-button
              to-link="external"
              href="https://gitpod.io/#https://github.com/tendermint/starport/tree/master"
              size="l"
              class="btn"
              >Open in browser
              <span class="icon__right">&#8599;</span></tm-button
            >
            <tm-button
              to-link="external"
              href="https://github.com/tendermint/starport/blob/develop/docs/1%20Introduction/2%20Install.md"
              size="l"
              variant="text"
              class="btn"
              >Install
              <span class="icon__right icon__down">&#8595;</span></tm-button
            >
          </div>
        </div>
      </div>
      <div class="bottom">
        <tm-cta-cards :data="cards" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          href: 'https://discord.gg/dkubTXerEW',
          graphics: 'graphics-cta-developer-chat',
          overline: 'Discord',
          title: 'Developer chat ->',
        },
        {
          href: 'https://v1.cosmos.network/contributors',
          graphics: 'graphics-cta-funding',
          overline: 'Funding',
          title: 'Get funding for your app ->',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Starport',
    }
  },
}
</script>

<style lang="stylus" scoped>
// Global
.btn-group
  display flex
  flex-direction column
  margin-top var(--spacing-8)
  gap 0 var(--spacing-7)

.grid-col-2
  display grid
  grid-template-columns repeat(1, 1fr)

.step
  writing-mode vertical-rl
  transform rotate(-180deg)

svg.graphics__item
  height auto

.center
  display grid
  place-items center
  center()

// Hero
.section-hero
  text-align center

.section-hero
  .text
  .demo
    grid-column 1/-1
    position relative
    z-index 1

.section-hero .overline
  color var(--white-500)

.section-hero .title
  margin-top var(--spacing-5)

.section-hero .subtitle
  margin-top var(--spacing-7)
  center()

iframe
  border-radius $border-radius-6
  height 260px

.hero-graphics
  position relative
  padding-top var(--spacing-12)
  overflow visible
  z-index 0

.section-cli,
.section-cloud,
.section-production
  .graphics
    display flex
    flex-direction column
    align-items center

// Intro
.section-intro
  .top
  .mid
  .bottom
    grid-column 1/-1

.section-intro .top .overline
  writing-mode vertical-rl
  transform rotate(-180deg)

.section-intro .mid
  margin-top var(--spacing-9)

.section-intro .logos-list
  display grid
  grid-template-columns repeat(2, 1fr)
  gap 4rem
  align-items center

.section-intro .logos-list > img
  opacity 0.5

.section-intro .bottom
  margin-top var(--spacing-10)
  gap var(--spacing-10)

.section-intro .bottom .subtitle
  color var(--white-800)

.section-intro .stat-value
  display flex

.section-intro .stat .col
  display flex
  flex-direction column
  margin-left 1rem
  align-self center

.stat-subtitle
  margin-top var(--spacing-5)
  color var(--white-800)

// CLI
.section-cli .top
  .graphics
  .text
    grid-column 1/-1

.section-cli .top .graphics__inner
  width 220%
  max-width 64rem
  margin-left 64%

.section-cli .graphics__item
  width 100%
  margin-top -20%
  margin-bottom -15%

.section-cli .top .text
  .title
    margin-top var(--spacing-7)
  .subtitle
    margin-top var(--spacing-7)
  .btn
    margin-top var(--spacing-5)

.section-cli
.section-cloud
  .bottom
    margin-top var(--spacing-10)
    grid-column 1/-1
    gap var(--spacing-9)

    .title
      margin-top var(--spacing-6)

    .subtitle
      margin-top var(--spacing-5)
      color var(--white-800)

// Cloud
.section-cloud .top
  .graphics
  .text
    grid-column 1/-1

.section-cloud .graphics__inner
  width 250%
  max-width 72rem
  margin-left -110%

.section-cloud .top .graphics__item
  overflow visible
  width 100%
  margin-top -42%
  margin-bottom -24%

// Production
.section-production
  text-align center

.section-production .text
  grid-column 1/-1
  center()

.section-production .graphics
  position relative
  overflow visible

.section-production .graphics__inner
  width 132%
  max-width 92rem

.section-production .title
  max-width 10em

// SDK
.section-sdk
  .text
  .bottom
    grid-column 1/-1

.section-sdk .bottom
  margin-top var(--spacing-6)
  column-gap var(--spacing-7)
  row-gap var(--spacing-10)

.section-sdk .bottom .title
  margin-top var(--spacing-6)

// Cta
.cta
  border-radius $border-radius-5
  hover-raise(-3px)
  box-shadow var(--elevation-4)
  color var(--white)
  background var(--gray-100)

  .light-mode &
    color var(--black)
    background var(--white)

.section-cta .top .text
  padding var(--spacing-7)

.section-cta .top .text .overline
  color var(--white-500)

.section-cta .top .text .title
  margin-top var(--spacing-5)

.section-cta .bottom
  margin-top var(--spacing-7)

@media $breakpoint-small
  // Global
  .btn-group
    display block

  .grid-col-2
    grid-template-columns repeat(2, 1fr)

  // Hero
  iframe
    height 510px

@media $breakpoint-medium
  .section-cta .top .text
    padding var(--spacing-10)

@media $breakpoint-large
  .section-intro .logos-list
    grid-template-columns repeat(4, 1fr)

  // Cloud
  .section-cloud .graphics__inner
    margin-left -10%

  .section-cloud .top .graphics__item
    margin-top -53%
    margin-bottom -34%

@media $breakpoint-xl
  // Hero
  .section-hero
    .text,
    .demo
      grid-column 2/span 10

  // Intro
  .section-intro
    .top
      grid-column 2/span 6
    .mid
    .bottom
      grid-column 2/span 10

  .section-intro .logos-list
    grid-template-columns repeat(6, 1fr)

  .section-intro .col
    align-self flex-end

  // CLI
  .section-cli .top
    .graphics
      grid-column 1/span 7
    .graphics__inner
      max-width 67rem
      margin-left 24%
      margin-top -20%
      margin-bottom -5%
    .text
      grid-column 8/span 5

  .section-cli
  .section-cloud
    .bottom
      grid-column 3/span 10

  // Cloud
  .section-cloud .top
    .text
      grid-column 2/span 6
    .graphics
      grid-column 8/span 5

  .section-cloud .graphics__inner
    margin-left -104%

  .section-cloud .top .graphics__item
    margin-top -38%

  // Production

  // SDK
  .section-sdk .text
    grid-column 2/span 6

  .section-sdk .bottom
    grid-column 5/span 8
</style>
