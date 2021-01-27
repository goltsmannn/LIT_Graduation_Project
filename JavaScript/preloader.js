"use strict";
function midLoad(){
    let semiseconds = 0;
    let prel = setInterval(function(){
        if(semiseconds==4){
            clearInterval(prel);
        }
        else{
            loader.classList.toggle("ended");
            loader.classList.toggle("beginning");
        }
        semiseconds++;
},500);
};
function rgbLoader(){
    let rgb = 125;
    let rgbphone= setInterval(function(){
        if(rgb == 255){
            clearInterval(rgbphone);
        }
        else{
            preloader.style.backgroundColor = "rgb(125," + rgb + ",255)";
            rgb+=1;
        }
    }, 19 );
};
function timeOut(){
    let mytimer = setTimeout(function(){
        loader.classList.add("hidden");
        preloader.classList.add("hidden");
    }, 2490);
};
function webStart(){
    rgbLoader();
    timeOut();
    midLoad();
};
webStart();
let menu = document.querySelectorAll("smallmenu");
menu.forEach(function(element){
    element.addEventListener('click', function(){
        rgbLoader();
        timeOut();
        midLoad();
    });
});
