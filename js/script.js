'use strickt';

let money = 50000, 
    income = 'фриланс', 
    addExpenses =' интернет, такси, коммуналка ', 
    deposit = true, 
    mission = 150000,
    period  = 5;


// ================================
// Урок 4. Функции.
// ================================

// 1 вопрос
let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?');

let expenses2 = prompt('Введите обязательную статью расходов?' );
let amount2 = prompt('Во сколько это обойдется?');


function getExpensesMonth(amount1, amount2 ){
   console.log(arguments);
   return amount1 + amount2;
}
 let expenses =  getExpensesMonth(+amount1,+amount2 );
console.log('обязательные расходы '+ expenses);

 // 2 вопро
 // let money = prompt('Ваш месячный доход?')
 function getAccumulatedMonth(expenses1, expenses2 ){
    return money - expenses;
  }
   let accumulatedMonth = getAccumulatedMonth(+money - +expenses );
  console.log( 'Накопления за месяц '+accumulatedMonth);
 // 3 вопрос
 // выполнил выше
 // 4 вопрос
 // let mission = prompt('цель')
 function getTargetMonth (expenses1, expenses2 ){
    return  Math.ceil(mission / accumulatedMonth);
  }
 let TargetMonth = getTargetMonth(+mission / +accumulatedMonth );
  console.log('достигнуть цели через '+ TargetMonth)
 //  6 вопро
 // 7 вопрос
 function getbudgetDay(TargetMonth){
    return Math.floor(+accumulatedMonth/30);
  };
 let budgetDay = getbudgetDay();
    console.log('Бюджет дня '+  +budgetDay)
 let showTypeOf = function(data){
    console.log(data)
    };
    showTypeOf(getExpensesMonth);
    showTypeOf( getTargetMonth);
    showTypeOf(budgetDay)
 let getStatusIncome =function(){
       if (budgetDay > 1200) {
          return('высокий доход');
         } else if (budgetDay>600 && budgetDay>1200){       
          return('средний доход');
         } else if(budgetDay < 600 && budgetDay>0 ){       
          return('средний доход');
         } else if (budgetDay === 1200){      
          return('высокий доход'); 
         } else if (budgetDay === 600){       
          return('средний доход'); 
         } else if (budgetDay === 0){      
          return('низкий доход'); 
         } else {      
          return('что-то пошло не так'); 
         }
       }; 
     console.log(getStatusIncome());