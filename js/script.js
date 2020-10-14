'use strickt';

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
  let start = function(){
   do{
      money = prompt('Ваш месячный доход?');
   }
  

   while ( !isNumber(money)){
      money = prompt('Ваш месячный доход?');

   }
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
         sum2 = prompt('Во сколько это обойдется?');
       }
       while ( !isNumber(sum2)){
         sum2 = prompt('Во сколько это обойдется?')
      }
      sum += Number(sum2);
      // if (!isNaN (sum2)){
      //    console.log(typeof (sum2));
      // }
    }
    console.log(sum2);
   return sum;
};
 let expensesAmount = getExpensesMonth();
console.log('обязательные расходы '+ expensesAmount);

//  // 2 вопро
//  // let money = prompt('Ваш месячный доход?')
//  function getAccumulatedMonth(expenses1, expenses2 ){
//     return money - expenses;
//   }
//    let accumulatedMonth = getAccumulatedMonth(+money - +expenses );
//   console.log( 'Накопления за месяц '+accumulatedMonth);
//  // 3 вопрос
//  // выполнил выше
//  // 4 вопрос
//  // let mission = prompt('цель')
  
// function getTargetMonth (expenses1, expenses2 ){
//      return  Math.ceil(mission / accumulatedMonth);

     
//    }
//   let TargetMonth = getTargetMonth(+mission / +accumulatedMonth );
//   if (TargetMonth < 0 ){
//    console.log('Цель не будет достигнута ');
//   } else {
//    console.log('Цель  будет достигнута '+ TargetMonth);
//   }
  
 

//  //  6 вопро
//  // 7 вопрос
//  function getbudgetDay(TargetMonth){
//     return Math.floor(+accumulatedMonth/30);
//   };
//  let budgetDay = getbudgetDay();
//     console.log('Бюджет дня '+  +budgetDay)
//  let showTypeOf = function(data){
//     console.log(data)
//     };
//     showTypeOf(getExpensesMonth);
//     showTypeOf( getTargetMonth);
//     showTypeOf(budgetDay)
//  let getStatusIncome =function(){
//        if (budgetDay > 1200) {
//           return('высокий доход');
//          } else if (budgetDay>600 && budgetDay>1200){       
//           return('средний доход');
//          } else if(budgetDay < 600 && budgetDay>0 ){       
//           return('средний доход');
//          } else if (budgetDay === 1200){      
//           return('высокий доход'); 
//          } else if (budgetDay === 600){       
//           return('средний доход'); 
//          } else if (budgetDay === 0){      
//           return('низкий доход'); 
//          } else {      
//           return('что-то пошло не так'); 
//          }
//        }; 
//      console.log(getStatusIncome());