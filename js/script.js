'use strickt';
// let money,
//     income = 'фриланс', 
//     addExpenses, 
//     deposit = true, 
      
//     period  = 5,
//     budgetDay;
// // 1 ответ 
 
//  console.log(income);
//  console.log(deposit);
// // 2 ответ
// // 3 ответ 
// console.log('Период равен'+' '+period+' '+ 'месяцев.'+' '
//             +'Цель заработать'+' '+ mission+' '+ 'рублей/долларов/гривен/юани');
  
// // 5 ответ
// console.log(budgetDay=money/30);

// ================================
// Урок 3
// ================================
// 1 вопрос
  let money = prompt('Ваш месячный доход?');
   console.log( Number(money));
//  2 вопрос
  let addExpenses= prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
   console.log(addExpenses);
//  3 вопрос
  let deposit= confirm('Есть ли у вас депозит в банке?');
  console.log(deposit);
// 4 вопрос
  let expenses1 = prompt('Введите обязательную статью расходов?');
   console.log(  Number(expenses1));
// 5 вопрос
  let expenses2 = prompt('Введите обязательную статью расходов?');
   console.log( Number(expenses2));
 
   let amount1 = prompt('Во сколько это обойдется?');
   console.log(amount1);
  
   let amount2 = prompt('Во сколько это обойдется?');
    console.log(amount2);
// 6 вопрос
   let budgetMonth;
   budgetMonth = money-expenses1-expenses2;
   console.log('Бюджет на месяц'+' '+budgetMonth);
// 7 вопрос
   let mission = 150000;
   let  target = Math.ceil(mission/budgetMonth);
   console.log('Цель будет достигнута'+' '+target);
  
// 8 вопрос
   let budgetDay =+Math.floor(budgetMonth/30);
   console.log('Бюджет на месяц'+' '+budgetDay);

//    условия 
   if (budgetDay>1200){
                console.log('У вас высокий уровень дохода');
   }else if (budgetDay > 600 && budgetDay<1200){

                console.log('У вас средний уровень дохода');
   }
   else if (budgetDay < 600 && budgetDay>0){

                console.log('К сожалению у вас уровень дохода ниже среднего');
}else {
                console.log('Что то пошло не так');
      }


    switch(budgetDay){
        case 600:
                console.log('У вас средний уровень дохода');
        break;

        case 1200:
                console.log('У вас высокий уровень дохода');
        break;
        case 0:
             console.log('К сожалению у вас уровень дохода ниже среднего');
        break;
   }

