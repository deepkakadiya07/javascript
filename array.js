// // Array -- Hold multiple values at same time 
// // ["Mobile","Laptop","Tablet", 5000, 25, 588 ]
// // ["a","b","Hello"]
// // //[2, 4, 5, 6]

// // // create 
// // // variable_Name = [values]
// // let arr = [1,2,3,4];

// // // access
// // // position = [0 1 2 3 ]
// // // access
// // // array_name[position / index]
// // arr[0]

// // // modify
// // // array_name[position] = new value 
// // arr[0] = 10;
// // arr[1] = 20;
// // arr[2] = 30;
// // arr[3] = 40;

// // // Array methods:
// // // push, pop, shift, unshift , splice, slice, reverse, sort
// // // push --> enter new value into array -- place it into last
// // let a = [1, 2, 3, 4, 5];
// // // variable || function.method --> koi variable ke function in pachhal dot(.) kari ne lakho to te method kevai
// // a.push(700);
// // // use case -- enter new products into existing producats list

// // //pop --> remove last value into array
// // let b = [10, 20, 30, 40];
// // b.pop();
// // // use case -- remove last producat you add into your list


// // // shift -- remove first value into array
// // let c = [30, 40, 50, 60];
// // c.shift();
// // // use case -- remove old producat automatic after sometimes

// // // unshift -- add value into array -- first
// // let d = [52, 35, 65, 85];
// // d.unshift(20);
// // // use case -- add a value into top of that data you recieve 

// // // splice -- remove value into array -- specific position and specific number of values 
// // // into() - first index(position), how many value you want to remove
// // let e = [50, 60, 40, 40 ,10];
// // // e.splice(3, 2);
// // // e. splice(3, 0, 50, 100)
// // // use case -- select msg and remove multiple msg at on click

// // // slice - copy values from array -- specific position and specific number of values 
// // // new variable = array_name.slice(start index, end index)
// // // start index -- include into copy 
// // // end index -- not include into copy
// // let f = [100, 50, 25, 0];
// // let new_f =f.slice(1, 3);
// // // use case -- copy specific data and save it into new variable 
// // // generate a report based on date and generate a file or save the file into your local machine 

// // // splice vs slice 
// // // splice -- remove value into main array or modify new array
// // // slice -- copy value from main array and create a new array that hold the value that you can into

// // // reverse -- reverse value of array
// // let g = [25, 30, 35, 40, 85];
// // // g.reverse();
// // // use case -- show latest update first into your fronted

// // // sort -- set into ascending order
// // let h = [50, 20, 80, 10, 40];
// // h.sort();
// // // let h = [11, 62, 3, 4, 25];
// // // let sr = h.sort(function(a,b)=> {
// //     // return a - b; // ascending order
// //     // })

// // // let h = [11, 62, 3, 4, 25];
// // // let sr = h.sort(function(a,b)=> {
// // //     return b - a ; // descending order
// // // })

// // use case -- sort product price low tohigh 

// // for Each loop 
// // for Each -- array ni value mate loop chalse 
// let i = [10, 35, 40 , 68];

// i.forEach((value) => {
//     let new_var = value + 10;
//     console.log(new_var);
// });
// [5, 58, 42, "Hello"].forEach(value => {
//     let new_arr = value + 2;
//     console.log(new_arr)
// })

// // important into array
// // now all method are used in real world projects 
// // all method are working 

// // .map() method :
// // map tyare j use karvu ke jayare ek new array create karvo che 
// // first map create a black array -- only for understanding 
// let data = [10, 20, 50, 40, 15];
// // same like a for each loop but map return a new array
// let temp_data = data.map((val)=> {
//     if(val > 20){
//         return val;
//     }
// });
// // use case -- data ma thi specific data new array ma stroe karvo hoy
// // ex. product ma thi specific category na product new array ma store karva hoy 
// // if you want to show only electronics producat on your homepage 
// let marks = [10, 5, 20, 25, 15]
// let final_marks = marks.map((val)=>{
//     if (val == 5){
//         return val + 4;
//     }
//     return val;
// })

// // filter 
// // filter tyare use karvu ke jyare ek new array create karvo chhe with condition
// // in return true/false 
// // if true --> add into new array
// // if else(false) --> not add into new array
// let laptops_price = [15000, 20000, 30000, 65000, 99000, 45000];

