<template>
  <div v-if="user">
    <p>{{user.name}}</p>
    <AddTodo @submit="addTodo" />
    <TodoList :todos="user.todos" /> //修正
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import axios from "@/plugins/axios";
export default {
  components: {
    AddTodo,
    TodoList
  },
  computed: {
    user() {
      return this.$store.state.currentUser;
    }
  },
  methods: {
    async addTodo(todo) {
      const { data } = await axios.post("/v1/todos", { todo });
      //追加
      this.$store.commit("setUser", {
        ...this.user,
        todos: [...this.user.todos, data] 
        // 初期値ではなくpostできるように
      });
    }
  }
};
</script>

<style>
</style>
