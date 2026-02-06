<h1>Example or Excercise:</h1>
<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error: variable.js:103 Uncaught ReferenceError: Cannot access 'nm' before initialization
    at variable.js:103:13</p>
<p>Why :Because let variables are hoisted but not initialized until their declaration is reached. </p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>console.log(b);</p>-
<p>var b = "username";</p>
<p>Answer or Error: undefined</p>
<p>Why :Because var variables are hoisted and initialized with undefined. </p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or Error: 2</p>
<p>Why :Because var variables are function-scoped, so the inner block shares the same variable. </p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error: Inside: 20
 Outside: 10</p>
<p>Why : Because let variables are block-scoped, so the inner block has its own variable.</p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>const person = {name: "demo"}; </p>
on console.log
<p>person.name= "user"; ✅</p>
<p>person = {} ; ❌ </p>
<p>Answer or Error: variable.js:129 Uncaught TypeError: Assignment to constant variable.
    at variable.js:129:8 </p>
<p>Why : Because const variables cannot be reassigned, but their properties can be modified.</p>
</div>

<h3>Example 1 :</h3>
<p>true + false </p>
<p>ans or error: 1</p>
<p>why : true → 1
false → 0
1 + 0 = 1
JavaScript converts booleans to numbers when using + with numbers. </p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>null + 1 </p>
<p>ans or error: 1</p>
<p>why :
null → 0 (in numeric operations)
0 + 1 = 1
Important: null becomes 0 only in math, not in strings or comparisons. </p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>"12" + 12 </p>
<p>ans or error: '1212'</p>
<p>why : + with a string = string concatenation
Number 12 → "12"
"12" + "12" = "1212"
Rule: If one side is a string, + joins strings.</p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>!! undefined</p>
<p>ans or error: false</p>
<p>why : undefined is falsy
!undefined → true
!!undefined → false
Double !! is a classic trick to convert any value to a boolean.</p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>"12" - 1 </p>
<p>ans or error: 11</p>
<p>why : does NOT support strings
JS forces "12" → 12
12 - 1 = 11
Only + does string concatenation.
Other operators (- * /) force numbers. </p>
</div>
 
<div>
<p> why typeof NaN --> number </p> 
<p>NaN is a failed number oprations that why that type is number</p>
<p> ex. "hello" + 5 --> NaN</p>
<p>ans or error: 'hello5'</p>
<p>why :- + sees a string → does concatenation
No numeric conversion happens </p>
</div>
 
<div>
<p>Undefined vs Null</p>
<p>let x;</p>
<p>console.log(x);</p>
<p>let y = null;</p>
<p>console.log(y);</p>
<p>ans or error: undefined
null</p>
<p>why :undefined	--> Variable declared but not assigned
null -->  Intentionally empty value </p>
</div>

<div>
<h1>Example 1 :</h1>
<p>let x = 10;</p>
<p>let y = 20;</p>
<p>if(x>5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}</p>
<p>ans or error: Both are greater than 5 </p>
<p>why : </p>
</div>

<div>
<h1>Example 2 :</h1>
<p>let isAdmin = true;</p>
<p>let isLoggedIn = false;</p>
<p>if(isAdmin || isLoggedIn){
    console.log("Acess granted");
}else{
    console.log("Acess Denied");
}</p>
<p>ans or error:  Acess granted</p>
<p>why : </p>
</div>

<div>
<h1>Example 3 :</h1>
<p>let temp = 35;</p>
<p>if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}</p>
<p>ans or error:  Pleasant day </p>
<p>why : </p>
</div>

<div>
<h1>Example 4 :</h1>
<p>let a = 0;</p>
<p>if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}</p>
<p>ans or error: Falsy value </p>
<p>why : </p>
</div>

<div>
<h1>Example 5 :</h1>
<p>let score = 78;</p>
<p>let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";</p>
<p>console.log("Grade:", grade);</p>
<p>ans or error:  </p>
<p>why : </p>
</div>

<div>
<h1>Example 6 :</h1>
<p>let points = 120;</p>
<p>let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";</p>
<p>console.log("Status:", status);</p>
<p>ans or error: </p>
<p>why : </p>
</div>

<div>
<h1>Example 7:</h1>
<p>let loggedIn = true;</p>
<p>let hasToken = false;</p>
<p>let access = loggedIn && hasToken ? "Allow" : "Deny";</p>
<p>console.log("access:", access);</p>
<p>ans or error: </p>
<p>why : </p>
</div>

<div>
<h1>Example 8:</h1>
<p>let a = 5;</p>
<p>a++</p>
<p>console.log(a);</p>
<p>ans or error: </p>
<p>why : </p>
</div>

<div>
<h1>Example 9:</h1>
<p>let a = 8;</p>
<p>++a</p>
<p>console.log(a);</p>
<p>ans or error: </p>
<p>why : </p>
</div>

<div>
<h1>Example 10:</h1>
<p>let b = 4;</p>
<p>let c = b++</p>
<p>console.log(b, c);</p>
<p>ans or error: </p>
<p>why : </p>
</div>

<div>
<h1>Example 11:</h1>
<p>let b = 4;</p>
<p>let c = ++b</p>
<p>console.log(b, c);</p>
<p>ans or error: </p>
<p>why : </p>
</div>

<div>
<h1>Example 12:</h1>
<p>let m = 10;</p>
<p>console.log(m--)</p>
<p>console.log(m);</p>
<p>ans or error: </p>
<p>why : </p>
</div>

<div>
<h1>Example 13:</h1>
<p>let n = 5;</p>
<p>let result = n++ + ++n;</p>
<p>console.log(result);</p>
<p>ans or error: </p>
<p>why : </p>
</div>

<div>
<h1>Example 14:</h1>
<p>let likes = 100;</p>
<p>function likePost(){
result ++likes;
}</p>
<p>console.log(likePost());</p>
<p>console.log(likes);</p>
<p>ans or error: </p>
<p>why : </p>
</div>

