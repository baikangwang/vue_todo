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
      @onDeleteItem="deleteTodo"
    ></todo-item>
    <todo-info :total="total"></todo-info>
  </div>
</template>

<script>
  import TodoItem from "./components/TodoItem.vue";
  import TodoInfo from "./components/TodoInfo.vue";

  export default {
    name: "MainTodo",
    data() {
      return {
        todoData: [],
        content: "",
        total: 0,
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
      deleteTodo(item) {
        if (!item) return;

        this.todoData.splice(
          this.todoData.findIndex((i) => i.id === item.id),
          1
        );
      },
    },
    watch: {
      todoData: {
        deep: true,
        handler() {
          this.total = this.todoData.filter(
            (todo) => todo.completed === false
          ).length;
        },
      },
    },
    components: {
      TodoItem,
      TodoInfo,
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