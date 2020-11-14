<template>
  <div>
    <h1>Todo List</h1>
    <input type="text" v-model="newTodo" />
    <button @click="addTodo">Add</button>
    <ul>
      <li v-for="(item, index) of todoData" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import "./assets/styles/global.styl";

export default {
  name: "App",
  data() {
    return {
      todoData: ["todo1", "todo2", "todo3"],
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo === "") return;
      this.todoData.push(this.newTodo);
      this.newTodo = "";
    },
  },
  created() {},
};
</script>

<style lang="stylus" scoped>
h1
  color: red

li:nth-of-type(odd)
  color: white

li:nth-of-type(even)
  color: red
</style>