<div>
<h1>Example 12:</h1>
<p>let count = 5;</p>
<p>if(count-- === 5){   
console.log("Matched");
}else{
    console.log("Not Matched"); 
}</p>
<p>ans or error: </p>
<p>why : </p>
</div>


<div>
<h1>Example 1 :</h1>
<p>let x = 2;</p>
<p>switch(x){
   case 2:
   console.log("Two");
   case 3:
   console.log("Three");
}</P>
<p>ans or error: Two</p>
<p>why : </p>
<div>



<div>
<h1>Example 2 :</h1>
<p>Write a function getGrade(score) that:</p>
<p> Takes A student's score as input (0 to 100)</P>
<p>Returns the grade based on below logic:</P>
<p>90-100 A+</P>
<p>80-89 A</P>
<p>70-79 B</P>
<p>60-69 C</P>
<p>33-59 D</P>
<p>0-32 Fail</P>
<p>Anything Else Invalid Marks</P>
<p>ans or error:Three </p>
<p>why : </p>
<div>



<div>
<h1>Example 3 :</h1>
<p>Rock-Paper-Scissors:</p>
<p>rock - scissors --> rock</P>
<p>paper - rock --> paper</P>
<p>scissors - paper --> scissors</P>
<p>ans or error: rock wins</p>
<p>why : </p>
<div>


<div>
<h1>Example 1:</h1>
<p>Print number from 1 to 10 using a for loop.</p>
<p>ans or error: </p>
<p>why : </p>
</div>

<div>
<h1>Example 2:</h1>
<p>Print number from 10 to 1 using while loop.</p>
</div>

<div>
<h1>Example 3:</h1>
<p>Print even numbers from 1 to 20 using for loop.</p>
<p>for(let i=1; i<=20; i++){
    if(i%2 ===0){
    console.log(i);
    }
}</p>
</div>

<div>
<h1>Example 4:</h1>
<p>Print odd numbers from 1 to 15 using while loop.</p>
<p>let i= 1;</p>
<p>while(i<=15){
    if(i%2 !==0){ // or (i%2 ===1)
    console.log(i);
    }
    i++;
}</p>
</div>

<div>
<h1>Example 5:</h1>
<p>Print the multiplication table of 5.</p>
<p>
for(let i=1; i<=10; i++){
    console.log(`5 x ${i} = ${5*i}`);
}
</p>
</div>

<div>
<h1>Example 6:</h1>
<p>Find the sum of numbers from 1 to 100 using a loop.</p>
<p>
let sum = 0;
for(let i=1; i<=100; i++){
    // let sum =0;
    sum = sum + i;
    // console.log(sum);
}
console.log(sum);
</p>
</div>

<div>
<h1>Example 7:</h1>
<p>Print all numbers between 1 to 50 that are divisible by 3.</p>
<p>
for(let i=1; i<=50; i++){
    if(i%3 === 0){
        console.log(i);
    }
}
</p>
</div>

<div>
<h1>Example 8:</h1>
<p>Ask the user for a number and print whether each number from 1 to that number is even or odd.</p>
<p>
let num = prompt("give a number");
for(let i=1; i <=numl i++){
    if(i%2 ===0){
        console.log(i, " is even");
    }else{
        console.log(i, " is odd");
    }
}
</p>
</div>

<div>
<h1>Example 9:</h1>
<p>Count how many numbers between 1 to 100 are divisible by 3 or 5.</p>
<p>
for(let i=1; i<=100; i++){
    if(i%3 ===0 || i%5 ===0){
        console.log(i);
    }
}
</p>
</div>

<div>
<h1> (Break and Continue)Example 10:</h1>
<p>Stop at First Multiple of 7</p>
<p>Write a Loop from 1 to 100 that:</p>
<p>Prints Each number</p>
<p>Stop Completely when it finds the first number divisible by 7</p>
<p>
for(let i=1; i<=100; i++){
    console.log(i);
    if(i%7 ===0){
        break;
    }
}
</p>
</div>

<div>
<h1> (Break and Continue)Example 11:</h1>
<p>Skip Multiples of 3</p>
<p>Write a Loop From 1 to 20 that:</p>
<p>Skip number divisible by 3</p>
<p>Prints all other numbers</p>
<p>
for(let i=1; i<=20; i++){
    if(i%3 ===0){
        continue;
    }
    console.log(i);

}
</p>
</div>

<div>
<h1> (Break and Continue)Example 12:</h1>
<p>Print First 5 Odd Numbers</p>
<p>Write a loop from 1 to 100 that:</p>
<p>Prints only 5 odd numbers</p>
<p>Then stops the loop</p>
<p>Use Both if, continue and a counter + break</p>
<p>
count = 0;
for(let i =1; i<=100; i++){
    if(i%2 ===1){
        count++;
        console.log(i)
    }
    console.log(i);
    if(count ===5){cha
        break;
    }
}
</p>
</div>





## Function Examples
<hr>
<div>
<h1> Example 1: </h1>
<p>What's the difference between function declaration and function expression in terms of hoisting?</p>
<p>Ans and Why: Function declarations are hoisted, meaning they can be called before they are defined in the code. Function expressions, on the other hand, are not hoisted, so they cannot be called before they are defined.</p>
</div>

<div>
<h1> Example 2: </h1>
<p>greet();</p>
<p>function greet(){
    console.log("Hello!");
}</p>
<p>Ans or Err and Why: The function will print "Hello!" to the console. This is because function declarations are hoisted, allowing them to be called before their definition in the code.
</p>
</div>

<div>
<h1> Example 3: </h1>
<p>Convert normal function to Arrow Function</p>
<p>function add(a, b){
    return a + b;
}</p>
<p>Ans And How: let add1 = (a, b) => {
    return a + b;
}
console.log(add1(2,3));</p>
</div>

