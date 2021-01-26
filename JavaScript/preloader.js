"use strict";
let semiseconds = 0;
let myInterval = setInterval(function(){
    if(semiseconds==4){
        clearInterval(myInterval);
    }
    else{
        loader.classList.toggle("ended");
        loader.classList.toggle("beginning");
    }
    semiseconds++;
},500);
let mytimer = setTimeout(function(){
    loader.classList.add("hidden");
    preloader.classList.add("hidden");
}, 2490);