// let expensive_laptops = laptops_price.filter((price)=>{
//     if(price > 30000) return true;
// });

// // je value 30000 thi vadhare chhe te new array ma add thase and biji value ne array ma add nahi kare 

// // use case -- data ma thi specific data new array ma add thase and biji value ne array ma add nahi kare 

// //use case -- data ma thi specific data new array ma  store karvo hoy based on condition 
// // ex. data ma thi specific data new array ma store karva hoy 
// // if you wanna shoe only expensive producat on your homepage 
// // if you wanna filter producat based on price 
// let product_type = ["Mobile","Tablet","Laptop","Mouse","Keyboard"];
// let filter_product_type = product_type.filter((type)=>{
//     if (type === "Tablet" || type === "Mobile") return true;
// });

// //reduce 
// // reduce tyare j use karvu ke jyare ek single value calculate karvi hoy from array
// let total_price = [15, 68, 45, 58, 52, 48];

// let final_price = total_price.reduce((accumulator, val)=>{
//     return accumulator + val ;
// }, 10); // intial value of accumulator
// // 0 + 10 => 10
// // 10 + 68 => 78
// // 78 + 45 => 123
// console.log("final_price :",final_price)
// //accumulator --> je value function ma return thase te accumulator ma store thase --> accumulator name change kari sako chho
// // val --> array ni darek value 

// // use case -- data ma thi ek single value calculate karvi hoy 
// // ex. producat ma thi total price calculate karvi hoy 

// // find 
// // find tyare j use karvu ke jyare array mathi ek value find karvi hoy based on condition
// // find() return kare che array no element --> callback no return value nathi 
// // never returns what you return inside it
// // returns the array element itself -- not return array
// //.find() stops at the first match 
// // it does not continue looping 

// let product = ["Laptop","Mobile","Tablet","Desktop","Smart Watch"];
// let find_product = product.find((item)=>{
//     console.log("can't find product"); //not working why ??
//     if (item === "Tablet"){
//         return true;
//     }else if (item === "Desktop"){
//         return true;
//     }else {
//         return "Not Found";
//     }
// });

// //use case -- data ma thi ek value find karvi hoy based on condition 
// // ex. productat ma thi specific producat find karvo hoy based on name 

// // find vs filter 
// // real-life scenario : shopping mall security 
// // your are a security guard a shopping mall
// // check thye list of visitors
// let people = ["John", "Sara", "Mike" ,"Anna","David", "Sara"]
// // find --> you are lookin for the first person named "Sara" in the list and stop searchig (Pehli var j male , bas e j and Anagal check j na kare)
// let person = people.find((name)=> name === "Sara");
// console.log(person);

// // filter --> you wanna find all visitors named "Sara" in the list (all data check kare and list na end sudhi check kare )
// let AllSara = people.filter((name)=> name === "Sara");
// console.log(AllSara);

// //some 
// // check kare chhe ke array na koi pan ek item condition satisfy kare chhe ke nahi
// // condition true aave tyare stop kare 
// // some() vs find() --> some() can't return you value its return true or false, find() return value of array 
// // give ans in true and false 
// let marks1 = [10, 20, 35, 80];
// let any = marks1.some((val) => {
//     if (val > 85) return 12;
//     // if (val < 85) return "need improvement";
// });
// // use case -- check if some product are out of stock in your cart 

// // every
// //check kare chhe ke array ma badhha j items condition satisfy kare chhe k nahi
// // true -- badha items condition match kare 
// // false -- ek pan fail thay to
// let def = [20, 30, 40, 50];
// let num = def.every(function(val){
//     return val < 40;
// })
// // use case --> check all student is pass or not 

// // some(), find(), filter(), every()
// // let products = ["Tablet","Mobile","Laptop","Mobile"]
// // Method --> condition --> output
// // .some() --> item === "Mobile" --> true 
// // .find() --> item === "Mobile" --> "Mobile"
// // .filter() --> item === "Mobile" --> ["Mobile","Mobile"]
// // .every() --> item === "Mobile" --> false 

// // Destructuring operator -- give value to variable (ex. we don't use every time arr1[1], just save it into variable let [ ,k] = arr1)
// let arr4 = [1, 2, 3, 4, 5] 
// let[ , , k] = arr4; // --> destructuring
// // let [j, ,k] = arr;
// console.log(k);
// let temp_a = arr4[4]
// let temp_b = arr4[2]
// let temp_c = arr4[1] // let [temp_a]
// let user_data = ["text", "text@gmail.com", "Male", "Surat"]

