'use strickt';

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



    switch(budgetDay){
        case budgetDay<1200:
        case budgetDay>600:
                console.log('У вас средний уровень дохода');
        break;
        case budgetDay<600:
            case budgetDay>0:
            console.log('К сожалению у вас уровень дохода ниже среднего');
        break;

        case budgetDay>1200:
        console.log('У вас высокий уровень дохода');
        break;

        case 1200:
                console.log('У вас высокий уровень дохода');
        break;
        case 0:
             console.log('К сожалению у вас уровень дохода ниже среднего');
        break;
   }

