// I want to use a loop to tell the computer all the possible suites and ranks that exisit

let  suits = ['♥️', '♣️', '♦️', '♠️'];
//the single quote will help javascript treat them as text-based strings
let ranks = ['2' , '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
//the "=" sign serves as the assignment operater
//the single quotes will tell javascript to treat the numbers as text-based strings and not numbers
/*
for(let suitCounter = 0; suitCounter< 4; suitCounter++) {
    console.log(suitCounter)
}
---        🃏  this is my test to make sure my variable met the conditions of <4 and added 1
*/

for(let suitCounter = 0; suitCounter< 4; suitCounter++) {
    suits[0] //♥️
    suits[1] //♣️
    suits[2] //♦️
    suits[3] //♠️
console.log(suits[suitCounter]);

}