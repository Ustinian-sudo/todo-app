<template>
  <div class="main">
    <div class="container">
      <h1>欢迎使用Feng待办事项</h1>
      <todo-input @transfer="getTodoItem"></todo-input>
      <todo-filter></todo-filter>
      <todo-list :todoItemArr="todoItemArr"></todo-list>
    </div>
  </div>
</template>

<script>
import TodoInput from "./components/TodoInput.vue";
import TodoFilter from "./components/TodoFilter.vue";
import TodoList from "./components/TodoList.vue";
export default {
  components: {
    TodoInput,
    TodoFilter,
    TodoList,
  },
  data() {
    return {
      todoItemArr: [],
    };
  },
  methods: {
    getTodoItem(todoItem) {
      this.todoItemArr.push(todoItem);
    },
  },
};
</script>


<style lang="less">
#app {
  height: 100%;
  background: #d8dfff;
}

.main {
  width: 100vw;
  min-height: 100vh;
  padding: 10vh 0;
  display: grid;
  align-items: start;
  justify-items: center;
  background: #d8dfff;
  .container {
    width: 60%;
    max-width: 400px;
    box-shadow: 0 0 24px rgb(0 0 0 / 15%);
    border-radius: 24px;
    padding: 48px 28px;
    background-color: #f5f6fc;
    /* 标题 */
    h1 {
      margin: 24px 0;
      font-size: 28px;
      text-align: center;
      color: #414873;
    }
  }
}
</style>>