<div>
<h1> Example 4: </h1>
<p>Identify what is parms and what is args</p>
<p>function welcome(name){
    console.log("Welcome " + name);
}</p>
<p>welcome("user");</p>
<p>Ans and why : name is param, user is arg
why : name is the parameter that the function expects, and "user" is the argument that is passed to the function when it is called.</p>
</div>

<div>
<h1> Example 5: </h1>
<p>how many parameters and args</p>
<p>function temp (a, b, c){
    console.log(a,b,c);
}</p>
<p>temp(1, 2)</p>
<p> Ans, Err and Why: 3 params, 2 args
 The function has 3 parameters (a, b, c) but is called with only 2 arguments (1, 2). Therefore, the output will be "1 2 undefined" because the third parameter 'c' is not provided an argument and defaults to undefined.
</p>
</div>

<div>
<h1> Example 6: </h1>
<p>Predict the output</p>
<p>function temp_user(name = "Guest"){
    console.log("Hello " + name);
}</p>
<p>temp_user();</p>
<p>Ans, Err and Why: The function will print "Hello Guest" to the console. This is because the default parameter value for 'name' is set to "Guest", and since no argument is provided when calling the function, it uses the default value.</p>
</div>

<div>
<h1> Example 7: </h1>
<p>what is ... operator and why use it  in function</p>
<p>function number(...numbers){
    console.log(numbers);
}</p>
<p>number(1, 2, 3, 4, 5)</p>
<p>Ans, Err and why:output: [1, 2, 3, 4, 5]
 The '...' operator is called the rest parameter syntax. It allows the function to accept an indefinite number of arguments as an array. In this example, all the arguments passed to the function are collected into the 'numbers' array, which is then logged to the console.</p>
</div>

<div>
<h1> Example 8: </h1>
<p>Use rest Parameters to accept any number of scores and return the total</p>
<p>function calculateTotal(...scores){
    let total = 0;
    for(let i=0; i<=scores.length; i++){
        total += scores[i];
    }
    return total;
}</p>
<p>function calculateTotal(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;
    });
    return total;
}</p>
<p>calculateTotal(10, 20 ,30 ,40 ,50)</p>
<p>let sumtotal = calculateTotal(10, 20 ,30 ,40 ,50)</p>
<p>Ans, Err and Why: Ans: 150
why:
 The function will return 150 as the total score. The rest parameter '...scores' allows the function to accept any number of arguments, which are then summed up using a loop or forEach method.
</p>
</div>

<div>
<h1> Example 9: </h1>
<p>Fix the function using early return</p>
<p>function checkAge(age){
    if(age < 18){
        console.log("Too Young");
    } else {
        console.log("Access Granted");
    }
}</p>
<p>Ans And how: The function will print "Access Granted" if the age is 18 or older, and "Too Young" if the age is less than 18.
</p>
</div>

<div>
<h1> Example 10: </h1>
<p>What is the return value of above function</p>
<p>function f(){ return;}</p>
<p>Ans and Why: The function will return undefined because there is no explicit return value.
</p>
</div>


<div>
<h1> Example 11: </h1>
<p>What does is mean when we say "functions are first-class citizens"?</p>
<p>Ans and Why : It means that functions in JavaScript can be treated like any other variable. They can be assigned to variables, passed as arguments to other functions, and returned from other functions. This allows for higher-order functions and functional programming techniques. 
</p>
</div>

<div>
<h1> Example 12: </h1>
<p>Can You assign a function to a variable and then all it?</p>
<p>let a = function(){console.log("Hello");}</p>
<p>a();</p>
<p>ans and why : Yes, you can assign a function to a variable and then call it. In this case, the function is assigned to the variable 'a', and when 'a()' is called, it executes the function and prints "Hello" to the console.</p>
</div>

<div>
<h1> Example 13: </h1>
<p>Pass A function into anthor funtion and excute it inside.</p>
<p>Ans and Why, How</p>
<p>function abcd(val){val()}</p>
<p>abcd(function(){ console.log("Hello")})</p>
<p>ans, err and why :The function 'abcd' takes a function as an argument and calls it. In this case, it will print "Hello" to the console.</p>
</div>

<div>
<h1> Example 14: </h1>
<p>What is higer order function?</p>
<p>Ans and Why: A higher-order function is a function that takes another function as an argument or returns a function as a result. This allows for more abstract and flexible code, enabling patterns like callbacks, function composition, and decorators.</p>
</div>

<div>
<h1> Example 16: </h1>
<p>pure or impure function?</p>
<p>let a = 5;</p>
<p>function num(num){
total += num;
}
<p>num(3);</p>
<p>Ans and Why: This is an impure function because it modifies the external variable 'total' which is outside its scope. A pure function would not have any side effects and would always produce the same output for the same input without modifying any external state.</p>
</div>

<div>
<h1> Example 17: </h1>
<p>convert example 16 function into pure function?</p>
<p>Ans and how:
function numPure(total, num){
    return total + num;
}
let result = numPure(a1, 3);
why : The function 'numPure' is a pure function because it does not modify any external state. Instead, it takes the current value of 'total' and 'num' as arguments and returns the new total without side effects.</p>
</div>

<div>
<h1> Example 18: </h1>
<p>What is Closure? When is it created?</p>
<p>Ans and Example:
A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. It is created when a nested function is defined within an outer function, allowing the inner function to access variables from the outer function even after the outer function has finished executing.
example: 
function outerFunction() {
    let outerVariable = 'I am from outer function';
    function innerFunction() {
        console.log(outerVariable);
    }
    return innerFunction;
}
let closureFunction = outerFunction();
closureFunction(); // I am from outer function</p>
</div>

<div>
<h1> Example 19: </h1>
<p>What's logged?</p>
<p>function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}</p>
<p>const counter = outer();</p>
<p>counter();</p>
<p>counter();</p>
<p>Ans, Err and Why: The output will be 1 and then 2. This is because the inner function retains access to the 'count' variable from the outer function's scope, allowing it to increment and log the value each time it is called.</p>
</div>

