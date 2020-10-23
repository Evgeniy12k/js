'use strict';
// кнопка Рассчитать
let Calculate = document.getElementById('start');
console.log(Calculate);

 // Кнопки +
 let but = document.getElementsByTagName('button')[0];
 console.log(but);

 let button = document.getElementsByTagName('button')[1];
 console.log(button);


// checkbox
let checkbox = document.querySelectorAll('.deposit-checkmark')[0];
console.log(checkbox);

// возможных доходов

 let possib = document.querySelectorAll('.additional_income-item')[0];
 console.log(possib);

 let possible = document.querySelectorAll('.additional_income-item')[1];
 console.log(possible);

// бюджет
let budgetdayvalue = document.getElementsByClassName('budget_day-value')[0];
console.log(budgetdayvalue);

let expensesmonthvalue = document.getElementsByClassName('expenses_month-value')[0];
console.log( expensesmonthvalue);

let addition = document.getElementsByClassName('additional_income-value')[0];
console.log( addition);

let additional = document.getElementsByClassName('additional_expenses-value')[0];
console.log( additional);

let income = document.getElementsByClassName('income_period-value')[0];
console.log( income);


let target = document.getElementsByClassName('expenses_month-value')[0];
console.log( target);

// поля ввода слева
// первое название
let ferst = document.querySelector('[class="income-title"]');
console.log( ferst);

// строка сумма
let sumferst = document.querySelector('.income-amount');
console.log( sumferst);

 // второе  название
 let second = document.querySelector('input.income-title');
 console.log( second);

 // строка сумма 2

 let sumsecond = document.querySelector('.additional_income-item');
 console.log( sumsecond);


 // третье  название
 let third = document.querySelector('input.income-title');
 console.log( third);

 // строка сумма 3
 let sumthird = document.querySelector('input.additional_income-item');
 console.log( sumthird);

 //range 
 let range = document.querySelector('.period-select');
 console.log( range);

 // сумма 
 let summa = document.querySelector('input.target-amount');
 console.log( summa);

 // месячный доход сумма

 let total = document.querySelector('input.salary-amount');
 console.log( total);


 // обязательные расходы
 // название
 let fourth = document.querySelector('input.expenses-title');
 console.log(fourth);

 // сумма
 let cost = document.querySelector('input.expenses-amount');
 console.log(cost);