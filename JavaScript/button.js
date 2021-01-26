"use strict";
window.addEventListener('scroll', function(){
    let a = document.documentElement.scrollHeight;
    let b = document.documentElement.clientHeight;
    let c = window.pageYOffset;
    if(c/(a-b)*100>40){
        toup.style.opacity = "1";
    }
    else{
        toup.style.opacity = "0";       
    }
});
    