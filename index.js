function clock(){
 let date = new Date();
 let hour = date.getHours();
 let minute = date.getMinutes();
 let seconds = date.getSeconds();
 let dates = date.getDay();
 let day = date.getDate();
 let month = date.getMonth();
 let year = date.getFullYear();
 let timeform = "AM";

 if(hour === 0){
     hour = 12
 }
 if(hour > 12 ){
     hour = hour-12
     timeform ="PM"
     
 }
//  hour<10 || minute<10 || seconds<10
// hour = "0"+ hour
//     minute = "0" + minute
//     seconds = "0" + seconds
 if( hour<10 ){
    hour = "0"+ hour
 }
 if( minute<10 ){
    minute = "0" + minute
 }
 if( seconds<10){
    seconds = "0" + seconds
 }
 var dayName1 = "Saturday"
 var dayName2 = "Sunday"
 var dayName3 = "Monday"
 var dayName4 = "Tuesrday"
 var dayName5 = "Wednesday"
 var dayName6 = "Thursday"
 var dayName7 = "Friday"

 if(dates===0){
     dates = dayName2;
 }
 if(dates===1){
     dates = dayName3;
 }
 if(dates===2){
     dates = dayName4;
 }
 if(dates===3){
     dates = dayName5;
 }
 if(dates===4){
     dates = dayName6;
 }
 if(dates===5){
     dates = dayName7;
 }
 if(dates===6){
     dates = dayName1;
 }

 var month1 ="January"
 var month2 ="February"
 var month3 ="March"
 var month4 ="April"
 var month5 ="May"
 var month6 ="June"
 var month7 ="July"
 var month8 ="August"
 var month9 ="September"
 var month10 ="October"
 var month11 ="November"
 var month12 ="December"

 if(month===0){
     month = month1
 }
 if(month===1){
     month = month2
 }
 if(month===2){
     month = month3
 }
 if(month===3){
     month = month4
 }
 if(month===4){
     month = month5
 }
 if(month===5){
     month = month6
 }
 if(month===6){
     month = month7
 }
 if(month===7){
     month = month8
 }
 if(month===8){
     month = month9
 }
 if(month===9){
     month = month10
 }
 if(month===10){
     month = month11
 }
 if(month===11){
     month = month12
 }

//  let fulltime = [hour, minute, seconds];


 document.getElementById("hour").innerHTML = hour + ":";
 document.getElementById("minute").innerHTML = minute + ":";
 document.getElementById("seconds").innerHTML = seconds;
 document.getElementById("type").innerHTML = timeform;
 document.getElementById("dates").innerHTML = dates +" ,";
 document.getElementById("day").innerHTML = day +",";
 document.getElementById("month").innerHTML = month ;
 document.getElementById("year").innerHTML = year;

 setInterval(clock, 1000)
}
clock();