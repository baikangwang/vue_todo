<template>
  <div class="main-todo">
    <input type="text" class="add-todo" placeholder="what to do?" autofocus />
    <todo-item></todo-item>
  </div>
</template>

<script>
  import TodoItem from "./components/TodoItem.vue";
  export default {
    name: "MainTodo",
    components: {
      TodoItem,
    },
  };
</script>

<style lang="stylus" scoped>
  .main-todo
    margin: 0 auto
    width: 600px
    background-color: #fff
    box-shadow: 0 0 5px #666

    .add-todo
      width: 100%
      padding: 16px 16px 16px 36px
      font-size: 24px
      font-color: inherit
      font-family: inherit
      font-weight: inherit
      border: none
      outline: none
      box-sizing: border-box
</style>