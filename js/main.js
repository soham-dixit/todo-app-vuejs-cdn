Vue.config.devtools = true;
new Vue({
  el: "#app",

  data: {
    todo: "",
    todos: [],
    selectedTodo: null,
  },

  methods: {
    storeTodo() {
      if (this.todo != "") {
        this.todos.push({name: this.todo, isStrikedOff: false});
        this.todo = "";
      }
    },

    removeTodo(index) {
      this.todos.splice(index, 1);
    },

    doneTodo(index){
        this.todos[index].isStrikedOff=true;
    },
  },
});
