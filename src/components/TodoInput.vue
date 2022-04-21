<template>
  <div class="input-add">
    <input class="input" type="text" v-model="todoItem.content" />
    <button class="btn" @click="add">
      <i class="plus"></i>
    </button>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "TodoInput",
  data() {
    return {
      todoItem: {
        completed: false,
        content: "",
        id: 0,
      },
    };
  },
  methods: {
    add() {
      this.todoItem.id++;
      let todoItem = _.cloneDeep(this.todoItem);
      this.$emit("transfer", todoItem);
    },
  },
};
</script>


<style lang="less" scoped>
.input-add {
  position: relative;
  display: flex;
  align-items: center;
  .input {
    padding: 16px 52px 16px 18px;
    border-radius: 48px;
    border: none;
    outline: none;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
    width: 100%;
    font-size: 16px;
    color: #626262;
  }
  .btn {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: linear-gradient(#c0a5f3, #7f95f7);
    border: none;
    color: white;
    position: absolute;
    right: 0px;
    cursor: pointer;
    outline: none;
    .plus {
      display: block;
      width: 100%;
      height: 100%;
      background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
      background-size: 50% 2px, 2px 50%;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  .btn:active {
    background: #58727e;
  }
}
</style>>

