'use strict';
// кнопка Рассчитать
let start = document.getElementById('start');
console.log(start);

 // Кнопки +
 let buttonPlus = document.getElementsByTagName('button')[0];
 console.log(buttonPlus);

 let buttonPlusTo = document.getElementsByTagName('button')[1];
 console.log(buttonPlusTo);


// checkbox
let checkbox = document.querySelectorAll('.deposit-checkmark')[0];
console.log(checkbox);

// возможных доходов

 let possib = document.querySelectorAll('.additional_income-item')[0];
 console.log(possib);

 let additionalIncomeItem = document.querySelectorAll('.additional_income-item')[1];
 console.log(additionalIncomeItem);

// бюджет
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
console.log(budgetDayValue);

let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
console.log(budgetMonthValue);

let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
console.log( expensesMonthValue);

let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
console.log(additionalIncomeValue);
let additionalExpensesItem = document.getElementsByClassName('additional_income-item')[0];
console.log(additionalExpensesItem);


let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
console.log( additionalExpensesValue);

let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
console.log( incomePeriodValue);


let target = document.getElementsByClassName('expenses_month-value')[0];
console.log( target);

// поля ввода слева
// первое название
let ferst = document.querySelector('[class="income-title"]');
console.log( ferst);

// строка сумма
let incomeItems = document.querySelectorAll('.income-items');


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
 let periodSelect = document.querySelector('.period-select');
 console.log( periodSelect);
 let  PeriodAamount = document.querySelector('.period-amount');
 console.log( PeriodAamount);


 // сумма 
 let targetAmount = document.querySelector('input.target-amount');
 console.log( targetAmount);

 // месячный доход сумма

 let total = document.querySelector('input.salary-amount');
 console.log( total);


 // обязательные расходы
 // название
 let fourth = document.querySelector('input.expenses-title');
 console.log(fourth);

 // сумма
 let expensesItems = document.querySelectorAll('.expenses-items');



 
// проверяет является ли числом
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};


// вводим бюджет. Проверяем на  число




// соаздание объекта  appData

let expenses1, expenses2;
let  appData = {
     income: {},
     incomeMonth: 0,
     addIncome: [],
     expenses:{},
     addExpenses: [],
     deposit:  false,
     persentDeposit: 0,
     moneyDeposit: 0,
     
    

  
     budget: 0,
     budgetDay: 0,
     budgetMonth: 0,
     expensesMonth: 0,

     start: function () {
       
// присваиваем бюджет
if (total.value ===''){
    alert('Ошибка.  Введите месячный доход');
    return;
}


            appData.budget = +total.value;
            appData.getBurget();
            appData.getExpenses();
            appData.getAddExpenses();
            // appData.getAddIncome();
         
            appData.getExpensesMonth();

            appData.getPeriodSelect();
            appData.showResult();
        },

    // новый метод для присваивания значений в форму
    showResult: function () { 
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetAmount.value = Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = appData.calcPeriod();
        periodSelect.addEventListener('input', () => {
            incomePeriodValue.value = appData.calcPeriod();
        });
    },



 addIncomeBlock: function(){
    
        
            let cloneIncomeItem = incomeItems[0].cloneNode(true);
            incomeItems[0].parentNode.insertBefore(cloneIncomeItem, buttonPlus);
            incomeItems = document.querySelectorAll('.income-items');
            if (incomeItems.length === 2){
                buttonPlus.style.display = 'none'; 
            }
     },

// метод добавления полей(кнопка + обязательные доходы)

 addExpensesBlock: function(){
    
        
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonPlusTo);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3){
            buttonPlusTo.style.display = 'none'; 
        }
 },
 getExpenses: function(){
    expensesItems.forEach(function(item){
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
    
    if (itemExpenses !== '' && cashExpenses !== ''){
        appData.expenses[itemExpenses] = cashExpenses;

    };
});
 },

 getIncome: function(){
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
                 
            }

            for (let key in appData.income){
                appData.incomeMonth += +appData.income[key];
            }
    
    incomeItems.forEach(function(item){
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncomes = item.querySelector('.income-amount').value;
    
    if (itemIncome !== '' && cashIncomes !== ''){
        appData.expenses[itemIncome] = cashIncomes;

    };
});
 },


 


 getAddExpenses: function(){
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
         item = item.trim();
        if (item !== ''){
            appData.addExpenses.push(item);
         }
        

    });
 },

//  getAddIncome: function(){
//     additionalIncomeItem.forEach(function(item){
//     let itemValue = item.value.trim();
//     if (itemValue !== ''){
//         appData.addIncome.push(itemValue);
//      }
//     });
//  },
//  меняем значение ползунка
 

     
// вводим данные через цикл

    //  asking: function(){

    //     // дополнительный доход

    //     if (confirm('Есть ли у вас доп заработок?')){
    //         let itemIncome; 
    //          do {
    //             itemIncome = prompt ('Какой у вас доп. доход');
    //            } while (!isNaN(itemIncome));
    //         let cashIncome;
    //          do {
    //             cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?',10000 );
              
    //         } while (isNaN(parseFloat(cashIncome)));
    //          appData.income[itemIncome ] = cashIncome;
             
    //     };
    //      let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    //      appData.addExpenses = addExpenses.replace (/( |^)[а-яёa-z]/g, function(x){ return x.toUpperCase(); } );

           


    //     },
        
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
         return targetAmount.value / appData.budgetMonth;       
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
      return appData.budgetMonth * periodSelect.value ;
   }
};
start.addEventListener('click', appData.start);


buttonPlusTo.addEventListener('click',  appData.addExpensesBlock);   


buttonPlus.addEventListener('click',  appData.addIncomeBlock);   

start.setAttribute('disabled', '0');
total.addEventListener('input', () => {
    if(total.value !== ''){
        start.removeAttribute('disabled');
    }else {
        start.setAttribute('disabled', '0');}
});

function range(){

    periodSelect.addEventListener('input', function(){
        PeriodAamount.innerHTML = periodSelect.value;
    });
};

 range();




// console.log('за день', appData.budgetDay)
// if (appData.getTargetMonth() >= 0) {
//   console.log('Цель будет достигнута за: ' + appData.getTargetMonth() + ' месяца');
// } else {
//  console.log('Цель не будет достигнута');
// };

// console.log('Наша программа включает в себя данные:');
// for (let key in appData) {
//   console.log(key + ': ' + appData[key]);
// };