// // spread operator -- copy value from main array
// let arr8 = [1, 2, 3, 4, 5, 6, 7];
// // let arr4 = arr3; 
// // - just give reference not copy value (when you change into arr4 that will be change arr3 too)
// let arr9 = [...arr8];
// // ... --> rest --> into function
// // ... --> spread --> into Array and Object

// // example: 2 Book bus for travel 


// // // Q1. push()
// // // You are building a to-do app. Add a new task 'Buy milk' to the tasks array.
// // let tasks = ['Wake up', 'Brush teeth'];
// // tasks.push('Buy milk');
// // // ans: ['Wake up', 'Brush teeth', 'Buy milk']


// // // Q2. pop()
// // // Remove the last notification from the notifications array.
// // let notifications = ['Email', 'Message', 'Reminder'];
// // notifications.pop();
// // //ans: ['Email', 'Message']




// // // Q3. shift()
// // // A queue system removes the first customer. Remove the first customer.
// // let customers = ['Customer1', 'Customer2', 'Customer3'];
// // customers.shift();
// // // ans: ['Customer2', 'Customer3']




// // // Q4. unshift()
// // // A new song is added to the beginning of the playlist.
// // let playlist = ['Song B', 'Song C'];
// // playlist.unshift('Song A');
// // // ans : ['Song A', 'Song B', 'Song C']




// // // Q5. splice()
// // // In a classroom list, remove 'Alex' and add 'John' and 'Sara' in the same position.
// // let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
// // students.splice(1, 1, 'John', 'Sara');
// // //ans : ['Mike', 'John', 'Sara', 'Emma', 'Sophia']




// // // Q6. splice()
// // // From the menu, remove 2 items starting from index 1.
// // let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
// // menu.splice(1, 2);
// // // ans: ['Burger', 'Salad']




// // // Q7. slice()
// // // Create a new array that contains only weekend days.
// // let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// // let weekend = days.slice(5);
// // // ans : ['Saturday', 'Sunday']




// // // Q8. reverse()
// // // Reverse the order of levels in a game.
// // let levels = ['Easy', 'Medium', 'Hard'];
// // levels.reverse();
// // // ans :['Hard', 'Medium', 'Easy']




// // // Q9. sort()
// // // Sort the scores in ascending order.
// // let scores = [45, 12, 78, 34, 89];
// // scores.sort((a, b) => a - b);
// // // ans: [12, 34, 45, 78, 89]



// // // Q10. sort() with numbers
// // // Sort the prices from lowest to highest.
// // let prices = [199, 49, 999, 299, 149];
// // prices.sort((a, b) => a - b);
// // // ans : [49, 149, 199, 299, 999]




// // // Q11. slice() vs splice()
// // // From the array, create a new array of the first 3 items WITHOUT changing the original array.
// // let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
// // let newProducts = products.slice(0, 3);
// // // ans : newProducts = ['Laptop', 'Phone', 'Tablet']
// // // products remains unchanged





// // // Q12. splice() complex
// // // In the array below:
// // // 1. Remove 'Blue'
// // // 2. Add 'Purple' and 'Orange' at the same position
// // let colors = ['Red', 'Green', 'Blue', 'Yellow'];
// // ans:colors.splice(2, 1, 'Purple', 'Orange')
// // // ans : ['Red', 'Green', 'Purple', 'Orange', 'Yellow']



// // // Q13. reverse() + push()
// // // Reverse the array and then add 'Final Step' at the end.
// // let steps = ['Step 1', 'Step 2', 'Step 3'];
// // steps.reverse();
// // steps.push('Final Step');
// // // ans : ['Step 3', 'Step 2', 'Step 1', 'Final Step']



// // // Q14. sort() strings
// // // Sort names alphabetically, ignoring case sensitivity.
// // let names = ['alice', 'Bob', 'charlie', 'David'];
// // ans: names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
// // // ans : ['alice', 'Bob', 'charlie', 'David']




// // // Q15. Combination Question
// // // You are managing a movie watchlist:
// // // 1. Add 'Inception'
// // // 2. Remove the first movie
// // // 3. Sort the list alphabetically
// // let movies = ['Avatar', 'Titanic', 'Gladiator'];
// // movies.push('Inception');
// // movies.shift();
// // movies.sort();
// // // ans : ['Gladiator', 'Inception', 'Titanic']