<div>
<h1> Example 20: </h1>
<p>Convert below function into an IIFE:</p>
<p>function init(){
    console.log("Initialized");
}</p>
<p>Ans and Why: The function 'init' is wrapped in parentheses and immediately invoked. This is an example of an IIFE (Immediately Invoked Function Expression), which allows for the creation of a new scope and the execution of the function without polluting the global scope.</p>
</div>

<div>
<h1> Example 21: </h1>
<p>What is the use of IIFE? Name one real-world use case.</p>
<p>let fun=(function(){
    let score = 0; // this is private variable
    return{
        getScore: function(){
            console.log(score);
        },
        setScore: function(val){
            score = val;
        }
    }
})()</p>
<p>Ans and Why: The IIFE is used here to create a private scope for the variable 'score'. This prevents external code from directly accessing or modifying 'score', allowing controlled access through the 'getScore' and 'setScore' methods. This pattern is useful for encapsulating state and behavior, promoting better organization and modularity in code.</p>
</div>

<div>
<h1> Example 22: </h1>
<p>What will be the output here and why?</p>
<p>temp_var();</p>
<p>var temp_var = function(){
    console.log("Hello");
}</p>
<p>Ans and Why: The output will be "Hello". This is because the function expression is hoisted, but not its assignment. When 'temp_var()' is called before the assignment, it refers to the variable 'temp_var', which is currently undefined, leading to a TypeError. After the assignment, calling 'temp_var()' will correctly log "Hello".</p>
</div>

<div>
<h1> Example 23: </h1>
<p>What will be the output here and why?</p>
<p>temp_var();</p>
<p>function temp_var(){
    console.log("Hello");
}</p>
<p>Ans and Why: The output will be "Hello". This is because the function declaration is hoisted, and the function is available in the scope before its definition. Therefore, calling 'temp_var()' before the function definition will correctly log "Hello".</p>
</div>
 

// Q1. push()
// You are building a to-do app. Add a new task 'Buy milk' to the tasks array.
let tasks = ['Wake up', 'Brush teeth'];
tasks.push('Buy milk');
// ans: ['Wake up', 'Brush teeth', 'Buy milk']


// Q2. pop()
// Remove the last notification from the notifications array.
let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop();
//ans: ['Email', 'Message']




// Q3. shift()
// A queue system removes the first customer. Remove the first customer.
let customers = ['Customer1', 'Customer2', 'Customer3'];
customers.shift();
// ans: ['Customer2', 'Customer3']




// Q4. unshift()
// A new song is added to the beginning of the playlist.
let playlist = ['Song B', 'Song C'];
playlist.unshift('Song A');
// ans : ['Song A', 'Song B', 'Song C']




// Q5. splice()
// In a classroom list, remove 'Alex' and add 'John' and 'Sara' in the same position.
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
students.splice(1, 1, 'John', 'Sara');
//ans : ['Mike', 'John', 'Sara', 'Emma', 'Sophia']




// Q6. splice()
// From the menu, remove 2 items starting from index 1.
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1, 2);
// ans: ['Burger', 'Salad']




// Q7. slice()
// Create a new array that contains only weekend days.
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekend = days.slice(5);
// ans : ['Saturday', 'Sunday']




// Q8. reverse()
// Reverse the order of levels in a game.
let levels = ['Easy', 'Medium', 'Hard'];
levels.reverse();
// ans :['Hard', 'Medium', 'Easy']




// Q9. sort()
// Sort the scores in ascending order.
let scores = [45, 12, 78, 34, 89];
scores.sort((a, b) => a - b);
// ans: [12, 34, 45, 78, 89]



// Q10. sort() with numbers
// Sort the prices from lowest to highest.
let prices = [199, 49, 999, 299, 149];
prices.sort((a, b) => a - b);
// ans : [49, 149, 199, 299, 999]




// Q11. slice() vs splice()
// From the array, create a new array of the first 3 items WITHOUT changing the original array.
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
let newProducts = products.slice(0, 3);
// ans : newProducts = ['Laptop', 'Phone', 'Tablet']
products remains unchanged





// Q12. splice() complex
// In the array below:
// 1. Remove 'Blue'
// 2. Add 'Purple' and 'Orange' at the same position
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
ans:colors.splice(2, 1, 'Purple', 'Orange')
// ans : ['Red', 'Green', 'Purple', 'Orange', 'Yellow']



// Q13. reverse() + push()
// Reverse the array and then add 'Final Step' at the end.
let steps = ['Step 1', 'Step 2', 'Step 3'];
steps.reverse();
steps.push('Final Step');
// ans : ['Step 3', 'Step 2', 'Step 1', 'Final Step']



// Q14. sort() strings
// Sort names alphabetically, ignoring case sensitivity.
let names = ['alice', 'Bob', 'charlie', 'David'];
ans: names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
// ans : ['alice', 'Bob', 'charlie', 'David']




// Q15. Combination Question
// You are managing a movie watchlist:
// 1. Add 'Inception'
// 2. Remove the first movie
// 3. Sort the list alphabetically
let movies = ['Avatar', 'Titanic', 'Gladiator'];
movies.push('Inception');
movies.shift();
movies.sort();
// ans : ['Gladiator', 'Inception', 'Titanic']


// Q16. splice() return value
// What does the splice method return in this case?
let nums1 = [1, 2, 3, 4];
nums1.splice(1, 2);
// ans : [1, 4]





// Q17. slice() immutability check
// After executing slice, does the original array change?
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);
// ans : not changed 


// Q19. reverse() mutation
// After reversing, what happens to the original array reference?
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();
// ans : letters = ['c', 'b', 'a']
reversedLetters = ['c', 'b', 'a']
both revrese 


