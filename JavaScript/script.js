"use strict";
var targets = ['maps','agents','cybersport','trainings'];
var string = "hidden";
var style = getComputedStyle(document.querySelector('.smallmenu'));
console.log(style);
targets.forEach(
    function(target){
    document.getElementById(target).addEventListener('mouseover', function(){
        string+=target;
        console.log(string);
        document.getElementById(string).classList.add('displayed');
        document.getElementById(string).classList.remove('notdisplayed');
        string = "hidden";
    });
    console.log(target);
    document.getElementById(string+target).addEventListener('mouseout', function(){
        string+=target;
        document.getElementById(string).classList.remove('displayed');
        document.getElementById(string).classList.add('notdisplayed'); 
        string = "hidden";
             
    });
});



