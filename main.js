/*Write a JavaScript program where the program takes a random integer between 1 and 10,
                                                 and the user is then prompted to input a guess number.
 The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched". */

let a=prompt("enter the value");
let b=prompt("enter the value");

let num=function(a,b){
    if(a==b){
        console.log("Good Work");
    }
    else{
        console.log( " Not Matched");
    }

}
num(a,b)
 