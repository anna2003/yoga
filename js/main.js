
window.addEventListener("DOMContentLoaded",function(){
    'use strict';
    let tabs = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabcontents = document.querySelectorAll('.info-tabcontent');
    
    function hideAll(index){
        for(let i = index, n = tabcontents.length; i < n; i++){
            tabcontents[i].classList.remove('show');
            tabcontents[i].classList.add('hide');
        }
    }
    hideAll(1);

    function showItem(index){
        if(tabcontents[index].classList.contains('hide')){
            tabcontents[index].classList.remove('hide');
            tabcontents[index].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            hideAll(0);
            for(let i = 0, n = tabs.length; i < n; i++ ){
                if(tabs[i] == target){
                    showItem(i);
                    break;
                }
            }
        }
    });
    
    let deadline = '2019-7-31';

    function getTimeRemaining(endTime){
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor(t / 1000 % 60),
            minutes = Math.floor(t / 1000 / 60 % 60),
            hours = Math.floor(t / 1000 / 3600);
        return {
            'seconds' : seconds,
            'minutes' : minutes,
            'hours' : hours,
            'total' : t
        };       
    }
    function setClock(id, endTime){
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock(){
            let t = getTimeRemaining(endTime);
            hours.textContent = t.hours > 9 ? t.hours: `0${t.hours}`;
            minutes.textContent = t.minutes > 9 ? t.minutes: `0${t.minutes}`;
            seconds.textContent = t.seconds> 9 ? t.seconds: `0${t.seconds}`;
            
            if(t.total <= 0){
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    };
    setClock('timer',deadline);

});