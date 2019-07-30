
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
});