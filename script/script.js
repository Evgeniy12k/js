"use strict";
const sexyIncome = document.querySelectorAll("input.income-title"),
  sexyAmount = document.querySelectorAll("input.income-amount"),
  errorMsg = document.querySelector(".error-msg"),
  cancel = document.querySelector("#cancel"),
  income = document.querySelector(".income"),
  expenses = document.querySelector(".expenses"),
  //left part
  salaryAmount = document.querySelector(".salary-amount"),
  //!buttons+
  btnAdd = document.getElementsByTagName("button"),
  btnIncomeAdd = btnAdd[0],
  btnExpensesAdd = btnAdd[1],
  //!buttons+
  incomeTitle = document.querySelectorAll(".income-title"),
  expensesTitle = document.querySelector(".expenses-title"),
  additionalExpensesItem = document.querySelector(".additional_expenses-item"),
  additionalIncomeItem = document.querySelectorAll(".additional_income-item"),
  depositCheck = document.querySelector("#deposit-check"),
  depositBank = document.querySelector(".deposit-bank"),
  depositAmount = document.querySelector(".deposit-amount"),
  depositPercent = document.querySelector(".deposit-percent"), //!deposit
  targetAmount = document.querySelector(".target-amount"),
  rangePeriod = document.querySelector(".period-select"), //!range
  periodAmount = document.querySelector(".period-amount"), //!range
  //right part
  budgetDayValue = document.querySelector(".budget_day-value"),
  budgetMonthValue = document.querySelector(".budget_month-value"),
  expensesMonthValue = document.querySelector(".expenses_month-value"),
  additionalIncomeValue = document.querySelector(".additional_income-value"),
  additionalExpensesValue = document.querySelector(
    ".additional_expenses-value"
  ),
  incomePeriodValue = document.querySelector(".income_period-value"),
  targetMonthValue = document.querySelector(".target_month-value"),
  start = document.getElementById("start"),
  rusString = document.querySelectorAll('[placeholder="Наименование"]'),
  onlyNumbers = document.querySelectorAll('[placeholder="Сумма"]');

let incomeItems = document.querySelectorAll(".income-items"),
  expensesItems = document.querySelectorAll(".expenses-items");

//!My_object
class AppData {
  constructor() {
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
  }
  start() {
    if (salaryAmount.value === "") {
      errorMsg.textContent =
        'Ошибка, поле "Месячный доход должно быть заполненно!';
      errorMsg.style.display = "block";
      onlyNumbers[0].style.borderWidth = "2px";
      onlyNumbers[0].style.borderColor = "red";
      return;
    }

    if (
      depositPercent.style.display === "inline-block" &&
      depositPercent.value === "" || depositPercent.value > 100 
    ) {
      errorMsg.textContent = "Введите корректное значение в поле проценты";
      errorMsg.style.display = "block";
      return;
    }

    this.budget = +salaryAmount.value;
    this.getExpenses();
    this.getExpensesMonth();
    this.getIncome();
    this.getAddExpenses();
    this.getAddIncome();
    this.depositHandler();
    this.getInfoDeposit();
    this.getBudget();
    this.showResults();
    this.limbo();
  }
  limbo() {
    document.querySelectorAll(".data input[type=text]").forEach((item) => {
      item.disabled = true;
    });
    btnIncomeAdd.setAttribute("disabled", "disabled");
    btnExpensesAdd.setAttribute("disabled", "disabled");
    start.style.display = "none";
    cancel.style.display = "block";
  }
  reset() {
    start.style.display = "block";
    cancel.style.display = "none";
    btnIncomeAdd.removeAttribute("disabled");
    btnExpensesAdd.removeAttribute("disabled");
    btnIncomeAdd.style.display = "block";
    btnExpensesAdd.style.display = "block";
    periodAmount.textContent = 1;
    rangePeriod.value = 1;
    if (depositCheck.checked) {
      depositCheck.checked = depositCheck.unchecked;
    }
    depositBank.value = "";
    depositBank.style.display = "none";
    depositAmount.style.display = "none";
    depositPercent.style.display = "none";
    document.querySelectorAll("input[type=text]").forEach((item) => {
      item.disabled = false;
      item.value = "";
    });
    for (let i = 1; i < incomeItems.length; i++) {
      incomeItems[i].remove();
    }
    for (let i = 1; i < expensesItems.length; i++) {
      expensesItems[i].remove();
    }
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.budgetDeposit = 0;
  }
  showResults() {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.ceil(this.budgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(", ");
    additionalIncomeValue.value = this.addIncome.join(", ");
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();
  }
  addIncomeBlock() {
    const cloneIncomeItem = incomeItems[0].cloneNode(true);

    cloneIncomeItem.children[0].value = "";
    cloneIncomeItem.children[0].style.borderColor = "#ff7f63";
    cloneIncomeItem.children[0].style.borderWidth = "1px";
    cloneIncomeItem.children[1].value = "";
    cloneIncomeItem.children[1].style.borderColor = "#ff7f63";
    cloneIncomeItem.children[1].style.borderWidth = "1px";
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, btnIncomeAdd);
    incomeItems = document.querySelectorAll(".income-items");

    cloneIncomeItem.children[0].addEventListener("input", () => {
      AppData.prototype.notify();
      cloneIncomeItem.children[0].value = cloneIncomeItem.children[0].value.replace(
        /[^а-я + А-Я + '' + ',']/,
        ""
      );
    });

    cloneIncomeItem.children[1].addEventListener("input", () => {
      cloneIncomeItem.children[1].value = cloneIncomeItem.children[1].value.replace(
        /[^0-9]/,
        ""
      );
      AppData.prototype.notify();
    });
    if (incomeItems.length === 3) {
      btnIncomeAdd.style.display = "none";
    }
  }
  addExpensesBlock() {
    const cloneExpensesItem = expensesItems[0].cloneNode(true);
    cloneExpensesItem.children[0].value = "";
    cloneExpensesItem.children[1].value = "";
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btnExpensesAdd);
    expensesItems = document.querySelectorAll(".expenses-items");

