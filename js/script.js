'use strict';


class Todo {
    constructor(form, input, todolist, todoCompleted){
        this.form = document.querySelector(form);
        this.input = document.querySelector(input);
        this.todoList = document.querySelector(todolist);
        this.todoCompleted = document.querySelector(todoCompleted);
        this.todoData = new Map(JSON.parse(localStorage.getItem('toDolist')));

   
    }
// загрузка в Local
    addToStorage(){
         localStorage.setItem('toDolist', JSON.stringify([...this.todoData]))
    }

    render(){
        this.todoList.textContent = '';
        this.todoCompleted.textContent = '';
        
        this.todoData.forEach(this.creteItem, this);
        this.addToStorage();
    }
    // создаем элемнты с нужной структорй. Проверяем значение и распределяем в нужный сипсок
    creteItem(todo){
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.key = todo.key;
        li.insertAdjacentHTML('beforeend',
         `  <span class="text-todo">${todo.value}</span>
            <div class="todo-buttons">
                    <button class="todo-remove"></button>
                    <button class="todo-complete"></button>
            </div>`);
            if (todo.completed){
                this.todoCompleted.append(li);
            }else {
                this.todoList.append(li);
            }
            this.input.value = '';
    }


    addTodo(event) {
        event.preventDefault();
      
        
        if (this.input.value.trim()){
            const newTodo = {
                value: this.input.value,
                completed: false,
                key: this.generateKey(),
            };
            this.todoData.set(newTodo.key, newTodo); //создаем список с нужным ключом
            
            this.render();
        }else  {
            alert('нужно ввести значение ');
      }
      
       
       
    }    
    
    generateKey(){
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        
    }

    deleteItem(event){
        this.todoData.delete(event.closest('li').key);
        this.render();
    }
// обмен значений 
    completedItem(event){
        if (!this.todoData.get(event.closest('li').key).completed){
            this.todoData.get(event.closest('li').key).completed = true;
        } else{
        
                this.todoData.get(event.closest('li').key).completed = false;
        }
        this.render();
    }
//  вызов двух методов. В  зависемости от нажатия кнопки
    hendler() {
        this.form.addEventListener('submit', this.addTodo.bind(this));
        document.addEventListener('click', event => {
            let target = event.target;
            if (target === target.closest('.todo-remove')){
                this.deleteItem(target);
            } if (target === target.closest('.todo-complete')){
                this.completedItem(target);
            }

        });  

    }

    init() {
       
        this.render();
       
         this.hendler();
    }

    

}

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed');

todo.init();

