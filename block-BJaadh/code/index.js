// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/
let numbersCopy = [...numbers];
let stringsCopy = [...strings];
// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.toString());
// - Add two new words in the strings array "called" and "sentance"
console.log(strings.push("called","sentence"));
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(' '));
// - Remove the first word in the array (strings)
console.log(strings.shift());
// - Find all the words that contain 'is' use string method 'includes'
for(let value of strings){
  if (value.includes('is')){
    console.log(value);
  }
}

// - Find all the words that contain 'is' use string method 'indexOf'
let is =[];
let stringsIs=strings.indexOf('is');
is.push(strings[stringsIs]);
console.log(is);
// - Check if all the numbers in numbers array are divisible by three use array method (every)
let divByThree = (element)=> element%3 === 0;
console.log(numbers.every(divByThree));
// -  Sort Array from smallest to largest
numbers.sort();
console.log(numbers);
// - Remove the last word in strings
strings.pop();
console.log(strings);
// - Find largest number in numbers
// for(i=0;i<=numbers.length - 1; i++){
//   numbersCopy.toString(i).charAt(i) > numbersCopy.toString(i+1).charAt(i+1)? console.log(numbers[i]): console.log(numbers[i+1]);
// }
let max= numbers.reduce(function(a,b){
  return Math.max(a,b);
},0);
console.log(max);
// - Find longest string in strings
// for(i=0; i<=strings.length - 1; i++){
//   let max;
//   if(strings[i].length > strings[i+1].length)
//    max=strings[i];
//    else{
//     max=strings[i+1];
//    }
// }
// console.log(max);

// - Find all the even numbers
let evenNo= [];
numbers.forEach(function (number){
  if(number %2 == 0){
    evenNo.push(number);
  }
})
console.log(evenNo);
// - Find all the odd numbers
let oddNo= [];
numbers.forEach(function (number){
  if(number %2 == 1){
    oddNo.push(number);
  }
})
console.log(oddNo);
// - Place a new word at the start of the array use (unshift)
strings.unshift('Altcampus');
// - Make a subset of numbers array [18,9,7,11]
numSubset=[];
numbers.forEach(function(number){
  if(number == 18 || number == 9 || number == 7 || number == 11){
    numSubset.push(number);
  }
})
console.log(numSubset);
numSubset.pop();

// - Make a subset of strings array ['a','collection']
strSubset=[];
strings.forEach(function(str){
  if(str == 'a' || str == 'collection'){
    strSubset.push(str);
  }
})
console.log(strSubset);
// - Replace 12 & 18 with 1221 and 1881
numbers.splice(3,1,1221);
numbers.splice(4,1,1881);
// console.log(numbers.replace('12','1221'));
// - Replace words in strings array with the length of the word
for(i=0; i< strings.length; i++){
  strings.splice(i,1,strings[i].length);
}
console.log(strings);
// - Find the sum of the length of words using above question
let reducer = (currentValue, previousValue) => previousValue + currentValue;
console.log(strings.reduce(reducer));

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
for(i=0; i<=3;i++){
  if(customers[i].firstname.includes('J')){
    console.log(customers[i].firstname);
  }
}
// - Create new array with only first name
let fn=[];
for(i=0;i<=3;i++){
  fn.push(customers[i].firstname);
}
console.log(fn);
// - Create new array with all the full names (ex: "Joe Blogs")
let ln=[];
for(i=0;i<=3;i++){
  ln.push(customers[i].lastname);
}
console.log(ln);
// - Sort the array created above alphabetically
fn.sort();
ln.sort();
console.log(fn);
console.log(ln);
// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowel=[]
for(i=0; i<=3;i++){
  if(customers[i].firstname.includes('o')){
    vowel.push(customers[i].firstname);
  }
  else if(customers[i].firstname.includes('e')){
    vowel.push(customers[i].firstname);
  }
  else if(customers[i].firstname.includes('i')){
    vowel.push(customers[i].firstname);
  }
  else if(customers[i].firstname.includes('a')){
    vowel.push(customers[i].firstname);
  }
  else if(customers[i].firstname.includes('u')){
    vowel.push(customers[i].firstname);
  }
  else{
    
  }
}
console.log(vowel);