'use strict';
// кнопка Рассчитать
let Calculate = document.getElementById('start');
console.log(Calculate);

 // Кнопки +
 let buttonPlusOne = document.getElementsByTagName('button')[0];
 console.log(buttonPlusOne);

 let buttonPlusTo = document.getElementsByTagName('button')[1];
 console.log(buttonPlusTo);


// checkbox
let checkbox = document.querySelectorAll('.deposit-checkmark')[0];
console.log(checkbox);

// возможных доходов

 let possibleIncomeOne = document.querySelectorAll('.additional_income-item')[0];
 console.log(possibleIncomeOne);

 let possibleIncomeTo = document.querySelectorAll('.additional_income-item')[1];
 console.log(possibleIncomeTo);

// бюджет
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
console.log(budgetDayValue);

let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
console.log( expensesMonthValue);

let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
console.log( additionalIncomeValue);

let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
console.log( additionalExpensesValue);

let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
console.log( incomePeriodValue);


let targetMonthValue = document.getElementsByClassName('expenses_month-value')[0];
console.log( targetMonthValue);

// поля ввода слева

let inputOne = document.querySelector('[class="income-title"]');
console.log( inputOne);

let inputTo = document.querySelector('[class="income-title"]');
console.log( inputTo);

let inputThird = document.querySelector('[class="income-title"]');
console.log( inputThird);

//range 
let range = document.querySelector('[type="range"]');
console.log( range);

