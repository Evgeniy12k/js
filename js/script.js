window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    
    // timer
    function countTimer(deadline){
        let period = setInterval(updateClock, 1000);
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');
            
    //    вычисление даты: часы, минуты, секунды
            function getTimeRemaining(){
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60 ),
                hours = Math.floor(timeRemaining / 60 / 60); 
                return {timeRemaining, hours,  minutes, seconds};
        }
        
          function updateClock (){
            let timer = (getTimeRemaining());
            // дописываем ноль в начало цифры
            function newFormat (n){
                if (n < 10){
                    return '0' + n;
                }else {
                    return n;
                }
            }
    
            if (timer.timeRemaining > 0){
                timerHours.textContent = newFormat(timer.hours);
                timerMinutes.textContent = newFormat(timer.minutes);
                timerSeconds.textContent =newFormat(timer.seconds);
            }
           
            if (timer.timeRemaining < 0){
                clearInterval(period, 1000);
                      
                    timerHours.textContent = '00';
                    timerMinutes.textContent = '00';
                    timerSeconds.textContent = '00';
            }
          
          };
          updateClock();
       
    }
    
     countTimer('11 november 2020');
    
    
    
    // menu
    const toggleMenu = () =>{
        const btnMenu = document.querySelector('.menu'),
                menu = document.querySelector('menu'),
                closeBtn = document.querySelector('.close-btn'),
                body = document.querySelector('body'),
                menuItems = menu.querySelectorAll('ul>li>a');
    // функция для закрытия Меню
    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
        
    };   
    
    body.addEventListener('click', event => {
        let target = event.target;
       
           let closeMenuBtn = event.target;
            target = target.closest('.menu');
            if(target){
                handlerMenu();
            } else if (closeMenuBtn.classList.contains('close-btn')){
                handlerMenu();
           }else if(closeMenuBtn.classList.contains('ul>li>a')){
                handlerMenu();
            }
    
    });
    
    
     
    menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu ));
    
    
    
    };
    
    toggleMenu();
    
    // popup
    
    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn');
        let popupContent = document.querySelector('.popup-content');
    // все кнопки
        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
            //    проверяем если Ширина больше
                if(window.innerWidth > 768){
                    popupContent.style.opacity = '0'; 
                    let n = 0;
                    const timer = setInterval(() => { 
                        n += 0.1;
                        popupContent.style.opacity = `${n}`;
            //  останавливаем таймер
                        if (popupContent.style.opacity === '1') {
                            clearInterval(timer);
                        }
    
                    }, 40);
                    popup.style.display = 'block';
                }else{
                    popup.style.display = 'block';
                    popupContent.style.opacity = '1';
                }
            });
        }); 
    
        popup.addEventListener('click', (event) => {
            let target = event.target;
    
            if(target.classList.contains('popup-close')){
                if(window.innerWidth > 768){
                    popupContent.style.opacity = '1';
                    let n = 1;
                    const timer = setInterval(() => {
                        n-= 0.1;
                        popupContent.style.opacity = `${n}`;
    
                        if (popupContent.style.opacity === '-0.1') {
                            popup.style.display = 'none';
                            clearInterval(timer);
                        }
    
                    }, 40);
                    
                }else{
                    popup.style.display = 'none';
                }
            }else {
                target = target.closest('.popup-content');
                if(!target){
                    popup.style.display = 'none';
                }
            }
        });
        popup.addEventListener('click', (event) => {
            let target = event.target;
    
            if (target.classList.contains('popup-content')){
                popup.style.display = 'none';
    
            } else {
                target = target.closest('.popup-content');
    
                if(!target){
                    popup.style.display = 'none';
                };
    
            };  
           
        });
    };
    togglePopUp();
    
    //tab
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
              tab = tabHeader.querySelectorAll('.service-header-tab'),
              tabContent = document.querySelectorAll('.service-tab');
    
        const toggleTabContent = (index) => {
            for(let i = 0; i < tabContent.length; i++ ){
                if (index === i){
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');// удаляем невидимость класс
                }else{
                     tab[i].classList.remove('active');//скрываем активный класс
                    tabContent[i].classList.add('d-none');
                    
                }
            }
        };
    // событие для элемента родителя
              tabHeader.addEventListener('click', (event) => {
                let target = event.target; 
           
                target = target.closest('.service-header-tab');
                
    
                    
                    if (target){
                       
                        tab.forEach((item, i)  => {
                            if (item === target){
                                toggleTabContent(i);
                            }
                        });
                        
                     }
                    
    
                  
                });      
    };
    tabs();
   
    
    //  слайдер
      const slider =  () => {
    
                    const slide = document.querySelectorAll('.portfolio-item'),
                        slider = document.querySelector('.portfolio-content');
                    let ulDots = document.querySelector('.portfolio-dots');
                
                    for (let i = 0; i < slide.length; i++) {
                        const dot = document.createElement("li");
                        if (i === 0) {
                            dot.classList.add("dot-active");
                        }
                        dot.classList.add("dot");
                        ulDots.append(dot);
                    }
                    
                const dot = document.querySelectorAll('.dot');
    
                let currentSlide = 0,
                    interval;
    
                const prevSlide = (elem, index, strClass) => {
                    elem[index].classList.remove(strClass);
                };
    
                const nextSlide = (elem, index, strClass) => {
                    elem[index].classList.add(strClass);
                };
    
                const autoPlaySlide = () => {
    
                    prevSlide(slide, currentSlide, 'portfolio-item-active');
                    prevSlide(dot, currentSlide, 'dot-active');
                    currentSlide++;
                    if(currentSlide >= slide.length){
                        currentSlide = 0;
                    }
                    nextSlide(slide, currentSlide, 'portfolio-item-active');
                    nextSlide(dot, currentSlide, 'dot-active');
                };
    
                const startSlide = (time = 3000) => {
                    interval = setInterval(autoPlaySlide, time);
                };
    
                const stopSlide = () => {
                    clearInterval(interval);
                };
    
                slider.addEventListener('click', (event) => {
                    event.preventDefault();
    
                    let target = event.target;
    
                    if(!target.matches('.portfolio-btn, .dot')){
                        return;
                    }
                    
                    prevSlide(slide, currentSlide, 'portfolio-item-active');
                    prevSlide(dot, currentSlide, 'dot-active');
    
                    if(target.matches('#arrow-right')){
                        currentSlide++;
                    }else if(target.matches('#arrow-left')){
                        currentSlide--;
                    } else if(target.matches('.dot')){
                        dot.forEach((elem, index) => { //здесь элементом выступают точки
                            if(elem === target){
                                currentSlide = index;
                            }
                        });
                    }
    
                    if(currentSlide >= slide.length) {
                        currentSlide = 0;
                    }
    
                    if(currentSlide < 0){
                        currentSlide = slide.length -1; 
                        //длинна массива больше на единцу, чем индекс последнего элемента.
                        //для этого мы вычитаем единицу 
                    }
                    nextSlide(slide, currentSlide, 'portfolio-item-active');
                    nextSlide(dot, currentSlide, 'dot-active');
    
                });
    
                slider.addEventListener('mouseover', (event) => {
                    if(event.target.matches('.portfolio-btn') || 
                        event.target.matches('.dot')){
                            stopSlide();
                        }
                });
    
                slider.addEventListener('mouseleave', (event) => {
                    if(event.target.matches('.portfolio-btn') || 
                        event.target.matches('.dot')){
                            startSlide();
                        }
                });
    
                startSlide(1500);
    
                };
                slider();
    
    
                
    
                //ввод только чисел в калькуляторе
    
            document.addEventListener('input', (event) =>{
                if(event.target.matches('.calc-item ')){
                    event.target.value = event.target.value.replace(/\D/g, '');
                }
            });
    
    
            // Работа с изображениями. Смена аватарки 
    
            const command = document.querySelector('#command');
    
            const toggleImg = event => {
                const target = event.target;
            
                if (target.matches('img')) {
                    let a = target.src,
                        b = target.dataset.img;
              
                    target.dataset.img= a;
                    target.src= b;
                }
            }
            
            command.addEventListener('mouseover', toggleImg);
            command.addEventListener('mouseout', toggleImg);
    
      
   

        // создание калькулятора. 

