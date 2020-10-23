'use strict';
// кнопка Рассчитать
let Calculate = document.getElementById('start');
console.log(Calculate);

 // Кнопки +
 let button1 = document.getElementsByTagName('button')[0];
 console.log(button1);

 let button2 = document.getElementsByTagName('button')[1];
 console.log(button2);


// checkbox
let checkbox = document.querySelectorAll('.deposit-checkmark')[0];
console.log(checkbox);

// возможных доходов

 let possible1 = document.querySelectorAll('.additional_income-item')[0];
 console.log(possible1);

 let possible2 = document.querySelectorAll('.additional_income-item')[1];
 console.log(possible2);

// бюджет
let budgetdayvalue = document.getElementsByClassName('budget_day-value')[0];
console.log(budgetdayvalue);

let expensesmonthvalue = document.getElementsByClassName('expenses_month-value')[0];
console.log( expensesmonthvalue);

let additional1 = document.getElementsByClassName('additional_income-value')[0];
console.log( additional1);

let additional2 = document.getElementsByClassName('additional_expenses-value')[0];
console.log( additional2);

let income = document.getElementsByClassName('income_period-value')[0];
console.log( income);


let target = document.getElementsByClassName('expenses_month-value')[0];
console.log( target);

// поля ввода слева
// первое название
let input1 = document.querySelector('[class="income-title"]');
console.log( input1);

// строка сумма
let sum1 = document.querySelector('[class="income-amount"]');
console.log( sum1);

// второе  название
let input2 = document.querySelector('[class="income-title"]');
console.log( input2);

// строка сумма 2

let sum2 = document.querySelector('[class="additional_income-item"]');
console.log( sum2);


// третье  название
let input3 = document.querySelector('[class="income-title"]');
console.log( input3);

// строка сумма 3
let sum3 = document.querySelector('[class="additional_income-item"]');
console.log( sum3);

//range 
let range = document.querySelector('[type="range"]');
console.log( range);

// сумма 
let summa = document.querySelector('[class="target-amount"]');
console.log( summa);

// месячный доход сумма

let sum = document.querySelector('[class="salary-amount"]');
console.log( sum);


// обязательные расходы

// название
let input4 = document.querySelector('[class="expenses-title"]');
console.log( input4);

// сумма
let sum4 = document.querySelector('[class="expenses-amount"]');
console.log( sum4);
