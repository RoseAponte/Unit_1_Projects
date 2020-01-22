/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Rose Aponte
   Date:  1-16-20 

*/
"use strict";

//variables
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
var mapNum = ((2*thisMonth + thisHour)%24);
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

//changing html code
document.getElementById("timeStamp").innerHTML = timeStr;
document.getElementById("planisphere").insertAdjacentHTML('afterbegin', imgStr);