// Q21. splice() edge case
// What happens if deleteCount is 0?
let arr = ['x', 'y', 'z'];
arr.splice(1, 0, 'new');
// ans: ['x', 'new', 'y', 'z']
0 means nothing removes only it will insert


// Q23. slice() negative index
// What elements are returned?
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);
// ans : [300, 400]


// Q24. splice() vs slice() decision
// Which method would you use if you want to:
// a) Update the original array
// b) Keep the original array unchanged
// ans : a) splice
// b) slice



// Q25. Chained methods (brain teaser)
// What is the final value of arr?
let arr2 = [1, 2, 3];
arr2.push(arr2.shift());
// ans : [2, 3, 1]

// 1. Double daily steps count
// Real life: Fitness app doubling step goal

const steps = [1000, 2000, 3000];
function doubleSteps(step) {
  return step * 2;
}
const newSteps = steps.map(doubleSteps);
// ans and why:[2000, 4000, 6000]
// 1000 --> 2000
// 2000 --> 4000
// 3000 --> 6000


// 2. Convert miutes to seconds
// Real life: Video duration calculation
const minutes = [1, 5, 10];
const seconds = minutes.map(function(min) {
  return min * 60;
});
// ans and why: [60, 300, 600]
// converting each value


// 3. Add ₹50 delivery charge to prices
// Real life: Food delivery app
const price = [200, 350, 500];
const finalPrice = price.map(price => price + 50);
// ans and why: [250, 400, 550]
// it will add 50 to every array price 


// 4. Convert exam marks to grad
// Real life: Result system
const mark = [35, 72, 88, 40];
function getGrade(mark) {
  return mark >= 40 ? 'Pass' : 'Fail';
}
const grades = mark.map(getGrade);
// ans and why :["Fail", "Pass", "Pass", "Pass"]
// marks >= 40 --> Pass
// marks < 40 --> fail
// 35 --> Fail
// 72 --> Pass
// 88 --> Pass
// 40 --> Pass


// 5. Capitalize names
// Real life: Display usernames properly
const names = ['rahul', 'neha', 'amit'];
const formattedNames = names.map(name =>
  name[0].toUpperCase() + name.slice(1)
);
// ans and why:["Rahul", "Neha", "Amit"]
// name[0].toUppercase() + name.slice(1) --> capitilize first letter only

// 6. Apply 10% discount
// Real life: Shopping sale
const prices = [500, 1000, 1500];
function applyDiscount(price) {
  return price - price * 0.10;
}
const discounted = prices.map(applyDiscount);
// ans and why : [450, 900, 1350]
// price 10%
// 500 * 0.10 --> 450
// 1000 * 0.10 --> 900
// 1500 * 0.10 --> 1350


// 7. Add bonus points to scores based on condition
// Real life: Game scoring system
const scores = [45, 60, 85];
const finalScores = scores.map(score => {
  if (score >= 80) return score + 20;
  if (score >= 50) return score + 10;
  return score;
});
// ans and why : [45, 70, 105]
// Score >= 80 --> +20
// Score >= 50 --> +10
// 45 --> 45
// 60 --> 70
// 85 --> 105

// 8. Convert temperatures with formula
// Real life: Weather app
const celsius = [0, 20, 30];
function toFahrenheit(temp) {
  return (temp * 9/5) + 32;
}
const fahrenheit = celsius.map(toFahrenheit);
// ans and why: [32, 68, 86]
// 0 * 9/5 + 32 --> 32
// 20 * 9/5 +32 --> 68
// 86 * 9/5 +32 --> 86

// 9. Generate table of numbers
// Real life: Math learning app
const numbers = [1, 2, 3, 4];
const tableOfTwo = numbers.map(num => num * 2);
// ans and why: [2, 4, 6, 8]
// 1 * 2 --> 2
// 2 * 2 --> 4
// 3 * 2 --> 6
// 4 * 2 --> 8
// multiply by 2 

// 10. Combine map with string formatting
// Real life: SMS notification system
const balances = [500, 1200, 300];
const messages = balances.map(balance =>
  `Your balance is ₹${balance}`
);
// ans and why : (3) ['Your balance is ₹500', 'Your balance is ₹1200', 'Your balance is ₹300']


// ### 1. Get even numbers
// **Real life:** Find even roll numbers
const number = [1, 2, 3, 4, 5, 6];
const evenNumbers = number.filter(num => num % 2 === 0);
// ans and why : [2, 4, 6]
// num % 2 === 0
// even number 
// 1 → not divisible
// 2 → divisible
// 3 → not divisible
// 4 → divisible
// 5 → not divisible
// 6 → divisible


// ### 2. Filter adults
// **Real life:** Allow only 3+ users
const ages = [2, 1, 10, 16, 5];
function isAdult(age) {
  return age >= 18;
}
const adults = ages.filter(isAdult);
// ans and why :[]
// age >= 18
// no age is greater than 18 so it will be empty

// ### 3. Remove empty items
// **Real life:** Clean user input
const inputs = ['Hello', '', 'World', '', 'JS'];
const validInputs = inputs.filter(text => text !== '');
// ans and why : ["Hello", "World", "JS"]
// filter removes empty strings 

// ### 4. Filter passing marks
// **Real life:** Exam result system
const marks2 = [35, 72, 88, 40, 25];
const passedStudents = marks2.filter(mark => mark >= 40);
// ans and why : [72, 88, 40]
// mark >= 40
// 72 
// 88
// 40 
// removes 35 and 25



// ### 5. Get affordable prices
// **Real life:** Shopping app price filter
const prices1 = [199, 499, 999, 1499, 299];
const affordable = prices1.filter(price => price <= 500);
// ans and why : [199, 499, 299]
// filter price <= 500

// ### 6. Filter long words
// **Real life:** Search keyword validation
const words = ['hi', 'hello', 'javascript', 'ok'];
function isLongWord(word) {
  return word.length > 3;
}
const longWords = words.filter(isLongWord);
// ans and why :["hello", "javascript"]
// word.length > 3
// word length hmust be higher than 3 

