'use strict';
// объявление переменных
const todoControl = document.querySelector('.todo-control'),
      headerInput = document.querySelector('.header-input'),
      todoList = document.querySelector('.todo-list'),
      todoCompleted = document.querySelector('.todo-completed'),
      headerButton = document.querySelector('.header-button');
// массив для результатов

        let data; 
      const todoData = [
        

];
localStorage.setItem('todoData', JSON.stringify(todoData));
data = JSON.parse(localStorage.getItem(todoData));

// 
const render = function(){
    headerButton.setAttribute('disabled', 'disabled');
    headerInput.addEventListener('input', function() {
        if(headerInput.value.trim() !== '') {
        headerButton.removeAttribute('disabled');
        } else {
        headerButton.setAttribute('disabled', 'disabled');
        }
    });
    
     todoList.textContent = '';
     todoCompleted.textContent = '';
 
    todoData.forEach(function(item){
    const li = document.createElement('li');

    // if (headerInput.value === '') {
    //     return;
    // }

    li.classList.add('todo-item');
    li.innerHTML = '<span class="text-todo">' + item.value  + '</span>'+
        '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' + 
            '<button class="todo-complete"></button>' + 
         '</div>';
            if (item.completed){
                todoCompleted.append(li);

            }else{
                todoList.append(li);
            };
                    
        const btntodoCompleted = li.querySelector('.todo-complete');
        btntodoCompleted.addEventListener('click', function(){
            item.completed = !item.completed;
            render();

        });
        
        
        
        let del;
           const btntodoRemove = li.querySelector('.todo-remove');
           btntodoRemove.addEventListener('click', function(){
            todoData.splice(todoData.indexOf(item), 1);
            render();
            
           
           });
         
         
    });
    localStorage.setItem('todoData', JSON.stringify(todoData));
};

todoControl.addEventListener('submit', function(event){
 event.preventDefault(); //отключает перезагрузку страницы


 const newTodo = {

    value: headerInput.value,


    completed: false
    
   
}; 
  todoData.push( newTodo);
render();
headerInput.value = '';
});

render();