// // // Q16. splice() return value
// // // What does the splice method return in this case?
// // let nums1 = [1, 2, 3, 4];
// // nums1.splice(1, 2);
// // // ans : [1, 4]





// // // Q17. slice() immutability check
// // // After executing slice, does the original array change?
// // let nums2 = [10, 20, 30, 40];
// // let result = nums2.slice(1, 3);
// // // ans : not changed 


// // // Q19. reverse() mutation
// // // After reversing, what happens to the original array reference?
// // let letters = ['a', 'b', 'c'];
// // let reversedLetters = letters.reverse();
// // // ans:  letters = ['c', 'b', 'a']
// // // reversedLetters = ['c', 'b', 'a']
// // // both revrese 


// // // Q21. splice() edge case
// // // What happens if deleteCount is 0?
// // let arr = ['x', 'y', 'z'];
// // arr.splice(1, 0, 'new');
// // // ans: ['x', 'new', 'y', 'z']
// // // 0 means nothing removes only it will insert


// // // Q23. slice() negative index
// // // What elements are returned?
// // let values = [100, 200, 300, 400, 500];
// // let sliced = values.slice(-3, -1);
// // // ans : [300, 400]


// // // Q24. splice() vs slice() decision
// // // Which method would you use if you want to:
// // // a) Update the original array
// // // b) Keep the original array unchanged
// // // ans : a) splice
// // // b) slice



// // // Q25. Chained methods (brain teaser)
// // // What is the final value of arr?
// // let arr2 = [1, 2, 3];
// // arr2.push(arr2.shift());
// // // ans : [2, 3, 1]

// // 1. Double daily steps count
// // Real life: Fitness app doubling step goal

// const steps = [1000, 2000, 3000];
// function doubleSteps(step) {
//   return step * 2;
// }
// const newSteps = steps.map(doubleSteps);
// // ans and why:[2000, 4000, 6000]
// // 1000 --> 2000
// // 2000 --> 4000
// // 3000 --> 6000


// // 2. Convert miutes to seconds
// // Real life: Video duration calculation
// const minutes = [1, 5, 10];
// const seconds = minutes.map(function(min) {
//   return min * 60;
// });
// // ans and why: [60, 300, 600]
// // converting each value


// // 3. Add ₹50 delivery charge to prices
// // Real life: Food delivery app
// const price = [200, 350, 500];
// const finalPrice = price.map(price => price + 50);
// // ans and why: [250, 400, 550]
// // it will add 50 to every array price 


// // 4. Convert exam marks to grad
// // Real life: Result system
// const mark = [35, 72, 88, 40];
// function getGrade(mark) {
//   return mark >= 40 ? 'Pass' : 'Fail';
// }
// const grades = mark.map(getGrade);
// // ans and why :["Fail", "Pass", "Pass", "Pass"]
// // marks >= 40 --> Pass
// // marks < 40 --> fail
// // 35 --> Fail
// // 72 --> Pass
// // 88 --> Pass
// // 40 --> Pass


// // 5. Capitalize names
// // Real life: Display usernames properly
// const names = ['rahul', 'neha', 'amit'];
// const formattedNames = names.map(name =>
//   name[0].toUpperCase() + name.slice(1)
// );
// // ans and why:["Rahul", "Neha", "Amit"]
// // name[0].toUppercase() + name.slice(1) --> capitilize first letter only

// // 6. Apply 10% discount
// // Real life: Shopping sale
// const prices = [500, 1000, 1500];
// function applyDiscount(price) {
//   return price - price * 0.10;
// }
// const discounted = prices.map(applyDiscount);
// // ans and why : [450, 900, 1350]
// // price 10%
// // 500 * 0.10 --> 450
// // 1000 * 0.10 --> 900
// // 1500 * 0.10 --> 1350


// // 7. Add bonus points to scores based on condition
// // Real life: Game scoring system
// const scores = [45, 60, 85];
// const finalScores = scores.map(score => {
//   if (score >= 80) return score + 20;
//   if (score >= 50) return score + 10;
//   return score;
// });
// // ans and why : [45, 70, 105]
// // Score >= 80 --> +20
// // Score >= 50 --> +10
// // 45 --> 45
// // 60 --> 70
// // 85 --> 105