// ### 7. Filter positive numbers
// **Real life:** Bank transaction validation
const transactions = [200, -100, 500, -50, 300];
const credits = transactions.filter(amount => amount > 0);
// ans and why : [200, 500, 300]
// negative value removes 

// ### 8. Filter numbers within a range
// **Real life:** Score selection
const scores1 = [45, 60, 85, 30, 90];
const selectedScores = scores1.filter(score => score >= 50 && score <= 90);
// ans and why : [60, 85, 90]
// Score between 50 and 90
// 60, 85 , 90 
// removes 45 and 30


// ### 1. Total money in wallet
// **Real life:** Add all cash amounts
const money = [100, 200, 50];
const totalMoney = money.reduce((sum, amount) => sum + amount, 0);
// ans and why : 350
// sum = 0 + 100 --> 100
// sum = 100 + 200 --> 300
// sum = 300 + 50 --> 350
// reduce() --> one final total



// ### 2. Total steps walked in a week
// **Real life:** Fitness tracker
const steps = [3000, 5000, 4000, 6000];
function addSteps(total, step) {
  return total + step;
}
const weeklySteps = steps.reduce(addSteps, 0);
// ans and why :18000
// 0 + 3000 --> 3000
// 3000 + 5000 --> 8000
// 8000 + 4000 --> 12000
// 12000 + 6000 --> 18000



// ### 3. Find total cart price
// **Real life:** Shopping bill
const prices = [499, 299, 199];
const totalPrice = prices.reduce((total, price) => total + price, 0);
// ans and why :997
// 499 + 299 + 199 = 997



// ### 4. Find maximum score
// **Real life:** Highest exam mark
const marks = [45, 88, 67, 92];
const highest = marks.reduce((max, mark) => {
  return mark > max ? mark : max;
}, marks[0]);
// ans and why:92
// Start max = 45

// Compare:
// 88 > 45 --> 88
// 67 > 88 --> keep 88
// 92 > 88 --> 92


// ### 5. Count total characters
// **Real life:** Text length calculation
const words = ['Hi', 'Hello', 'JS'];
const totalChars = words.reduce((count, word) => count + word.length, 0);
// ans and why :9
// hii + hello + js = 9
// 3 + 5 + 2 = 9


// ### 6. Combine words into a sentence
// **Real life:** Message builder
const words1 = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = words1.reduce((text, word) => text + ' ' + word);
// ans and why : "Learning JavaScript is fun"
// join string one by one 

// ### 7. Count passed students
// **Real life:** Result summary
const marks1 = [35, 72, 88, 40, 25];
const passCount = marks1.reduce((count, mark) => {
  return mark >= 40 ? count + 1 : count;
}, 0);
//  ans and why :3
// mark >= 40 --> count + 1
// 72  --> 1
// 88  --> 2
// 40  --> 3



// ### 8. Calculate final balance
// **Real life:** Bank account calculation
const transactions = [1000, -200, -300, 500];
const finalBalance = transactions.reduce((balance, amount) => balance + amount, 0);
// ans and why :1000
// 1000 - 200 - 300 + 500 = 1000


// ### 10. Build comma-separated string
// **Real life:** Display values in UI
const items = ['Pen', 'Book', 'Pencil'];
const result = items.reduce((text, item) => text + ', ' + item);
// ans and why :"Pen, Book, Pencil"


/************************************************
MAP + FILTER + REDUCE PRACTICE (REAL-LIFE CASES)
************************************************/

/* ==============================================
Q1. Shopping App – Discounted Total
============================================== */

const prices1 = [200, 800, 1200, 450, 700];

const total1 = prices1
  .filter(price => price > 500)      // Keep prices above 500
  .map(price => price * 0.9)         // Apply 10% discount
  .reduce((sum, price) => sum + price, 0); // Total amount

console.log(total1);
// Answer: 2430
[800, 1200, 700] --> 10%
720 + 1080 + 630 = 2430
// Why: (800 + 1200 + 700) → 10% discount → sum


/* ==============================================
Q2. Fitness App – Total Active Minutes
============================================== */

const minutes = [20, 45, 60, 15, 90];

const totalCalories = minutes
  .filter(min => min > 30)     // Active days only
  .map(min => min * 5)         // Convert to calories
  .reduce((total, cal) => total + cal, 0);

console.log(totalCalories);
// Answer: 975
[45, 60, 90]
[225, 300, 450] --> converted to calories
225 + 300 + 450 = 975
// Why: (45, 60, 90) → calories --> total


/* ==============================================
Q3. Exam System – Average of Passed Marks
============================================== */

const marks = [35, 72, 88, 40, 25, 90];

const passed = marks.filter(mark => mark >= 40);

const average =
  passed.reduce((sum, mark) => sum + mark, 0) / passed.length;

console.log(average);
// Answer: 72.5

// Why: Only passing marks are averaged


/* ==============================================
Q4. Salary System – Monthly Payout
============================================== */

const wages = [300, 800, 450, 1000, 600];

const totalPayout = wages
  .filter(wage => wage > 500)   // High wages
  .map(wage => wage + 100)      // Add bonus
  .reduce((total, wage) => total + wage, 0);

console.log(totalPayout);
// Answer: 2600
// Why: Eligible wages + bonus summed


/* ==============================================
Q5. Online Course – Completion Points
============================================== */

const progress = [20, 50, 75, 40, 100];

const totalPoints1 = progress
  .filter(p => p >= 50)    // Completed lessons
  .map(p => p * 2)         // Convert to points
  .reduce((sum, p) => sum + p, 0);

console.log(totalPoints1);
// Answer: 450
// Why: Only completed lessons earn points


/* ==============================================
Q6. Bank Transactions – Final Balance
============================================== */

