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
let j = 12; // start
do {
    console.log("Do while loop:", j); // code
    j++; // change (condition)
} while (j <= 20); // while check after executing code block (end)


// // break
for (let k = 1; k <= 201; k++) {
    console.log("loop with break",k);
    if(k == "30"){
        break;
    }
}

// // continue
for(let a = 1; a <= 10; a++){
    if(a === 5){
        continue;
    }
    console.log(a);
}

// for-of, forEach for Arrays
// for-in for Objects

