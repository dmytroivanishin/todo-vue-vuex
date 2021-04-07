import { createStore } from 'vuex';
import uniqid from "uniqid";

export default createStore({
  state: {
    list: [
      { id: uniqid(), task: 'Cras justo odio', done: false },
      { id: uniqid(), task: 'Dapibus ac facilisis in', done: false },
      { id: uniqid(), task: 'Morbi leo risus', done: false },
      { id: uniqid(), task: 'Porta ac consectetur ac', done: false },
      { id: uniqid(), task: 'Vestibulum at eros', done: false },
    ],
    task: "",
    search: "",
    filter: "all"
  },
  mutations: {
    addTask(state, payload) {
      state.list.push({ id: uniqid(), task: payload });
      state.task = "";
    },
    inputAddTask(state, payload) {
      state.task = payload;
    },
    inputSearchTask(state, payload) {
      state.search = payload;
    },
    doneTask(state, id) {
      const index = state.list.findIndex(item => item.id === id);

      state.list[index].done = !state.list[index].done;
    },
    deleteTask(state, id) {
      state.list = state.list.filter(item => item.id !== id)
    },
    changeActiveTab(state, filter) {
      state.filter = filter;
    },
  },
  actions: {
    addTask({ commit }, payload) {
      commit("addTask", payload);
    },
    inputAddTask({ commit }, payload) {
      commit("inputAddTask", payload);
    },
    inputSearchTask({ commit }, payload) {
      commit("inputSearchTask", payload);
    },
    doneTask({ commit }, payload) {
      commit("doneTask", payload);
    },
    deleteTask({ commit }, payload) {
      commit("deleteTask", payload);
    },
    changeActiveTab({ commit }, payload) {
      commit("changeActiveTab", payload);
    },
  },
  modules: {
  }
})
