'use strict';
// ================================
// Урок 5.Циклы.
// ================================

// проверяет является ли числом.
// принимает число и возвращаетс True или False/
//  isFinite(n) определяет конечное ли число

 let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
 };

let money, 
    income = 'фриланс',  
    deposit = true, 
    mission = 150000,
    period  = 5;

// ждет от пользователя ответа(число)

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
      //  проверяет первое условие
       if (i===0){
          expenses1 = prompt('Введите обязательную статью расходов?');
      // проверяет второе условие
      }if(i===1){
          expenses2 = prompt('Введите обязательную статью расходов?','квартира' );
      }
      // ждет от пользователя правильного значения(число)
    do{
      sum2 = prompt('Во сколько это обойдется?')
       }
      //  проверяет является ли запрос числом
    while ( !isNumber(sum2));
         sum += +sum2;

    }
       console.log(sum2);
   return sum;
}

 let expensesAmount = getExpensesMonth();
console.log('обязательные расходы '+ expensesAmount);

//  вычисляются расходы

function getAccumulatedMonth(expenses1, expenses2 ){
     return money - expensesAmount;
   }
 let accumulatedMonth = getAccumulatedMonth(+money - +expensesAmount );
   console.log( 'Накопления за месяц '+ accumulatedMonth);

   //   определет достижение цели

function getTargetMonth (expenses1, expenses2 ){
      return  Math.ceil(mission / accumulatedMonth);  
    }
 let TargetMonth = getTargetMonth(+mission / +accumulatedMonth );
     if (TargetMonth < 0 ){
    console.log('Цель не будет достигнута ');
   } else {
    console.log('Цель  будет достигнута '+ +TargetMonth);
   }