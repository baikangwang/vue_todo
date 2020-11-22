<template>
  <div class="main-todo">
    <input
      type="text"
      class="add-todo"
      placeholder="what to do?"
      v-model="content"
      autofocus
      @keyup.enter="addTodo"
    />
    <todo-item
      v-for="(item, index) in todoData"
      :key="index"
      :todoItem="item"
    ></todo-item>
  </div>
</template>

<script>
  import TodoItem from "./components/TodoItem.vue";
  export default {
    name: "MainTodo",
    data() {
      return {
        todoData: [],
        content: "",
      };
    },
    methods: {
      addTodo() {
        if (this.content === "") return;

        this.todoData.unshift({
          id: this.todoData.length,
          content: this.content,
          completed: false,
        });

        this.content = "";
      },
    },
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