const transactions = [1000, -500, 2000, -300, 1500];

const creditedAmount = transactions
  .filter(amount => amount > 0)   // Credit only
  .map(amount => amount * 1.02)   // Add 2% interest
  .reduce((total, amount) => total + amount, 0);

console.log(creditedAmount);
// Answer: 4590
// Why: Credits + interest summed


/* ==============================================
Q7. Game App – Final Score
============================================== */

const scores = [30, 60, 90, 45, 80];

const finalScore = scores
  .filter(score => score > 50)  // Qualified scores
  .map(score => score + 10)     // Bonus points
  .reduce((sum, score) => sum + score, 0);

console.log(finalScore);
// Answer: 260
// Why: Bonus added then total calculated


/* ==============================================
Q8. E-commerce – Total Taxed Amount
============================================== */

const prices2 = [500, 1200, 3000, 800, 1500];

const finalAmount = prices2
  .filter(price => price > 1000)   // Expensive items
  .map(price => price * 1.18)      // Add 18% tax
  .reduce((sum, price) => sum + price, 0);

console.log(finalAmount);
// Answer: 6632
// Why: Taxed prices added together


/* ==============================================
Q9. Attendance System – Reward Points
============================================== */

const hours = [6, 8, 9, 7, 10];

const totalPoints2 = hours
  .filter(hour => hour >= 8)  // Full attendance
  .map(hour => hour * 10)     // Convert to points
  .reduce((sum, point) => sum + point, 0);

console.log(totalPoints2);
// Answer: 270
// Why: Only full days earn points


/* ==============================================
Q10. Interview Brain Teaser – Sum of Squares
============================================== */

const numbers = [1, 2, 3, 4, 5, 6];

const sumOfSquares = numbers
  .filter(num => num % 2 === 0) // Even numbers
  .map(num => num * num)        // Square them
  .reduce((sum, num) => sum + num, 0);

console.log(sumOfSquares);
// Answer: 56
// Why: (2² + 4² + 6²)
 
 
/************************************************
MAP + FILTER + REDUCE PRACTICE (Q1–Q20)
************************************************/

/* =========================
Q1. Grocery Store – Total Cost
========================= */
const prices3 = [50, 120, 300, 80, 200];

const totalCost = prices3
  .filter(price => price > 100)
  .map(price => price * 1.05)
  .reduce((sum, price) => sum + price, 0);

console.log(totalCost);
// Answer: 651
// Filter >100 --> [120, 300, 200]
// +5% tax --> [126, 315, 210]
// Total --> 651
// Why: Items >100 taxed 5% then summed


/* =========================
Q2. Fitness App – Weekly Calories
========================= */
const minutes1 = [10, 25, 40, 15, 60];

const totalCalories1 = minutes1
  .filter(min => min >= 20)
  .map(min => min * 4)
  .reduce((sum, cal) => sum + cal, 0);

console.log(totalCalories1);
// Answer: 500
// Filter >= 20 --> [25, 40, 60]
// ×4 cal --> [100, 160, 240]
// Total --> 500
// Why: Valid workout days converted to calories


/* =========================
Q3. Exam Results – Total Passed Marks
========================= */
const marks3 = [35, 55, 80, 20, 45];

const totalPassedMarks = marks3
  .filter(mark => mark >= 40)
  .reduce((sum, mark) => sum + mark, 0);

console.log(totalPassedMarks);
// Answer: 180
// Filter >= 40 --> [55, 80, 45]
// Total --> 180
// Why: Only passing marks added


/* =========================
Q4. Bank App – Total Credits
========================= */
const transactions1 = [500, -200, 1000, -300, 700];

const totalCredits = transactions1
  .filter(amount => amount > 0)
  .reduce((sum, amount) => sum + amount, 0);

console.log(totalCredits);
// Answer: 2200
// Filter positive --> [500, 1000, 700]
// Total --> 2200
// Why: Only positive transactions counted


/* =========================
Q5. Online Sale – Discounted Bill
========================= */
const prices4 = [800, 1500, 3000, 600, 1200];

const discountedBill = prices4
  .filter(price => price > 1000)
  .map(price => price * 0.85)
  .reduce((sum, price) => sum + price, 0);

console.log(discountedBill);
// Answer: 4845
// Filter >1000 --> [1500, 3000, 1200]
// 15% discount --> [1275, 2550, 1020]
// Total --> 4845
// Why: Items above 1000 discounted 15%


/* =========================
Q6. Attendance – Reward Points
========================= */
const hours1 = [5, 7, 8, 6, 9];

const rewardPoints = hours1
  .filter(hour => hour >= 7)
  .map(hour => hour * 10)
  .reduce((sum, point) => sum + point, 0);

console.log(rewardPoints);
// Answer: 240
// Filter >= 7 --> [7, 8, 9]
// *10 --> [70, 80, 90]
// Total --> 240
// Why: Only valid hours earn points


/* =========================
Q7. Delivery App – Total Distance
========================= */
const distances = [3, 6, 10, 4, 8];

const totalDistance = distances
  .filter(d => d > 5)
  .map(d => d + 1)
  .reduce((sum, d) => sum + d, 0);

console.log(totalDistance);
// Answer: 27
// Filter > 5 --> [6, 10, 8]
// +1 km --> [7, 11, 9]
// Total --> 27
// Why: Long trips get 1km bonus


/* =========================
Q8. Salary System – Final Salary
========================= */
const salaries = [18000, 25000, 30000, 15000];

const totalSalary = salaries
  .filter(sal => sal > 20000)
  .map(sal => sal + 2000)
  .reduce((sum, sal) => sum + sal, 0);

console.log(totalSalary);
// Answer: 59000
// Filter >20000 --> [25000, 30000]
// +2000 --> [27000, 32000]
// Total --> 59000
// Why: Eligible salaries get bonus


