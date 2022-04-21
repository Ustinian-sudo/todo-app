<template>
  <div class="todo-list" v-if="selector === 'all'">
    <todo-list-item
      v-for="(item, index) in allTodoItemArr"
      :key="index"
      :todoItem="item"
    ></todo-list-item>
  </div>
  <div class="todo-list" v-if="selector === 'done'">
    <todo-list-item
      v-for="(item, index) in doneTodoItemArr"
      :key="index"
      :todoItem="item"
    ></todo-list-item>
  </div>
  <div class="todo-list" v-if="selector === 'todo'">
    <todo-list-item
      v-for="(item, index) in willTodoItemArr"
      :key="index"
      :todoItem="item"
    ></todo-list-item>
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem.vue";
import { mapState } from "vuex";
export default {
  name: "TodoList",
  components: {
    TodoListItem,
  },
  props:['selector'],
  computed: {
    ...mapState({
      todoItemArr: "todoItemArr",
    }),
    allTodoItemArr() {
      return this.todoItemArr;
    },
    doneTodoItemArr() {
      let doneTodoItemArr = [];
      for (let i = 0; i < this.todoItemArr.length; i++) {
        if (this.todoItemArr[i].completed) {
          doneTodoItemArr.push(this.todoItemArr[i]);
        }
      }
      return doneTodoItemArr;
    },
    willTodoItemArr() {
      let todoItemArr = [];
      for (let i = 0; i < this.todoItemArr.length; i++) {
        if (!this.todoItemArr[i].completed) {
          todoItemArr.push(this.todoItemArr[i]);
        }
      }
      return todoItemArr;
    },
  },
};
</script>


<style lang="less" scoped>
.todo-list {
  display: grid;
  row-gap: 14px;
}
</style>>

