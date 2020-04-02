<template>
  <div>
    <AddTodo @submit="addTodo" />
    <TodoList :todos="todos" />
    <!-- さらに何を入れるか定義 -->
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";

export default {
  components: {
    AddTodo,
    TodoList
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addTodo(title) {
      this.todos.push({
        // こっちではこう動く。ように定義 todosにtitle入れるってことだと思う
        title
      });
    }
  }
};
</script>

<style>
</style>
