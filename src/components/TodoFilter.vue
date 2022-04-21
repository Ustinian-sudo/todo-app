<template>
  <div class="filters">
    <span
      v-for="filter in filters"
      :key="filter.value"
      class="filter"
      :class="{ active: selector === filter.value }"
      @click="changeFilter(filter.value)"
      >{{ filter.label }}</span
    >
  </div>
</template>

<script>
export default {
  name: "TodoFilter",
  data() {
    return {
      selector: "all",
      filters: [
        { label: "全部", value: "all" },
        { label: "已完成", value: "done" },
        { label: "未完成", value: "todo" },
      ],
    };
  },
  methods: {
    changeFilter(value) {
      this.selector = value;
      this.$emit('change-filter',this.selector);
    },
  },
};
</script>


<style lang="less" scoped>
.filters {
  display: flex;
  margin: 24px 2px;
  color: #c0c2ce;
  font-size: 14px;
  cursor: pointer;
  .filter {
    margin-right: 14px;
    transition: 0.8s;
  }
  .active {
    color: #6b729c;
    transform: scale(1.2);
  }
}
</style>>

