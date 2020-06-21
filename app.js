// chapter 21 to 25
// task 1
// var first = prompt("Enter your first name");
// var last = prompt("Enter your last name");
// var fullName = first + " "+last;
// alert(fullName);

// task 2
// var str = prompt("Enter you fvt mobile phone model.");
// document.write("My mobile phone is :"+" "+str+"<br>"+" Length of string :"+" "+str.length )

// task 3
// var str = "Pakistani";
// var n = str.indexOf("n");
// document.write("string :"+" "+str +"<br>");
// document.write("index of 'n' :"+" "+n)


// task4
// var str = "Hello World";
// var n = str.lastIndexOf("l");
// document.write("string :"+" "+str +"<br>");
// document.write("index of 'l' :"+" "+n)


// task 5
// var str = "Pakistani";
// var n = str.substring(3,4);
// document.write("string :"+" "+str +"<br>");
// document.write("Charachter of index 3 :"+" "+n)

// task 6
// var first = prompt("Enter your first name ");
// var last = prompt("Enter your last name ");
// var fullName = first.concat(last);
// alert(fullName);


// task 7

// var city = "hyderabad";
// var replace = city.replace("hyder","islam");
// document.write("city :"+" "+city+"<br>");
// document.write("After replacement :"+" "+replace)


//  task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace = message.replace("and","&");
// document.write("masage is :"+" "+message+"<br>");
// document.write("After replacement and  :"+" "+replace)


// task 9 
// var str = "472";
// var number = Number(str)
// document.write(str+" <br>"+"type :"+" "+"String" +"<br>");
// document.write(number+" <br>"+"type :"+" "+"Number")

// task 10
// var user = prompt("enter the input");
// var upper = user.toUpperCase();
// document.write("user input :"+ " " +user +"<br>");
// document.write("upper case :"+ " " +upper);

// task 11
// var user = prompt("enter the input");
// var sentence = user.toLowerCase().split(" ");
// for(var i = 0; i< sentence.length; i++){
//     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//  }
// document.write(sentence.join(" "));

// task 12

// var num = Number(35.36)
// var a='35.36';
// a=a.replace(".",'');
// document.write("Number :"+" "+num +"<br>")
// document.write("Result :"+" "+a)


// task13
// var userName = prompt("Enter Username","username is: ");
// var code;
// for (var i = 0; i<=userName.length; i++) {
//    code = userName.charCodeAt(i);
//    switch (code) {
//        case 33 :{
//            alert("plz Enter a valid user name");
//            break;
//        }
//        case 44 :{
//         alert("plz Enter a valid user name");
//         break;
//     }
//     case 46 :{
//         alert("plz Enter a valid user name");
//         break;
//     }
//     case 64 :{
//         alert("plz Enter a valid user name");
//         break;
//     }
           
          
//     }
    
// }


// Another method to solve the qyestion 13

// var getUsername = prompt("Enter your username");
// for (var i = 0; i < getUsername.length; i++) {
//      var char = getUsername.charCodeAt(i);
// if ( char == 33 || char == 64 || char == 44 || char ==46) {
// alert("not valid" );
// break;
// } else {
// alert("Valid");
// break;

// } 
// }

// task 14
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir / ma'am?");
// userInput = userInput.toLowerCase();
// for (var i = 0; i < arr.length; i++) {
//     if (userInput === arr[i]) {
//         document.write(userInput + " is <strong>available</strong> at index " + i + " in our bakery");
//         break
//     }
// }
// if (userInput !== arr[i]) {
//     document.write("We are sorry. " + userInput + " is <strong>not available</strong> in our bakery");
// }


// task 15
// var password, message;
//     var whileCounter = 0;
//     var CFAL = false;
//     while (whileCounter != 1) {
//         password = prompt("Enter Password");
//         if (password.length <= 5) {
//             alert("Must be 6 or more characters long");
//         }
//         else {
//             if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
//                 alert("Password cannot begin with a number\nPlease enter a valid password");
//             }
//             else {
//                 for (var i = 0; i <= password.length-1; i++) {
//                     if (password[i].charCodeAt() >= 48 && password[i].charCodeAt() <= 57) {
//                         CFAL = true;
//                         whileCounter = 1;
//                         break;
//                     }
//                     else {
//                         continue;
//                     }
//                 }
//                 if (CFAL == true) {
//                     whileCounter = 1;
//                     message = "Password is OK.";
//                 }
//                 else {
//                     whileCounter = 0;
//                     message = "Invalid Password!\nYou must enter both lettes and numbers in your password.";
//                 }
//                 alert(message);
//             }
//         }
//     }







// task16
// var university = "University of Karachi";
// document.write(university.split("").join("<br>"));

// task 17
// var userInput = prompt("Enter Your Word");
// document.write("User input: " + userInput + "<br>");
// userInput = userInput.split("").reverse();
// document.write("Last character of input: " + userInput.slice(0,1));


