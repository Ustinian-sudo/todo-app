import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    todoItemArr: [],
  },
  mutations: {
    add(state, todoItem) {
      state.todoItemArr.push(todoItem)
    },
    changState(state, todoItem) {
      for (let i = 0; i < state.todoItemArr.length; i++) {
        if (state.todoItemArr[i].id === todoItem.id) {
          state.todoItemArr[i].completed = todoItem.completed;
        }
      }
    }
  },
  actions: {},
  modules: {}
})