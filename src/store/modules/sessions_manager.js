import axios from 'axios';

const BASE_URL = "http://192.168.8.86:4443/instance"

const AUTH = {
  headers: {
    authorization: "Bearer IPFnicPE6e28IUZRkAWVZsktOAxWUrdkZArcjj4oXAitmdvavRted1XPKjk1zAYh",
  },
};

const state = {
  newSession: null,
  qrCode: null,
  sessions: [],
}

const getters = {
  getSessions(state) {
    return state.sessions;
  }
}

const actions = {
  getAllSessions({ commit }) {
    new Promise((resolve, reject) => {
      axios
      .get(`${BASE_URL}/list`, AUTH)
      .then((response) => {
        commit("setSessions", response.data);
        console.log(response.data);
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
    });
  }
};

const mutations = {
  setSessions(state, data) {
    state.sessions = data.data;
  },
  setNewSession(state, data) {
    state.newSession = data.data;
  },
  setQrCode(state, data) {
    state.qrCode = data.data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
}