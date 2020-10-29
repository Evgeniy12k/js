'use strict';
// кнопка Рассчитать
let start = document.getElementById('start');
// кнопка отмена
let cancel = document.getElementById('cancel');
 // Кнопки +
 let buttonPlus = document.getElementsByTagName('button')[0];
 let buttonPlusTo = document.getElementsByTagName('button')[1];
// checkbox
let checkbox = document.querySelectorAll('.deposit-checkmark')[0];


// возможных доходов
 let possib = document.querySelectorAll('.additional_income-item')[0];
 let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
// бюджет
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesItem = document.getElementsByClassName('additional_income-item')[0];
let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
 let target = document.getElementsByClassName('expenses_month-value')[0];
 let ferst = document.querySelector('[class="income-title"]');
 let incomeItems = document.querySelectorAll('.income-items');
 let second = document.querySelector('input.income-title');
 let sumsecond = document.querySelector('.additional_income-item');
 let third = document.querySelector('input.income-title');
 let sumthird = document.querySelector('input.additional_income-item');
 let periodSelect = document.querySelector('.period-select');
 let  periodAamount = document.querySelector('.period-amount');
 let targetAmount = document.querySelector('input.target-amount');
 let total = document.querySelector('input.salary-amount');
 let fourth = document.querySelector('input.expenses-title');
 let expensesItems = document.querySelectorAll('.expenses-items');

// проверяет является ли числом
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};
// соаздание объекта  appData
const  AppData = function () {
     this.income =  {};
     this.incomeMonth = 0;
     this.addIncome = [];
     this.expenses = {};
     this.addExpenses = [];
     this.deposit = false;
     this.persentDeposit =  0;
     this.moneyDeposit =  0;
     this.budget =  0;
     this.budgetDay =  0;
     this.budgetMonth =  0;
     this.expensesMonth =  0;
    };    
    
    AppData.prototype.start  = function () {
       
// присваиваем бюджет
if (total.value ===''){
    alert('Ошибка.  Введите месячный доход');
    return;
}

cancel.addEventListener('click', function () {
// находим все Input
    document.querySelectorAll('.data input[type = text]').forEach(function(item){
        item.disabled = false; //отключаем ввод данных Названия
        item.value = '';
        periodSelect.value = '0';
        periodAamount.innerHTML = periodSelect.value;
    });

    document.querySelectorAll('.result input[type = text]').forEach(function(item) {
        item.disabled = false; //отключаем ввод данных Сумма
        item.value = '';
    });

    start.style.display = 'block';//активна кнопка рассчитать
    cancel.style.display = 'none';// неактивна кнопка Сбросить

    for (let i = 1; i < incomeItems.length; i++) {
        incomeItems[i].remove();
        buttonPlus.style.display = 'block';
    }
    for (let i = 1; i < expensesItems.length; i++) {
        expensesItems[i].remove();
        buttonPlusTo.style.display = 'block';
    }

    start.disabled = true;
    total.addEventListener('input', () => {
        start.disabled = total.value.trim() === '';
    });
});

            this.budget = +total.value;
            this.getBurget();
            this.getExpenses();
            this.getAddExpenses();
            this.getAddIncome();
         
            this.getExpensesMonth();

      
            this.showResult();
            this.blocked();
        },

    // новый метод для присваивания значений в форму
    AppData.prototype.showResult = function () { 
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetAmount.value = Math.ceil(this.getTargetMonth());
        // incomePeriodValue.value = appData.calcPeriod();
        periodSelect.addEventListener('input', () => {
            incomePeriodValue.value = this.calcPeriod();
        });
    },
 
// оключение кнопки Рассчитать и включение кнопки Сбросить
AppData.prototype.blocked = function () {
    document.querySelectorAll('.data input[type=text]').forEach(function (item) {
        item.disabled = true;
    });
    start.style.display = 'none'; //скрывает кнопку
    cancel.style.display = 'block';//показывает кнопку
};



AppData.prototype.addIncomeBlock = function(){
    
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
          incomeItems[0].parentNode.insertBefore(cloneIncomeItem, buttonPlus);
          incomeItems = document.querySelectorAll('.income-items');
            if (incomeItems.length === 2){
                buttonPlus.style.display = 'none'; 
            }
     },

