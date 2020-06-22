// Chapter 21-25
// task # 1
// var firstName = prompt("Enter First Name")
// var lastName = prompt("Enter Last Name")
// var fullName = firstName + lastName;
// alert("Hello "+fullName)

// task # 2
// var favorMob = prompt("Enter favourite mobile phone")
// var favorMob1 = favorMob.length;
// document.write("My favourite phone is: "+favorMob+"<br>Length of String: "+favorMob1)

// task # 3
// var str = "Pakistani";
// var str1 = str.indexOf("n")
// document.write("String: "+str+"<br>Index of 'n': "+str1)

// task # 4
// var word = "Hello World"
// var word1 = word.lastIndexOf("l")
// document.write("String: "+word+"<br>Last index of 'l': "+word1)

// task # 5
// var str = "Pakistani";
// var str1 = str.charAt(3)
// document.write("String: "+str+"<br>Character at index 3: "+str1)

// task # 6
// var firstName = prompt("Enter First Name")
// var lastName = prompt("Enter Last Name")
// var fullName = firstName.concat(lastName);
// alert("Hello "+fullName)

// task # 7
// var city ="Hyderabad";
// var city1 = city.replace("Hyder","Islam")
// document.write("City: "+city+"<br>After replacement: "+city1)

// task # 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var message1 = message.replace("and","&")
// document.write(message1)

// task # 9
// var str = "472";
// var num = Number(str);
// document.write("Value: "+str+"<br>Type: string"+"<br>Value: "+num+"<br>Type: number")

// task # 10
// var bisc = prompt("Enter a favourite biscuit name");
// var bisc1 = bisc.toUpperCase();
// document.write("User input: "+bisc+"<br>Upper case: "+bisc1);

// task # 11
// var bisc = prompt("Enter a favourite biscuit name");
// var bisc1 = bisc.slice(0,1);
// var bisc1 = bisc1.toUpperCase();
// var bisc2 = bisc.slice(1);
// var bisc2 = bisc2.toLowerCase()
// var bisc3 = bisc1 + bisc2;
// document.write("User input: "+bisc+"<br>Title case: "+bisc3);

// task # 12
// var d = 35.36;
// var s = d + "";
// s =s.replace('.', "");
// s = parseInt(s);
// alert(s);

// task # 13
// var specSym = prompt("Enter a ascii code")
// var specSym1 = specSym.charCodeAt(0);
// document.write("Ascii code of "+specSym+" is "+specSym1)

// task # 14
// var user = prompt("Welcome to My Bakery")
// var user2 = user.toLowerCase();
// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
// var n1 = bakery.indexOf(user2)
// var cityFlag = false;
// for(var i=0;  i < bakery.length; i++){
//     if(bakery[i] === user2){
//         document.write(user2+" is available at index "+n1+" in our bakery.")
//         cityFlag = true;
//         break;
//     }

// }
// if(cityFlag === false){
//     document.write("We are sorry. "+user2+ " is not available in our bakery.")}

// task # 16
// var array = "University of Karachi";
// var array2 = array.length;
// var array1 = array.split("");
// for (var i=0; i < array2; i++){
//     document.write(array1[i]+"<br>")
// }

// task # 17
// var user = "Pakistan";
// var user1 = user.indexOf("n");
// var user2 = user.charAt(user1)
// document.write("User input: "+user+"<br>Last character of input: "+user2)

// task # 18
// var text = "The quick brown fox jumps over the lazy dog";
// var text1 = text.toLowerCase();
// var text2 = text1.match(/the/g);
// var text3 = text2.length;
// document.write("Text: "+text+"<br>There are "+text3+" occurrence(s) of word 'the'")

// Chapter 26-30
// task # 1
// var num = Number(prompt("Enter a number"))
// var num1 = Math.round(num);
// var num2 = Math.floor(num);
// var num3 = Math.ceil(num);
// document.write("number: "+num+"<br>round off value: "+num1+"<br>floor value: "+num2+"<br>ceil value: "+num3)

// task # 2
// var num = Number(prompt("Enter a number"))
// var num1 = Math.round(num);
// var num2 = Math.floor(num);
// var num3 = Math.ceil(num);
// document.write("number: "+num+"<br>round off value: "+num1+"<br>floor value: "+num2+"<br>ceil value: "+num3)

// task # 3
// var val = +prompt("Enter a value")
// var val1 = Math.abs(val);
// document.write("The absolute value of "+val+" is "+val1)

// task # 4
// var dice = +prompt("Enter random dice value")
// dice = Math.round(Math.random()*6)+1;
// document.write("random dice value: "+dice)

// task # 5
// var coin = Math.round(Math.random()*1)+1;
// if(coin === 2){
//     document.write(coin+"<br>random coin value: Heads")
// }else{
//     document.write(coin+"<br>random coin value: Tails")
// }

// task # 6
// var random = Math.floor(Math.random()*100)+1;
// document.write("random number between 1 and 100: "+random)

// task # 7
// var weigh = Number(prompt("Enter your weight in kilogram"));
// document.write("The weight of user is "+weigh+" kilograms")

// task # 8
// var random = +prompt("Enter a number between 1 to 10")
// if (random <= 10 && random >= 1){
//     alert("Congratulation!")
// }else{
//     alert("Try again!")
// }

// Chapter 31-34
// task # 1
// var date = new Date();
// document.write(date)

// task # 2
// var date = new Date();
// var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var date1 = months[date.getMonth()];
// alert("Current month: "+date1)

// task # 3
// var date = new Date();
// var day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// var day1 = day[date.getDay()];
// alert("Today is "+day1)

