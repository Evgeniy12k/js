'use strict';

// смена картинки
 
document.body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";
 
// удаление рекламы
 const spam = document.querySelector('.adv');
 console.log(spam);

 spam.remove();

// ========================
// заголовок в книге 3
// ========================
   const titleBook = document.querySelectorAll('a');
  console.log(titleBook);

   titleBook[4].textContent = 'Книга 3. this и Прототипы Объектов';

//  =======================
//   меняем книги местами
//  =======================
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

  // ==============================
  // 6 глава добавляю новый элемент
  // ===============================

   
  const bookUl = document.querySelectorAll('ul');
   console.log(bookUl);

   const h = bookUl[5];
   console.log(h);

   const list = h.querySelectorAll('li');
   console.log(list);
   

  // создаю новый элемент
  const newElem = document.createElement('li');
  newElem.textContent = 'Глава 8: За пределами ES6';

  h.append(newElem);

  list[9].before(newElem);


  // ==============================
  // Меняю местами элементы в главе 2
  // ===============================

  const secondBook =bookUl[1];
  const list2 = secondBook.querySelectorAll('li');
  console.log(list2);
  list2[4].before(list2[6]);
  list2[4].before(list2[8]);
  list2[9].after(list2[2]);

  // ==============================
  // Меняю местами элементы в главе 5
  // ===============================

  const bookFive =bookUl[4];
  const list3 = bookFive.querySelectorAll('li');
  console.log(list3);
  list3[2].before(list3[9]);
  list3[2].before(list3[3]);

  list3[8].before(list3[5]);
  list3[2].before(list3[4]);