    cloneExpensesItem.children[0].addEventListener("input", () => {
      cloneExpensesItem.children[0].value = cloneExpensesItem.children[0].value.replace(
        /[^а-я + А-Я + '' + ',']/,
        ""
      );
      AppData.prototype.notify();
    });

    cloneExpensesItem.children[1].addEventListener("input", () => {
      cloneExpensesItem.children[1].value = cloneExpensesItem.children[1].value.replace(
        /[^0-9]/,
        ""
      );
    });

    if (expensesItems.length === 3) {
      btnExpensesAdd.style.display = "none";
    }
  }
  getIncome() {
    const _this = this;
    incomeItems.forEach((items) => {
      const itemIncome = items.querySelector(".income-title").value,
        cashIncome = items.querySelector(".income-amount").value;
      if (itemIncome !== "" && cashIncome !== "") {
        this.income[itemIncome] = cashIncome;
      }
    });
    for (const key in _this.income) {
      this.incomeMonth += +this.income[key];
    }
  }
  getExpenses() {
    expensesItems.forEach((items) => {
      const itemExpenses = items.querySelector(".expenses-title").value,
        cashExpenses = items.querySelector(".expenses-amount").value;
      if (itemExpenses !== "" && cashExpenses !== "") {
        this.expenses[itemExpenses] = cashExpenses;
      }
    });
  }
  getExpensesMonth() {
    for (const exp in this.expenses) {
      this.expensesMonth += +this.expenses[exp];
    }
  }
  getAddExpenses() {
    const addExpenses = additionalExpensesItem.value.split(",");
    addExpenses.forEach((item) => {
      item = item.trim();
      if (item !== "") {
        this.addExpenses.push(item);
      }
    });
  }
  getAddIncome() {
    additionalIncomeItem.forEach((item) => {
      const itemValue = item.value.trim();
      if (itemValue !== "") {
        this.addIncome.push(itemValue);
      }
    });
  }

  getBudget() {
    console.log(this.moneyDeposit);
    console.log(this.percentDeposit);
    const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);
    console.log(monthDeposit);
    this.budgetMonth =
      this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  }

  getTargetMonth() {
    return Math.ceil(targetAmount.value / this.budgetMonth);
  }
  // getStatusIncome =  function () {
  //   if (appData.budgetDay >= 1200) {
  //     return "У вас высокий уровень дохода!";
  //   } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
  //     return "У вас средний уровень дохода";
  //   } else if (appData.budgetDay < 600 && appData.budgetDay > 0) {
  //     return "К сожалению у вас уровень дохода ниже среднего";
  //   } else {
  //     return "Что то пошло не так";
  //   }
  // },
  calcPeriod() {
    return this.budgetMonth * rangePeriod.value;
  }

  notify() {
    const sexyIncome = document.querySelectorAll("input.income-title"),
      sexyAmount = document.querySelectorAll("input.income-amount");
    for (let x = 0; x < sexyAmount.length; x++) {
      if ((sexyAmount[x].value === "") & (sexyIncome[x].value !== "")) {
        sexyAmount[x].style.borderColor = "red";
        sexyAmount[x].style.borderWidth = "2px";
      } else {
        sexyAmount[x].style.borderColor = "#ff7f63";
        sexyAmount[x].style.borderWidth = "1px";
      }

      if ((sexyIncome[x].value === "") & (sexyAmount[x].value !== "")) {
        sexyIncome[x].style.borderColor = "red";
        sexyIncome[x].style.borderWidth = "2px";
      } else {
        sexyIncome[x].style.borderColor = "#ff7f63";
        sexyIncome[x].style.borderWidth = "1px";
      }
    }
  }

  getInfoDeposit() {
    if (this.deposit) {
      this.percentDeposit = depositPercent.value;
      this.moneyDeposit = depositAmount.value;
    }
    // if (appData.deposit) {
    //   do {
    //     appData.percentDeposit = prompt("Какой годовой процент?", "3");
    //   } while (
    //     appData.percentDeposit === null ||
    //     appData.percentDeposit.trim() === "" ||
    //     isNaN(appData.percentDeposit)
    //   );
    //   appData.percentDeposit = parseInt(appData.percentDeposit);
    //   do {
    //     appData.budgetDeposit = prompt("Какая сумма заложена?", "10000");
    //   } while (
    //     appData.budgetDeposit === null ||
    //     appData.budgetDeposit.trim() === "" ||
    //     isNaN(appData.budgetDeposit)
    //   );
    //   appData.budgetDeposit = parseInt(appData.budgetDeposit);
    // }
  }

  depositHandler() {
    if (depositCheck.checked) {
      depositBank.style.display = "inline-block";
      depositAmount.style.display = "inline-block";
      this.deposit = true;
      depositBank.addEventListener("change", function () {
        let valueSelect = this.value;

        if (valueSelect === "other") {
          depositPercent.style.display = "inline-block";
          depositPercent.value = "";
          depositPercent.addEventListener("input", () => {
            depositPercent.value = depositPercent.value.replace(/[^0-9]/, "");
            if (depositPercent.value <= 100) {
              errorMsg.style.display = "none";
              valueSelect = depositPercent.value;
              console.log(valueSelect);
            }
          });
          
        } else {
          depositPercent.value = valueSelect;
          console.log(valueSelect);
          depositPercent.style.display = "none";
        }
      });
    } else {
      this.deposit = false;
      depositBank.style.display = "none";
      depositAmount.style.display = "none";
      depositPercent.style.display = 'none';
      depositBank.value = "";
      depositAmount.value = "";
      depositPercent.value = "";
      depositBank.removeEventListener("change", function () {});
    }
  }

  eventsListeners() {
    const _this = this;

    onlyNumbers[0].addEventListener("input", () => {
      if (salaryAmount.value !== "") {
        errorMsg.style.display = "none";
        onlyNumbers[0].style.borderWidth = "1px";
        onlyNumbers[0].style.borderColor = "#ff7f63";
      }
    });

    start.addEventListener("click", AppData.prototype.start.bind(_this));
    cancel.addEventListener("click", AppData.prototype.reset.bind(_this));

    btnExpensesAdd.addEventListener("click", this.addExpensesBlock);
    btnIncomeAdd.addEventListener("click", this.addIncomeBlock);

    for (const x of rusString) {
      x.addEventListener("input", () => {
        x.value = x.value.replace(/[^а-я + А-Я + '' + ',']/, "");
        AppData.prototype.notify();
      });
    }
    for (const x of onlyNumbers) {
      x.addEventListener("input", () => {
        x.value = x.value.replace(/[^0-9]/, "");
        AppData.prototype.notify();
      });
    }

    rangePeriod.addEventListener(
      "input",
      () => (periodAmount.textContent = rangePeriod.value)
    );

    rangePeriod.addEventListener("input", () => {
      incomePeriodValue.value = this.calcPeriod();
    });

    depositCheck.addEventListener("change", this.depositHandler);
  }
}

//!new appData from constructor
const calc = new AppData();
calc.eventsListeners();
