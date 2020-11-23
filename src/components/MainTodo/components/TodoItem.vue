<template>
  <div :class="['todo-item', todoItem.completed ? 'completed' : '']">
    <input type="checkbox" name="" id="" v-model="todoItem.completed" />
    <label for="">{{ todoItem.content }}</label>
    <button @click="deleteItem"></button>
  </div>
</template>

<script>
  export default {
    name: "TodoItem",
    props: {
      todoItem: Object,
    },
    methods: {
      deleteItem() {
        this.$emit("onDeleteItem", this.todoItem);
      },
    },
  };
</script>

<style lang="stylus" scoped>
  @import '~styles/theme.styl'
  @import '~styles/mixins.styl'

  .todo-item
    display: flex
    justify-content: space-between
    padding: 10px
    font-size: 24px
    border-top: 1px solid rgba(0, 0, 0, 0.1)

    &:hover
      button:after
        content: 'X'
        font-size: 24px
        color: $lightred

    &.completed
      label
        color: #d9d9d9
        text-decoration: line-through

    input
      width: 50px
      height: 30px
      text-align: center
      cleanDefaultStyle()

      &:after
        content: url('~images/unchecked.svg')

      &:checked:after
        content: url('~images/checked.svg')

    label
      flex: 1
      transition: color 0.4s

    button
      width: 40px
      cleanDefaultStyle()
      background-color: transparent
      cursor: pointer
</style>