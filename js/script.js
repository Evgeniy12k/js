'use strict';
document.body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";
 // удаление рекламы
 const spam = document.querySelector('.adv');
 console.log(spam);

 spam.remove();

 // заголовок в кние 3
  const titleBook = document.querySelectorAll('h2');
 console.log(titleBook);
 titleBook[4].textContent = 'Книга 3. this и Прототипы Объектов';


 // смена картинки
 // const image = document.getElementById('background');

 // меняем книги местами
const booksParent = document.querySelector('.books');
 const books = document.querySelectorAll('.book');
 console.log(books);
 
 // записываем каждую книгу с индексом
 const book1 = books[1],
       book2 = books[0],
       book3 = books[4],
       book4 = books[3],
       book5 = books[5],
       book6 = books[2];
    
  // очищаем список
  book1.remove();
  book2.remove();
  book3.remove();
  book4.remove();
  book5.remove();
  book6.remove();
  // добавляем элементы в новый список
  booksParent.append(book1);
  booksParent.append(book2);
  booksParent.append(book3);
  booksParent.append(book4);
  booksParent.append(book5);
  booksParent.append(book6);