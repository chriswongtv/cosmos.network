const axios = require('axios')

const state = {
  data: {},
}

const mutations = {
  async initApps(state) {
    const data = (await axios.get(`https://backend.tendermint.com/wallets`))
      .data
    state.data = data
  },
}

export default { state, mutations }