// task 18
// var text = "The quick brown fox jumps over the lazy dog";
// document.write("Text: " + text + "<br>");
// var text1 = text.toLowerCase();
// document.write("There are " + text1.match(/the/g).length + " occurence(s) of word 'the'");

// chapter 26-30
// task 1
// var number = prompt("enter the postive number");
// var round = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);
// document.write("number :"+" "+number +"<br>");
// document.write("rounf off the value"+" "+round +"<br>")
// document.write("floor value"+" "+floor +"<br>")
// document.write("ceil  value"+" "+ceil +"<br>")

// task 2
// var number = prompt("enter the negtive number");
// var float = Math.sign(number)

// var round = Math.round(number);
//  var floor = Math.floor(number);
// var ceil = Math.ceil(number);
// document.write("number :"+" "+number +"<br>");
// document.write("rounf off the value :"+" "+round +"<br>")
//  document.write("floor value"+" "+floor +"<br>")
//  document.write("ceil  value"+" "+ceil +"<br>")

// task 3
//var num = Math.abs(-4);
//document.write("The absolute value of -4 is"+" "+num +"<br>")

// task 4
// var dice = Math.random()*6;
// var floor= Math.floor(dice);
// var num = floor+1;
// alert(num)


// task 5
// var toss = Math.random()*2;
// var floor = Math.floor(toss);
// var num = floor+1;
// if (num ===1) {
//     document.write(num +"<br>"+"random coins value :Tails")

// }else{
//     document .write(num +"<br>"+"random coins value :head")
// }

// task 6
// var random = Math.random()*100;
// var floor= Math.floor(random);
// var num = floor+1;
// alert("random number between 1 and 100 :"+" "+num)


// task 7
// var user = prompt("Enter the user waight");
// alert("The weight of user is "+" "+user +" "+" Kilograms")


// task 8
// var secret = 9;
// var user = +prompt("enter the secret number between 1 to 10 ")
// if (secret ===user) {
//     alert("Congragulation");
    
// } else {
//     alert("try again")
    
// }

// chapter 31 to 34
//  task 1
// var time = new Date();
// alert(time)

// task 2
// var my_month=new Date();
// var month_name=new Array(12);
// month_name[0]="January"
// month_name[1]="February"
// month_name[2]="March"
// month_name[3]="April"
// month_name[4]="May"
// month_name[5]="June"
// month_name[6]="July"
// month_name[7]="August"
// month_name[8]="September"
// month_name[9]="October"
// month_name[10]="November"
// month_name[11]="December"
// alert ("Current month : " + month_name[my_month.getMonth()]); 


// task 3
// var my_day=new Date();
// var day_name=new Array(12);
// day_name[0]="sun"
// day_name[1]="Mun"
// day_name[2]="tue"
// day_name[3]="wed"
// day_name[4]="thu"
// day_name[5]="fri"
// day_name[6]="sat"


// alert (" Today is  " + day_name[my_day.getDay()]); 



// task4


//  var now = new Date();
//  var theDay = now.getDay();

//  if (theDay==0||theDay===6) {
//      alert("it's fun day")
//  }

//  task5
// var now =new Date();
// var date = now.getDate();
// if (date<=15) {
//     alert("first fifteen days of the month")
// } else {
//     alert("last days of the month")
// }



// task 6
// var time = new Date();
// var late = time.getTime();
// var minute = late/1000*60*60;
// document.write("Current date :"+" "+time+"<br>")
// document.write("Elapsed milliseconds since Jan. 1, 1970 : "+" "+late +"<br>")
// document.write("Elapsed minutes since Jan. 1, 1970 : "+" "+minute +"<br>")


// task 7

// var time = new Date();
// var hour = time.getHours();
// if (hour<=11) {
//     alert("It's AM")
// } else {
//     alert("It's PM")
// }



// task 8

// var firstdate = '11/01/2012';
// var lastdate = '12/31/2020';
// var date = new Date();
// date.setFullYear(14, 0, 1);
// var ld = Date.today().clearTime().moveToLastDayOfMonth();
// var lastday = ld.toString("12/31/2020");
// alert(lastday);


// task 9
// var date = new Date("jun 18,2015")
// var dateTime = date.getTime();
// var today = new Date();
// var total = today.getTime() ;
// var diff = total- dateTime;
// var days = diff/(1000*60*60*24);
// var ramzan = Math.floor(days);
// alert(ramzan  +" "+"days have passed since 1st Ramadan, 2015")

// task 10
// var date = new Date("dec 05,2015")
// var dateTime = date.getTime();
// var today = new Date();
// var total = today.getTime() ;
// var diff = total- dateTime;
// var days = diff/(1000);
// var ramzan = Math.floor(days);
// alert(ramzan  +" "+"days had passed since begining of 2015")


// task11
// var date = new Date();
// var hour = date.getHours()
//   date.setHours(hour -1)
 
// document.write("One hour ago :"+" "+date+"<br>");



// task12
// var date = new Date();
// var year = date.getFullYear();;
//  date.setFullYear(year -100)
 
// document.write("100 YEARS Back :"+" "+date+"<br>");