// метод добавления полей(кнопка + обязательные доходы)

AppData.prototype.addExpensesBlock = function(){
      
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
          expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonPlusTo);
          expensesItems = document.querySelectorAll('.expenses-items');
            if (expensesItems.length === 3){
            buttonPlusTo.style.display = 'none'; 
        }
 },
 AppData.prototype.getExpenses = function(){
    expensesItems.forEach(function(item){
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
    
    if (itemExpenses !== '' && cashExpenses !== ''){
        this.expenses[itemExpenses] = cashExpenses;

    }
});
 },

 AppData.prototype.getIncome = function(){
    // if (confirm('Есть ли у вас доп заработок?')){
    //             let itemIncome; 
    //              do {
    //                  itemIncome = prompt ('Какой у вас доп. доход');
    //                } while (!isNaN(itemIncome));
    //              let cashIncome;
    //              do {
    //                 cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?',10000 );
                  
    //              } while (isNaN(parseFloat(cashIncome)));
    //              appData.income[itemIncome ] = cashIncome;
                 
    //         }

    //        
    //         }
    
    incomeItems.forEach(function(item){
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncomes = item.querySelector('.income-amount').value;
    
    if (itemIncome !== '' && cashIncomes !== ''){
        this.expenses[itemIncome] = cashIncomes;

    }
});
 },

 AppData.prototype.getAddExpenses = function(){
    let addExpenses = additionalExpensesItem.value.split(', ');
         addExpenses.forEach(function(item){
         item = item.trim();
        if (item !== ''){
            this.addExpenses.push(item);
         }
        

    });
 },

 AppData.prototype.getAddIncome = function(){
     additionalIncomeItem.forEach(function(item){
              let itemValue = item.value.trim();
     if (itemValue !== ''){
          this.addIncome.push(itemValue);
       }
      });
   },

 //   сумма расходов на месяц и день
 AppData.prototype.getExpensesMonth =  function() {
    for (let key in appData.expenses) {
        this.expensesMonth += +this.expenses[key];
    }
},

 

     


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
     
         // бюджет за месяц
         AppData.prototype.getBurget = function(){
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;          
        this.budgetDay = Math.floor(this.budgetMonth / 30);       
      },
     //  достижение цели
     AppData.prototype.getTargetMonth = function(){
         return targetAmount.value / this.budgetMonth;       
             }, 
             // Статус по доходам
             AppData.prototype.getStatusIncome = function(){
         if (this.budgetDay > 1200) {
            return('высокий доход');
           } else if (this.budgetDay>600 && this.budgetDay>1200){       
            return('средний доход');
           } else if(this.budgetDay < 600 && this.budgetDay>0 ){       
            return('средний доход');
           } else if (this.budgetDay === 1200){      
            return('высокий доход'); 
           } else if (this.budgetDay === 600){       
            return('средний доход'); 
           } else if (this.budgetDay === 0){      
            return('низкий доход'); 
           } else {      
            return('что-то пошло не так'); 
           }
        
      },   

      AppData.prototype.getInfoDeposit = function(){
     if (this.deposit) {
        
        
        do{
            this.persentDeposit = prompt('Какой годовой процент?','10');
        } while (isNaN(parseFloat(this.persentDeposit)));

        do{
            this.moneyDeposit = prompt('Какая сумма заложена?', '10000');
        } while (isNaN(parseFloat(this.moneyDeposit)));   
    }
},



   
AppData.prototype.calcPeriod = function(){
      return this.budgetMonth * periodSelect.value;
   }


 const appData = new AppData();
   
 AppData.prototype.eventsListeners = function () {
start.addEventListener('click', appData.start.bind(appData));

periodSelect.addEventListener('input', function(){
    periodAamount.innerHTML = periodSelect.value;
});


buttonPlusTo.addEventListener('click',  appData.addExpensesBlock);   
buttonPlus.addEventListener('click',  appData.addIncomeBlock);   

start.disabled = true;
total.addEventListener('input', () => {
    if(total.value !== ''){
        start.removeAttribute('disabled');
    }else {
        start.setAttribute('disabled', '0');}
});

   };

   appData.eventsListeners();


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