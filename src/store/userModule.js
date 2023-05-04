export const userModule = {
  state: () =>  ({
    id: 0,
    users: [],
    searchResult: [],
    paginatedResult: []
  }),
  mutations: {
    addUser(state, newUser) {
      newUser.userId = state.id++
      state.users.push(newUser)
      state.paginatedResult.push(newUser)
    },
    removeUser(state, user) {
      state.users = state.users.filter(u => u.userId !== user.userId)
      state.paginatedResult = state.paginatedResult.filter(u => u.userId !== user.userId)
    },
    searchResult(state, searchResult) {
      state.searchResult = searchResult
    },
    paginatedResult(state, paginatedResult) {
      state.paginatedResult = paginatedResult
    }
  },
  actions: {
    addUser({ commit }, newUsers) {
      commit('addUser', newUsers);
    },
    removeUser({ commit }, user) {
      commit('removeUser', user);
    },
    searchResult({ commit }, searchResult) {
      commit('searchResult', searchResult);
    },
    paginatedResult({ commit }, paginatedResult) {
      commit('paginatedResult', paginatedResult);
    }
  }
}