// task 13
// var birth =new Date( prompt("Enter your date of birth"));
// var birthmili = birth.getTime();
// var today = new Date();
// var total = today.getTime() ;
// var diff = total- birthmili;
// var average = Math.floor(diff/(1000*60*60*24*30*12))
// document.write(average);

// task 14
// var name = prompt("Customer Name")
// var my_month=new Date();
// var month_name=new Array(12);
// month_name[0]="January"
// month_name[1]="February"
// month_name[2]="March"
// month_name[3]="April"
// month_name[4]="May"
// month_name[5]="June"
// month_name[6]="July"
// month_name[7]="August"
// month_name[8]="September"
// month_name[9]="October"
// month_name[10]="November"
// month_name[11]="December";
// var unit = 410;
// var charges = 16;
// var last = 350;
// var netAmount = unit*charges;
// groosAmount = netAmount+last;  
// document.write(" Customer Name"+" "+name +"<br>")
// document.write("Current month : " +" "+month_name[my_month.getMonth()]+"<br>");
// document.write("Number of units"+" "+unit +"<br>")
// document.write("Charges per unit"+" "+charges +"<br>")
// document.write("Late Payment Surcharge"+" "+last +"<br>")
// document.write("Net Amount Payable (within Due Date)"+" "+netAmount +"<br>")
// document.write("  Gross Amount Payable (after Due Date)"+" "+groosAmount +"<br>")

// Chapter 35-38

// task 1
// function time(){
//     var date = new Date();
//     document.write(date)
// }
// time();


// Task2

//  function FullName(){
//      var firstName = prompt("Enter first name");
//      var lastName = prompt("Enter last name");
//     document.write(firstName+" "+lastName);
//  }
// FullName();

// task3
// function sum(){
//     var firstNum = +prompt("Enter first num");
//     var lastNum = +prompt("Enter second number");
//     var Totalsum = firstNum+lastNum;
//    document.write(Totalsum);
// }
// sum();

// task4
// function calcu(){
//     var num1 = +prompt("Enter first number");
//     var operator = prompt("Enter the sign");
//      var num2 = +prompt("Enter 2nd number");
//      if (operator ==="+") {
//          document.write(num1+num2)
         
//      }else if(operator ==="-"){
//              document.write(num1-num2);
//      }else if(operator ==="*"){
//         document.write(num1*num2);
//      }
//      else if(operator ==="/"){
//         document.write(num1/num2);
//      }
//       else {
//         document.write("Enter the valid value");
//      }
// }
// calcu();


// task5
// function square (){
// var num = +prompt("Enter the number");
// document.write(num*num);
// }
// square();

// task6
// function count(){
//     var firstNum = +prompt("Enter 1st number");
//     var secondNum = +prompt("Enter 2nd number");
//     for(i=firstNum;i<=secondNum;i++){
// document.write(i+"<br>")
//     }
// }
// count();

// task7

// function factorial(n){
//     var answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   var n = +prompt("Enter the factotial number");
//   answer = factorial(n)
//   document.write("The factorial of " + n + " is " + answer);


// task 8
// function Area(height = "12",width="13") {
//     document.write(height*width);
// }
// Area(12,12)


// task9
// function hypotenuse(base, perpendicular) {
//     function square(v1, v2) {
//         document.write("First value is: " + v1 + "<br>");
//         var v1Square = v1*v1;
//         document.write("Sqaure root of " + v1 + " is: " + v1Square + "<br><br>");
//         document.write("Second value is: " + v2 + "<br>");
//         var v2Square = v2*v2;
//         document.write("Sqaure root of " + v2 + " is: " + v2Square + "<br><br>");
//         var sqrt = v1*v1 + v2*v2;
//         document.write("Sum of " + v1Square + " and " + v2Square + " is " + sqrt + "<br><hr>");
//     }
//     square(base, perpendicular)
//     document.write("Hypotenuse: " + Math.hypot(base, perpendicular))
// }
// hypotenuse(+prompt("Enter Base"), +prompt("Enter Perpendicular"));


                // task10
                // function uppercase(str)
                // {
                //   var array1 = str.split(' ');
                //   var newarray1 = [];
                    
                //   for(var x = 0; x < array1.length; x++){
                //       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
                //   }
                //   return newarray1.join(' ');
                // }
                // document.write(uppercase("the quick brown fox"));
                

                // task11
//                 function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write("Example string : "+" "+"Web Development Tutorial"+"<br>")
// document.write("EXPECTED OUTPUT : "+" "+ find_longest_word('Web Development Tutorial'));


// task 12

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('w3resource.com', 'e'));

// task13
// function circum() {
//     var radius = +prompt("enter the radius")
//     var cirumf = 2*3.14*radius;
//     document.write("The circumference is "+" "+cirumf)
// }
// circum();
// function Area() {
//     var radius = +prompt("enter the radius")
//     var area = 3.14*radius*radius;
//     document.write("The circumference is "+" "+area)
// }
// Area();






