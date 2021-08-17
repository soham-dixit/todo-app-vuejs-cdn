 new Vue({
            el: '#app',
            
            data: {
                isEditing: false,
                todo: '',
                todos: [],
                selectedTodo: null
            },
            
            methods: {
                storeTodo() {
                    if(this.todo!=""){
                        this.todos.push(this.todo)
                        this.todo = ''
                    }
                },

                removeTodo(index) {
                    this.todos.splice(index, 1)
                },
                
                // editTodo(index, todo) {
                //     this.isEditing = true
                //     this.todo = todo
                //     this.selectedIndex = index
                // }
            }
        })