// // 8. Convert temperatures with formula
// // Real life: Weather app
// const celsius = [0, 20, 30];
// function toFahrenheit(temp) {
//   return (temp * 9/5) + 32;
// }
// const fahrenheit = celsius.map(toFahrenheit);
// // ans and why: [32, 68, 86]
// // 0 * 9/5 + 32 --> 32
// // 20 * 9/5 +32 --> 68
// // 86 * 9/5 +32 --> 86

// // 9. Generate table of numbers
// // Real life: Math learning app
// const numbers = [1, 2, 3, 4];
// const tableOfTwo = numbers.map(num => num * 2);
// // ans and why: [2, 4, 6, 8]
// // 1 * 2 --> 2
// // 2 * 2 --> 4
// // 3 * 2 --> 6
// // 4 * 2 --> 8
// // multiply by 2 

// // 10. Combine map with string formatting
// // Real life: SMS notification system
// const balances = [500, 1200, 300];
// const messages = balances.map(balance =>
//   `Your balance is ₹${balance}`
// );
// // ans and why : (3) ['Your balance is ₹500', 'Your balance is ₹1200', 'Your balance is ₹300']

// // ### 1. Get even numbers
// // **Real life:** Find even roll numbers
// const number = [1, 2, 3, 4, 5, 6];
// const evenNumbers = number.filter(num => num % 2 === 0);
// // ans and why : [2, 4, 6]
// // num % 2 === 0
// // even number 
// // 1 → not divisible
// // 2 → divisible
// // 3 → not divisible
// // 4 → divisible
// // 5 → not divisible
// // 6 → divisible


// // ### 2. Filter adults
// // **Real life:** Allow only 3+ users
// const ages = [2, 1, 10, 16, 5];
// function isAdult(age) {
//   return age >= 18;
// }
// const adults = ages.filter(isAdult);
// // ans and why :[]
// // age >= 18
// // no age is greater than 18 so it will be empty

// // ### 3. Remove empty items
// // **Real life:** Clean user input
// const inputs = ['Hello', '', 'World', '', 'JS'];
// const validInputs = inputs.filter(text => text !== '');
// // ans and why : ["Hello", "World", "JS"]
// // filter removes empty strings 

// // ### 4. Filter passing marks
// // **Real life:** Exam result system
// const marks2 = [35, 72, 88, 40, 25];
// const passedStudents = marks2.filter(mark => mark >= 40);
// // ans and why : [72, 88, 40]
// // mark >= 40
// // 72 
// // 88
// // 40 
// // removes 35 and 25



// // ### 5. Get affordable prices
// // **Real life:** Shopping app price filter
// const prices1 = [199, 499, 999, 1499, 299];
// const affordable = prices1.filter(price => price <= 500);
// // ans and why : [199, 499, 299]
// // filter price <= 500

// // ### 6. Filter long words
// // **Real life:** Search keyword validation
// const words = ['hi', 'hello', 'javascript', 'ok'];
// function isLongWord(word) {
//   return word.length > 3;
// }
// const longWords = words.filter(isLongWord);
// // ans and why :["hello", "javascript"]
// // word.length > 3
// // word length hmust be higher than 3 

// // ### 7. Filter positive numbers
// // **Real life:** Bank transaction validation
// const transactions = [200, -100, 500, -50, 300];
// const credits = transactions.filter(amount => amount > 0);
// // ans and why : [200, 500, 300]
// // negative value removes 

// // ### 8. Filter numbers within a range
// // **Real life:** Score selection
// const scores1 = [45, 60, 85, 30, 90];
// const selectedScores = scores1.filter(score => score >= 50 && score <= 90);
// // ans and why : [60, 85, 90]
// // Score between 50 and 90
// // 60, 85 , 90 
// // removes 45 and 30


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
// Why: (45, 60, 90) → calories → total


/* ==============================================
Q3. Exam System – Average of Passed Marks
============================================== */

const marks2 = [35, 72, 88, 40, 25, 90];

const passed = marks2.filter(mark => mark >= 40);

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

const transactions2 = [1000, -500, 2000, -300, 1500];

const creditedAmount = transactions2
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

const total_Salary = salaries
  .filter(sal => sal > 20000)
  .map(sal => sal + 2000)
  .reduce((sum, sal) => sum + sal, 0);

console.log(total_Salary);
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
 