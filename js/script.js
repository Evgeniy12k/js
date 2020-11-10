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
            menuItems = menu.querySelectorAll('ul>li');
// функция для закрытия Меню
const handlerMenu = () => {
    menu.classList.toggle('active-menu');
    
};   

body.addEventListener('click', event => {
    let target = event.target;
    console.log(target);
       let closeMenuBtn = event.target;
        target = target.closest('.menu');
        if(target){
            handlerMenu();
        } else if (closeMenuBtn.classList.contains('close-btn')){
            handlerMenu();
        }else if(closeMenuBtn.contains('ul>li')){
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
});

//  слайдер
 const slider = () => {
      const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            slider = document.querySelector('.portfolio-content');

        // добавляем элементы. Создаем список по кол-ву слайдов
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

        // переменная
    let  currentSlide = 0,
            interval;
    // удаляем активный слайд
    const prevSlide = (elem, index, strClass ) => {
        elem[index].classList.remove(strClass);
    };
    //добав. к след активность  
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };



    const autoPlaySlider = () =>{
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active' );
        currentSlide++;
        //зацикливание слайдов
        if (currentSlide >= slide.length){
            currentSlide = 0;
        }



       nextSlide(slide, currentSlide, 'portfolio-item-active');
       nextSlide(dot, currentSlide, 'dot-active');

    };
    const startSlider = (time = 2000) =>{
       interval = setInterval(autoPlaySlider, time);
    };

    const stopSlider = () =>{
        clearInterval(interval);
    };
        slider.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            // ограничение  на срабатывание вне элемента
            if(!target.matches('.portfolio-btn, .dot')){
                return;
            }
            
            
            // сначала удаляем активный элемент
            
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active' );

            if (target.matches('#arrow-right')){
                currentSlide ++;
                    
            }else if (target.matches('#arrow-left')){
                currentSlide --;
                // нажатие на точку
            }else if (target.matches('.dot')){
                dot.forEach ((elem, index) =>{
                    if (elem === target){
                        currentSlide = index;
                    }
                });
            }

            if(currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if(currentSlide < 0){
                currentSlide = slide.length - 1; 
                
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
                
        });

        slider.addEventListener('mouseover', (event) => {
            if(event.target.matches('.portfolio-btn') || 
                event.target.matches('.dot')){
                    stopSlider();
                }
        });


        slider.addEventListener('mouseout', (event) => {
            if(event.target.matches('.portfolio-btn') || 
                event.target.matches('.dot')){
                    startSlider();
                }
        });

        startSlider(10000);

 };
 slider();






      