/* =========================
Q9. Study App – Total Study Time
========================= */
const hours2 = [0.5, 1.5, 2, 0.75, 3];

const totalStudyMinutes = hours2
  .filter(hour => hour > 1)
  .map(hour => hour * 60)
  .reduce((sum, min) => sum + min, 0);

console.log(totalStudyMinutes);
// Answer: 390
// Filter >1 hr --> [1.5, 2, 3]
// *60 --> [90, 120, 180]
// Total --> 390
// Why: Sessions >1hr converted to minutes


/* =========================
Q10. Electricity Usage – Monthly Bill
========================= */
const units = [80, 120, 200, 90, 150];

const electricityBill = units
  .filter(unit => unit > 100)
  .map(unit => unit * 6)
  .reduce((sum, cost) => sum + cost, 0);

console.log(electricityBill);
// Answer: 2820
// Filter >100 --> [120, 200, 150]
// *₹6 --> [720, 1200, 900]
// Total --> 2820
// Why: Usage >100 charged per unit


/* =========================
Q11. Game Scores – Final Power Score
========================= */
const scores1 = [30, 50, 90, 20, 70];

const powerScore = scores1
  .filter(score => score > 40)
  .map(score => score * 2)
  .reduce((sum, score) => sum + score, 0);

console.log(powerScore);
// Answer: 420
// Filter >40 --> [50, 90, 70]
// Double --> [100, 180, 140]
// Total --> 420
// Why: Qualified scores doubled


/* =========================
Q12. Travel App – Total Fare
========================= */
const rides = [5, 12, 20, 8, 15];

const totalFare = rides
  .filter(km => km > 10)
  .map(km => km + 50)
  .reduce((sum, fare) => sum + fare, 0);

console.log(totalFare);
// Answer: 197
// Filter >10 km --> [12, 20, 15]
// +₹50 --> [62, 70, 65]
// Total --> 197
// Why: Long rides get service fee


/* =========================
Q13. Office Work – Productive Hours
========================= */
const hours3 = [4, 6, 8, 5, 9];

const productiveMinutes = hours3
  .filter(hour => hour >= 6)
  .map(hour => hour * 60)
  .reduce((sum, min) => sum + min, 0);

console.log(productiveMinutes);
// Answer: 1380
// Filter >= 6 --> [6, 8, 9]
// *60 --> [360, 480, 540]
// Total --> 1380
// Why: Productive hours converted to minutes


/* =========================
Q14. Shopping Cart – Reward Coins
========================= */
const purchases = [300, 800, 1200, 400];

const rewardCoins = purchases
  .filter(amount => amount > 500)
  .map(() => 10)
  .reduce((sum, coin) => sum + coin, 0);

console.log(rewardCoins);
// Answer: 20
// Filter >₹500 --> [800, 1200]
// 10 coins each --> [10, 10]
// Total --> 20
// Why: Each qualifying purchase gives 10 coins


/* =========================
Q15. Fuel App – Total Fuel Cost
========================= */
const liters = [3, 6, 10, 4, 8];

const fuelCost = liters
  .filter(l => l > 5)
  .map(l => l * 105)
  .reduce((sum, cost) => sum + cost, 0);

console.log(fuelCost);
// Answer: 2520
// Filter >5 L --> [6, 10, 8]
// *₹105 --> [630, 1050, 840]
// Total --> 2520
// Why: Fuel above 5L charged per liter


/* =========================
Q16. Interview Classic – Sum of Cubes
========================= */
const numbers1 = [1, 2, 3, 4, 5];

const sumOfCubes = numbers1
  .filter(num => num % 2 !== 0)
  .map(num => num ** 3)
  .reduce((sum, num) => sum + num, 0);

console.log(sumOfCubes);
// Answer: 153
// Filter odd --> [1, 3, 5]
// Cube --> [1, 27, 125]
// Total --> 153
// Why: Odd numbers cubed and added


/* =========================
Q17. Performance Tracking – Bonus Points
========================= */
const scores2 = [10, 20, 30, 40, 50];
const avg = scores2.reduce((a, b) => a + b, 0) / scores2.length;

const bonusScore = scores2
  .filter(score => score > avg)
  .map(score => score + 5)
  .reduce((sum, score) => sum + score, 0);

console.log(bonusScore);
// Answer: 100
// Average = (10+20+30+40+50)/5 = 30
// Filter > avg --> [40, 50]
// +5 --> [45, 55]
// Total --> 100
// Why: Above-average scores get bonus


/* =========================
Q18. Subscription App – Final Bill
========================= */
const plans = [199, 399, 599, 299];

const finalBill = plans
  .filter(plan => plan > 300)
  .map(plan => plan * 1.18)
  .reduce((sum, plan) => sum + plan, 0);

console.log(finalBill);
// Answer: 1177.82
// Filter >₹300 --> [399, 599]
// +18% --> [470.82, 706.82]
// Total --> 1177.64
// Why: Premium plans taxed 18%


/* =========================
Q19. Learning App – Achievement Score
========================= */
const scores3 = [45, 60, 70, 30, 80];

const achievementScore = scores3
  .filter(score => score >= 60)
  .map(score => score * score)
  .reduce((sum, score) => sum + score, 0);

console.log(achievementScore);
// Answer: 14900
// Filter >= 60 --> [60, 70, 80]
// Square --> [3600, 4900, 6400]
// Total --> 14900
// Why: Qualified scores squared and summed


/* =========================
Q20. Interview Finisher – Final Sum
========================= */
const numbers2 = [3, 6, 9, 10, 12];

const finalSum = numbers2
  .filter(num => num % 3 === 0)
  .map(num => num * 10)
  .reduce((sum, num) => sum + num, 0);

console.log(finalSum);
// // Answer: 300
// Filter /3 --> [3, 6, 9, 12]
// *10 --> [30, 60, 90, 120]
// Total --> 300
// Why: Numbers divisible by 3 multiplied and added
 