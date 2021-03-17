const state = {
  data: 0
}

const mutations = {
  saveFormData (state, form) {
    console.log('in mutation', form)
    state.data = form
  }
}

const actions = {
  saveFormData: (context, data) => {
    console.log('context', context, data)
    context.commit('saveFormData', data)
  }
}

export default {
  state,
  mutations,
  actions
}
