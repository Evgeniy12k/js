// // проверяет является ли числом.
// // принимает число и возвращаетс True или False/
// //  isFinite(n) определяет конечное ли число
//  let isNumber = function(n){
//     return !isNaN(parseFloat(n)) && isFinite(n);
//  };



// //     deposit = true, 


// // ждет от пользователя ответа(число)



// // let showTypeOf = function(item){
// //       console.log(item);
// //       };
// //       showTypeOf( money);
// //       showTypeOf( income);
// //       showTypeOf(deposit);

// let expenses1, expenses2;

// function getExpensesMonth(){
//    let sum  = 0;
//    let sum2;

//     for (let i = 0; i<2; i++){
//       //  проверяет первое условие
//        if (i===0){
//           expenses1 = prompt('Введите обязательную статью расходов?');
//       // проверяет второе условие
//       }if(i===1){
//           expenses2 = prompt('Введите обязательную статью расходов?','квартира' );
//       }
//       // ждет от пользователя правильного значения(число)
//     do{
//       sum2 = prompt('Во сколько это обойдется?')
//        }
//       //  проверяет является ли запрос числом
//     while ( !isNumber(sum2));
//          sum += +sum2;

//     }
//        console.log(sum2);
//    return sum;
// }

//  let expensesAmount = getExpensesMonth();
// console.log('обязательные расходы '+ expensesAmount);

// //  вычисляются расходы

// function getAccumulatedMonth( ){
//      return money - expensesAmount;
//    }
//  getAccumulatedMonth();
//    console.log( 'Накопления за месяц '+ getAccumulatedMonth());

//    //   определет достижение цели

// function getTargetMonth ( ){
//       return  Math.ceil(mission / getAccumulatedMonth());  
//     }
//  let targetMonth = getTargetMonth(mission / getAccumulatedMonth() );
//      if (targetMonth < 0 ){
//     console.log('Цель не будет достигнута ');
//    } else {
//     console.log('Цель  будет достигнута '+ targetMonth);
//    }