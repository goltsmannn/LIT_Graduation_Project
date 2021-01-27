"use strict";
let seen = false;
function scrollup(){
    if(window.pageYOffset>0){
        window.scrollBy(0,-80);
        setTimeout(scrollup, 15);
    }
}
window.addEventListener('scroll', function(){
    let a = document.documentElement.scrollHeight;
    let b = document.documentElement.clientHeight;
    let c = window.pageYOffset;
    if(c/(a-b)*100>40){
        toup.style.opacity = "1";
        seen = true;
    }
    else{
        seen = false;
        toup.style.opacity = "0";       
    }
});
toup.addEventListener('click', function(){
    if(seen){
        scrollup();
    }
});    