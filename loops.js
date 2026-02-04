// // loops -- repeating code blocks 
// // 1 1 1 1 1 1
// // 1 2 3 4 5 6

// // for loop
// // why use for-loop?  when you know how many times you want to repeat a block of code
// // print 1 to 10 --> console.log(1); console.log(2);...console.log(10);
// // kaya thi javanu che --> kaya sudhi javanu che --> kevi rite javanu che
// // for(ex. 1 -> 50 -> increment by 1)
// // (start; end; change)
// // for (let i = 1; i <= 10; i++) {
// //     console.log(i);
// // }

// // for(let k = 10; k >= -1; k--){
// //     console.log(k);
// // }

// // for (let j = 1; j <= 10; j++){
// //     // document.writeln("hello");
// //     console.log("hello");
// // }

// // for (let m = 1; m <= 10; m += 2){
// //     console.log(m);
// // }

// // for (let n = 2; n <= 20; n += 2){
// //     console.log(n);
// // }

// // while loop -- do while loop
// //kaya thi javanu che --> kevi rite javanu che --> kaya sudhi javanu che
// // while (ex. 1 -> Hello World --> stop when condition false)
// // start
// // while(end){
// // code
// // change
// // }


// // let d = 1 ;
// // while (d <= 10){
// //     console.log("While loop: ",d);
// //     d++;
// // }

// // make it true loops
// let k = 20;
// while (k = 50){
//     console.log(k);
//     k++;
// }

// // let a = 60;
// // while (a <= 20){
// // console.log(a);
// // a ++;
// // }

// // let c = 30;
// // while (c > 20){
// //     console.log(c);
// //     c++;
// // }

// // let d= "hello";
// // while (d >= 20){
// //     console.log(d);
// //     d++;
// // }

// // let f = 50;
// // while (f <= 60){
// //     console.log(f);
// //     f--;
// // }

// // let q = 50;
// // while (q <= 60){
// //     console.log(q);
// //     --q;
// // }

// // do while loop
// // do{} while end;
// // start
// // do{
// // code
// // change}
// // while(end);
// let j = 12; // start
// do {
//     console.log("Do while loop:", j); // code
//     j++; // change (condition)
// } while (j <= 20); // while check after executing code block (end)


// // // break
// for (let k = 1; k <= 201; k++) {
//     console.log("loop with break",k);
//     if(k == "30"){
//         break;
//     }
// }

// // // continue
// for(let a = 1; a <= 10; a++){
//     if(a === 5){
//         continue;
//     }
//     console.log(a);
// }

// // for-of, forEach for Arrays
// // for-in for Objects

// example 1:
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// example 2:
// let d = 10 ;
// // while (d == 1){
// //     console.log("While loop: ",d);
// //     d++;
// // }


// // example 3:
// for(let i=1; i<=20; i++){
//     if(i%2 ===0){
//     console.log(i);
//     }
// }

// // example 4:
// let t= 1;
// while(t<=15){
//     if(t%2 !==0){ // or (t%2 ===1)
//     console.log(t);
//     }
//     t++;
// }

// //Example 5:
// // Print the multiplication table of 5.

// for(let i=1; i<=10; i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }

// // example 6:
// // Find the sum of numbers from 1 to 100 using a loop.
// let sum = 0;
// for(let i=1; i<=100; i++){
//     // let sum =0;
//     sum = sum + i;
//     console.log(sum);
// }
// console.log(sum);

// // example 7:
// // Print all numbers between 1 to 50 that are divisible by 3
// for(let i=1; i<=50; i++){
//     if(i%3 === 0){
//         console.log(i);
//     }
// }

// // example 8:
// // Ask the user for a number and print whether each number from 1 to that number is even or odd.
// let num = prompt("give a number");
// for(let i=1; i <=numl ;i++){
//     if(i%2 ===0){
//         console.log(i, " is even");
//     }else{
//         console.log(i, " is odd");
//     }
// }

// // example 9:
// // Count how many numbers between 1 to 100 are divisible by 3 o  5.
// for(let i=1; i<=100; i++){
//     if(i%3 ===0 || i%5 ===0){
//         console.log(i);
//     }
// }

// // (Break and Continue)Example 10:
// // Stop at First Multiple of 7
// // Write a Loop from 1 to 100 that:
// // Prints Each number
// // Stop Completely when it finds the first number divisible by 7
// for(let i=1; i<=100; i++){
//     console.log(i);
//     if(i%7 ===0){
//         break;
//     }
// }

// // Break and Continue)Example 11:
// // Skip Multiples of 3
// // Write a Loop From 1 to 20 that:
// // Skip number divisible by 3
// // Prints all other numbers
// for(let i=1; i<=20; i++){
//     if(i%3 ===0){
//         continue;
//     }
//     console.log(i);

// }

// // (Break and Continue)Example 12:
// //Print First 5 Odd Numbers
// // Write a loop from 1 to 100 that:
// // Prints only 5 odd numbers
// // Then stops the loop
// // Use Both if, continue and a counter + break
// count = 0;
// for(let i =1; i<=100; i++){
//     if(i%2 ===1){
//         count++;
//         console.log(i)
//     }
//     console.log(i);
//     if(count ===5){cha
//         break;
//     }
// }
