'use strict';
// ================================
// Урок 8.Работа со страницей
// ================================

// проверяет является ли числом
let isNumber = function(n){
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

// вводим бюджет. Проверяем на  число
let money,
    start = function () {
         do {
               money = prompt("Ваш месячный доход?");
      } while (!isNumber(money));
            money = Number(money);
            // return money;
         };
         start(); 

// соаздание объекта  appData

let expenses1, expenses2;
let  appData = {
         income: {},
         addIncome: [],
         expenses:{},
         addExpenses: [],
         deposit:  false,
         persentDeposit: 0,
         moneyDeposit: 0,
         mission: 150000,
         period: 5,
         budget: money,
         budgetDay: 0,
         budgetMonth: 0,
         expensesMonth: 0,

         
// вводим данные через цикл


           

         asking: function(){

            // дополнительный доход

            if (confirm('Есть ли у вас доп заработок?')){
                let itemIncome; 
                 do {
                    itemIncome = prompt ('Какой у вас доп. доход');
                   } while (!isNaN(itemIncome));
                let cashIncome;
                 do {
                    cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?',10000 );
                  
                } while (isNaN(parseFloat(cashIncome)));
                 appData.income[itemIncome ] = cashIncome;
                 
            };
             let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
             appData.addExpenses = addExpenses.replace (/( |^)[а-яёa-z]/g, function(x){ return x.toUpperCase(); } );

               

 let number = 0;
 let exp = [];
         for (let i = 0; i < 2; i++){
             
             

             do {
                exp[i] = prompt('Введите обязательную статью расходов?'); 
            }
            while (!isNaN(exp[i]));
                  appData.expenses[exp[i]] = exp[i];
             
             do {
                 number = prompt('Во сколько это обойдется?'); 
             }
             while (!isNumber(number));
                    appData.expenses[exp[i]] = number; 
            };
            },
            
                 //   сумма расходов на месяц и день
          getExpensesMonth: function(){
               let sum = 0;        
               for (let key in appData.expenses) {
                   sum = sum + Number(appData.expenses[key]); 
               }
               appData.expensesMonth = sum; 
           },             
             // бюджет за месяц
          getBurget: function(){
            appData.budgetMonth = appData.budget - appData.expensesMonth;          
            appData.budgetDay = Math.floor(appData.budgetMonth / 30);       
          },
         //  достижение цели
          getTargetMonth: function(){
             return Math.floor(appData.mission / appData.budgetMonth);       
                 }, 
                 // Статус по доходам
          getStatusIncome: function(){
             if (appData.budgetDay > 1200) {
                return('высокий доход');
               } else if (appData.budgetDay>600 && appData.budgetDay>1200){       
                return('средний доход');
               } else if(appData.budgetDay < 600 && appData.budgetDay>0 ){       
                return('средний доход');
               } else if (appData.budgetDay === 1200){      
                return('высокий доход'); 
               } else if (appData.budgetDay === 600){       
                return('средний доход'); 
               } else if (appData.budgetDay === 0){      
                return('низкий доход'); 
               } else {      
                return('что-то пошло не так'); 
               }
            
          },   
  
          getInfoDeposit: function(){
         if (appData.deposit) {
            
            
            do{
                appData.persentDeposit = prompt('Какой годовой процент?','10');
            } while (isNaN(parseFloat(appData.persentDeposit)));

            do{
                appData.moneyDeposit = prompt('Какая сумма заложена?', '10000');
            } while (isNaN(parseFloat(appData.moneyDeposit)));   
        }
        },
    
       
       calcSavedMoney: function(){
          return appData.budgetMonth * appData.period;
       }
    };

        
  console.log('деньги',appData.budget);
  appData.asking();
 
   appData.getExpensesMonth();
   appData.getBurget();

   console.log('Расходы за месяц: ' + appData.expensesMonth);

   console.log('бюджет', appData.budget );  
  console.log('проверка', appData.expensesMonth);

   console.log('за день', appData.budgetDay)
  if (appData.getTargetMonth() >= 0) {
      console.log('Цель будет достигнута за: ' + appData.getTargetMonth() + ' месяца');
   } else {
     console.log('Цель не будет достигнута');
   };
  console.log(appData.getStatusIncome())
  console.log('Наша программа включает в себя данные:');
  for (let key in appData) {
      console.log(key + ': ' + appData[key]);
  };
 
