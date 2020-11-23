<template>
  <div class="todo-info">
    <span class="total">{{ total }} item left</span>
    <div class="tabs">
      <a
        class="btn primary border"
        v-for="(state, index) in states"
        :key="index"
        >{{ state }}</a
      >
    </div>
    <button class="btn info">Clear Completed</button>
  </div>
</template>

<script>
  export default {
    name: "TodoInfo",
    props: {
      total: Number,
    },
    data() {
      return {
        states: ["All", "Active", "Completed"],
      };
    },
  };
</script>

<style lang="stylus" scoped>
  @import '~styles/theme.styl'
  @import '~styles/mixins.styl'

  .todo-info
    display: flex
    justify-content: space-between
    font-weight: 400
    padding: 5px 10px
    line-height: 30px
    border-top: 1px solid rgba(0, 0, 0, 0.1)

    .total
      color: $red

    .tabs
      display: flex
      width: 280px
      justify-content: space-between

    .btn.primary.border
      primaryBorderBtn()
      width: 70px
      text-align: center

      &.active
        primaryBtn()

    .btn.info
      infoBtn()
</style>