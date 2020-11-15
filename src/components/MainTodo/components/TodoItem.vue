<template>
  <div class="todo-item">
    <input type="checkbox" name="" id="" />
    <label for="">todo1</label>
    <button>X</button>
  </div>
</template>

<script>
  export default {
    name: "TodoItem",
  };
</script>

<style lang="stylus" scoped>
  .todo-item
    display: flex
    justify-content: space-between
    padding: 10px

    input
      width: 50px
      height: 30px
      appearance: none
      border: none
      outline: none

      &:after
        content: url('~images/unchecked.svg')

      &:checked:after
        content: url('~images/checked.svg')

    label
      flex: 1
</style>