// task # 4
// var date = new Date();
// var day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// var day1 = day[date.getDay()];
// if(day1 === "Sun" || day1 === "Sat"){
//     alert("It's Fun day")
//     }else{
//         alert("It's a working day")
//     }

// task # 5
// var date = new Date();
// console.log(date)
// var date1 = date.getDate();
// console.log(date1)
// if(date1 <= 15 && date1 >= 1){
//     document.write("First fifteen days of the month")
// }else{
//     document.write("Last days of the month")
// }

// task # 6
// var d = new Date();
// var t = d.getTime();
// var min = 1000 * 60;
// var ans = t/min;
// document.write("Current Date: "+d)
// document.write("<br>Elapsed milliseconds since January 1, 1970: "+t)
// document.write("<br>Elapsed minutes since January 1, 1970: "+ans)

// task # 7
// var d = new Date();
// var h = d.getHours();
// if(h >= 0 && h <= 11){
//     alert("Its AM")
// }else{
//     alert("Its PM")
// }

// task # 8
// var laterDate = new Date();
// laterDate.setMonth(11);
// laterDate.setDate(31)
// document.write("Later date: "+laterDate)

// task # 9
// var date1 = new Date("06/18/2015"); 
// var date2 = new Date("06/19/2020"); 

// // To calculate the time difference of two dates 
// var Difference_In_Time = date2.getTime() - date1.getTime(); 

// // To calculate the no. of days between two dates 
// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 

// //To display the final no. of days (result) 
// document.write("Total number of days between dates  <br>"
//                + date1 + "<br> and <br>" 
//                + date2 + " is: <br> " 
//                + Difference_In_Days+" days has passed since 1st Ramadan, 2015"); 

// task # 10
// In index.html file

// task # 13
// var age = +prompt("Enter your age:");
// var year = new Date();
// var year1 = year.getFullYear();
// var year2 = year1 - age;
// document.write("Your age is "+age+"<br>Your birth year is "+year2)

// task # 14
// var name = alert(prompt("Enter your name:"))
// var currentMonth = prompt("Enter your month")
// var Numberofunits = +prompt("Enter number of units:");
// var Numberofunits1 = Numberofunits.toFixed(2)
// var Chargesperunit = +prompt("Enter charges per units:")
// var Chargesperunit1 = Chargesperunit.toFixed(2);
// var NetAmountPayable =  Numberofunits1 * Chargesperunit1; 
// var NetAmountPayable1 = NetAmountPayable.toFixed(2);
// var LatePaymentSurcharge = 350;
// var GrossAmountPayable = NetAmountPayable1 + LatePaymentSurcharge;
// document.write("Customer Name: "+name+"<br>Month: "+currentMonth +"<br>Number of units:"+Numberofunits1+"<br>Charges per unit:"+Chargesperunit1+"<br><br> Net Amount Payable(within due date): "+NetAmountPayable1 +"<br>Late payment surcharge:"+LatePaymentSurcharge+"<br>Gross amount payable (after Due Date):"+GrossAmountPayable)

// Chapter 35-38
// task # 1
// var abc;
// function tellTime(abc){
//     var date = new Date()
//     // var time = date.getDate()
//     return(date)
// }
// alert(tellTime());

// task # 2
// function name(firstName,lastName){
//     var firstName = prompt("Enter first name")
//     var lastName = prompt("Enter last name")
//     return firstName + lastName;
// }
// alert(name())

// task # 3
// function num(a,b){
//     var c = +prompt("Enter a number")
//     var d = +prompt("Enter a number")
//     return c + d;}
// alert(num());

// task # 4
// function calc(num1,num2,oper){
//     var a = +prompt("Enter first number")
//     var b = +prompt("Enter Second number")
//     var c = prompt("Enter operation")
//     if(c === "+"){
//         alert(a + b)
//     }else if(c === "-"){
//         alert(a - b)
//     }else if(c === "*"){
//         alert(a * b)
//     }else if(c === "/"){
//         alert(a / b)
//     }else if(c === "%"){
//         alert(a % b)
//     }else{
//         alert("Sorry. You can write something wrong")
//     }
//     return a,b,c;
// }
// calc()

// task # 5
// function squr(a){
//     var b = a * a;
//     return b;
// }
// alert(squr(8));

// task # 6
// function factorial(x){
//     if(x === 0){
//         return 1;
//     }
//     return x * factorial(x-1)
// }
// console.log(factorial(5))

// task # 7
// function num(start,end){
//     var a = +prompt("Enter a  number")
//     var b = +prompt("Enter a  number") 
//     let abc = ""; 
//     for (var i=a; i<=b ; i++){
//         alert(i)
//         abc = abc + " " +i;
//         console.log(abc)

//     }

//     document.write(abc)
// }
// num()

// task # 8
// function calcHypotenus(base,per) {
//     var a = +prompt("Enter a number")
//     var b = +prompt("Enter a number")
//     return Math.sqrt(a*a  + b*b) ;
// }
// console.log(calcHypotenus())

// task # 9
// var length = parseInt(prompt("Enter a whole number for the length of your rectangle."));
// var width = parseInt(prompt("Enter a whole number for the width of your rectangle."));
// function area(length, width) {
//     return length * width;
// }

// document.writeln('The area of your rectangle is ' + area(length, width));

// task # 10
// function name(){
// var word = prompt("Enter the word")
// var check = "";
// for (var i = word.length - 1; i>=0 ; i--){
//     check += word[i];

// }
// if (word === check)
// {
//     return document.write(word + " is a palindrome word")
// }
// }
// name()
// task # 11
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"))

// task # 12
// function find_longest_word(str)
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
// console.log(find_longest_word('Web Development Tutorial'));

// task # 13
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

// console.log(char_count('w3resource.com', 'o'));
