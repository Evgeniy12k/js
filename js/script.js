'use strict';

 let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
 };

let money, 
    income = 'фриланс',  
    deposit = true, 
    mission = 150000,
    period  = 5;


// ================================
// Урок 4. Функции.
// ================================

// 1 вопрос
// let expenses1 = prompt('Введите обязательную статью расходов?');
// let amount1 = +prompt('Во сколько это обойдется?');

// let expenses2 = prompt('Введите обязательную статью расходов?','квартира' );
// let amount2 = +prompt('Во сколько это обойдется?');


// ================================
// Урок 5.Циклы.
// ================================

   let start = function () {
      do {
        money = prompt("Ваш месячный доход?");
      } while (!isNumber(money));
      money = Number(money);
   };
 
  start();


let showTypeOf = function(item){
      console.log(item);
      };
      showTypeOf( money);
      showTypeOf( income);
      showTypeOf(deposit);

let expenses1, expenses2;

let addExpenses= prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
   console.log(addExpenses.toLowerCase().split(','));
function getExpensesMonth(){
   let sum  = 0;
   let sum2;

    for (let i = 0; i<2; i++){
       
      if (i===0){
          expenses1 = prompt('Введите обязательную статью расходов?');
      }if(i===1){
          expenses2 = prompt('Введите обязательную статью расходов?','квартира' );
      };
    do{
      sum2 = prompt('Во сколько это обойдется?')
       }
    while ( !isNumber(sum2));
         sum += +sum2;
      // if (!isNaN (sum2)){
      //    console.log(typeof (sum2));
      // }
    }
    console.log(sum2);
   return sum;
};
 let expensesAmount = getExpensesMonth();
console.log('обязательные расходы '+ expensesAmount);

  
  function getAccumulatedMonth(expenses1, expenses2 ){
     return money - expensesAmount;
   }
    let accumulatedMonth = getAccumulatedMonth(+money - +expensesAmount );
   console.log( 'Накопления за месяц '+accumulatedMonth);
  
 function getTargetMonth (expenses1, expenses2 ){
      return  Math.ceil(mission / accumulatedMonth)   
    }
   let TargetMonth = getTargetMonth(+mission / +accumulatedMonth );
   if (TargetMonth < 0 ){
    console.log('Цель не будет достигнута ');
   } else {
    console.log('Цель  будет достигнута '+ +TargetMonth);
   }