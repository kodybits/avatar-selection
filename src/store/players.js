const state= {};
state.default = ['01', '02', '03', '04', '05', '06'];
state.names = state.default;
state.contestants = state.default;
state.rejected = [];
state.winner = '';
state.losers = [];
state.gameState = false;
state.gameEnd = false;

const getters = {
  names: s => s.names,
  rejected: s => s.rejected,
  contestants: s => s.contestants,
  winner: s => s.winner,
  losers: s => s.losers,
  gameState: s => s.gameState,
  gameEnd: s => s.gameEnd,
};

const mutations = {
  rejectUser(s, payload) {
    let p = '';
    try {
      p = JSON.parse(payload);
    } catch (e) {
      p = payload;
    }
    state.rejected.push(p);
    Object.keys(state.rejected).forEach((key) => {
      state.contestants = state.contestants.filter(player => player !== state.rejected[key]);
    });
  },
  setDefault() {
    state.names = state.default;
    state.contestants = state.default;
    state.rejected = [];
    state.winner = '';
    state.losers = [];
    state.gameState = false;
    state.gameEnd = false;
  },
  setContestants(s, payload) {
    let p = '';
    try {
      p = JSON.parse(payload);
    } catch (e) {
      p = payload;
    }
    state.contestants = p;
  },
  setWinner(s, payload) {
    let p = '';
    try {
      p = JSON.parse(payload);
    } catch (e) {
      p = payload;
    }
    state.winner = p;
  },
  setLosers(s, payload) {
    let p = '';
    try {
      p = JSON.parse(payload);
    } catch (e) {
      p = payload;
    }
    state.losers = p;
  },
  setGameState(s, payload) {
    let p = '';
    try {
      p = JSON.parse(payload);
    } catch (e) {
      p = payload;
    }
    state.gameState = p;
  },
  setGameEnd(s, payload) {
    let p = '';
    try {
      p = JSON.parse(payload);
    } catch (e) {
      p = payload;
    }
    state.gameEnd = p;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