const calc = (price = 100) => {

 const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcDay = document.querySelector('.calc-day'),
        calcCount = document.querySelector('.calc-count'),
        totalValue = document.getElementById('total');

const countSum = () => {
    let total = 0,
       countValue = 1,
       dayValue = 1;


    const typeValue = calcType.options[calcType.selectedIndex].value;

    let squareValue = +calcSquare.value;


    if (calcCount.value > 1){

        countValue +=(calcCount.value - 1)/10;

    }
    if(calcDay.value && calcDay.value < 5){
        dayValue *= 2;
    } else if (calcDay.value && calcDay.value < 10){
        dayValue *= 1.5;
    }


    if (typeValue && squareValue){

        total = price * typeValue * squareValue * countValue * dayValue;

    }

    totalValue.textContent = Math.floor(total);
};

    calcBlock.addEventListener('change', (event) => {

        const target = event.target;
// события которые происходят со всеми элементами 
     if(target.matches('select') || target.matches('input')) {
                    countSum();
                }


});

 

};

calc(100);

// работа с формой

// set-ajax-form

const sendForm = () => {

    const errorMessage = 'Что-то пошло  не так',
          loadMessage = 'Загрузка',
          successMessage = ' мы скоро с вами свяжемся';
    const form = document.querySelectorAll('form');
    const input = document.querySelectorAll('input');

// обработчик события для кнопки форм
for(let i = 0; i < form.length; i++) {
    form[i].addEventListener('submit', (event) =>{
        event.preventDefault();
      form[i].appendChild(statusMessage);//добавление элемента
//  статут загрузки 
        statusMessage.textContent = loadMessage;
// запрос к серверу
        
        const formData = new FormData(this);
       
        let body = {};
        // for (let val of formData.entries()){
        //     body[val[0]] = val[1];
        // }

        formData.forEach((val, key) => {
            body[key] = val;
        });
        // 
        postData(body, () =>{
            statusMessage.textContent = successMessage;
        //    очищаем все input 
            input.forEach((elem) => {
                elem.value = "";
                });
        }, (error) =>{
            statusMessage.textContent = errorMessage;
        console.error(error);
         });
    });
}

// проверяем строки Input на правильный ввод текста
    document.addEventListener('input', (event) => {
        let target = event.target;
        if(target.matches('.form-name') || target.matches('.mess') || target.matches('.top-form-name')){
            target.value = target.value.replace(/[^А-Яа-яЁе ]/gi, '');
        }
    });
// проверяем строки Input на правильный ввод числа
    document.addEventListener('input', (event) => {
        let target = event.target;
        if(target.matches('.form-phone')){
            target.value = target.value.replace(/[^+0-9]/gi, '');
        }
    });

    const statusMessage = document.createElement('div'); 
    statusMessage.style.cssText = 'color: red';
    
    const postData = (body, outputData, errorData) => {
        const request = new XMLHttpRequest;

        request.addEventListener('readystatechange', () => {
           
    // проверка статуса
            if(request.readyState !== 4) {
                return;// выход из функции
            }
            if(request.status === 200) {
                outputData();
            }else {
                errorData(request.status);
            }
    
            });

// настройка соединения
        request.open('POST', './server.php');
// настрока заголовка
        request.setRequestHeader('Content-Type', 'application/json');
         
// получение данных 
      
// при работе с Json формате
         request.send(JSON.stringify(body));
    }

};

sendForm();

});    
  



