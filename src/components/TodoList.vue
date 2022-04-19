<template>
  <div class="todo-list">
    <todo-list-item
      v-for="(item, index) in todoItemArr"
      :key="index"
      :todoItem="item"
    ></todo-list-item>
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem.vue";
export default {
  name: "TodoList",
  props: ["todoItemArr"],
  components: {
    TodoListItem,
  },
};
</script>


<style lang="less" scoped>
.todo-list {
  display: grid;
  row-gap: 14px;
}
</style>>

