let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(...words){
  return words.reduce((c,v) => c.length > v.length? c:v);
}
console.log(findLongestWord( 'mystery',
'brother',
'aviator',
'crocodile',
'pearl',
'orchard',
'crackpot',
'rhythm',))
// - Convert the above array "words" into an array of length of word instead of word.
let newArray=[]
let exchange = (word) => newArray.push(word.length);
console.log(words.every(exchange));
// - Create a new array that only contains word with atleast one vowel.
// function findVowels(words){
//   console.log(words.match((/[aeiou]/ig)));
// }
// findVowels(words);
// - Find the index of the word "rhythm"
console.log(words.indexOf('rhythm'));
// - Create a new array that contians words not starting with vowel.
let rex=/^[aeiou]/i;
let results= words.filter(str=>!rex.test(str));
console.log(results);
// - Create a new array that contianse words not ending with vowel
// let vowels=/[aeiou]/i;
// for(i=0;i<=words.length;i++){
//   if(words[i].slice(words[i].length - 1).match(vowels)){
//     words.splice(i,1);
//   }
//   else{
//     console.log(words);
//   }
// }

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let numbers=[1,2,3,4];
function sumArray(num){
  return num.reduce((a,b)=> a+b,0);
}
console.log(sumArray(numbers));
  
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let n=[1,2,3,4,5,6,7,8,9,10];
function mul(num){
  return num *3;
}
let mulBy3= n.map(mul);
console.log(mulBy3);
// - Create a new array that contains only even numbers
let allNo=[1,2,3,4,5,6,7,8,9,10]
function even(n){
  return n%2==0? n:'';
}
let evenNo= allNo.map(even);
console.log(evenNo);
// - Create  a new array that contains only odd numbers.
let allNum=[1,2,3,4,5,6,7,8,9,10]
function odd(n){
  return n%2==1? n:'';
}
let oddNo= allNum.map(odd);
console.log(oddNo);
// - Create a new array that should have true for even number and false for odd numbers.
let all=[1,2,3,4,5,6,7,8,9,10]
function alll(n){
  return n%2==0? true: false;
}
let allNums= all.map(alll);
console.log(allNums);
// - Sort the above number in assending order.
console.log(all.sort());
// - Does sort mutate the original array?
//Yes
// - Find the sum of the numbers in the array.
let sumofAll= all.reduce((a,b)=> a+b,0);
console.log(sumofAll);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];
let userNo=[1,2,3,4];
function averageNumbers(num){
  return num.reduce((a,b)=>a+b,0)/num.length;
}
let average= averageNumbers(userNo);
console.log(average);
// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
let words2=['hey','hi','hello','wassup'];
function averageWordLength(word){
  return word.reduce((a,b)=>(a+b).length,0)/word.length;
}
let average2= averageWordLength(words2);
console.log(average2);