let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Add a new element ('Papaya') into fruits array at end
fruits.push('Papaya');
console.log(fruits);
// Remove the last element from fruits array
fruits.pop();
// Log the current length of fruits array
console.log(fruits.length);
// Remove the first element from fruits and log the value of fruits (use delete arr[0])
delete fruits[0];
console.log(fruits);
// Log the element on index 0 and 1
console.log(fruits[0], fruits[1]);
// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)
if(fruits[0]=='undefined' && fruits[1]== "Banana"){
    fruits.shift();
}
console.log(fruits);
// Add a new element to the start ('Guava') and shift the index of all other to one higher value
fruits.unshift('Guava');
console.log(fruits);
// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value
fruits.unshift('Dragon Fruit');
console.log(fruits);
// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not
let value= fruits.includes('Dragon Fruit',0);
console.log(value);
let value1= fruits.includes('Guava',1);
console.log(value1);
// Update the value of index 1 to `Pears`
fruits.splice(1,0,'Pears');
// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)
fruits.splice(1,0,'Kiwi');
fruits.splice(2,0,'Lemon');
// Remove (slice) all the element from index 5
console.log(fruits.slice(5,8));
// Create another array named moreFruits with values ['Berries', 'Melons']
moreFruits = ['Berries', 'Melons'];
// Concat moreFruits into fruits array (re-assign so the value gets updated)
fruits=fruits.concat(moreFruits);
// Log the name of all fruit in console
console.log(fruits);
// Convert each fruit name to lowercase and log it
lowercaseFruits = fruits.map(lower=> lower.toLowerCase());
// Convert all fruits name into lowercase and store in new array named lowercaseFruits
console.log(lowercaseFruits);
// Convert all fruits name into uppercase and store in new array named uppercaseFruits
uppercaseFruits= fruits.map(upper => upper.toUpperCase());
console.log(uppercaseFruits);

let numbers =[1,2,[3,4]];
let numbersTwo =[1,2,[3,4,[5,6]]];
let numbersThree =[1,2,[3,4,[5,6,[7,8,[9,10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
console.log(numbers.flat(2));
// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
numbersTwo = numbersTwo.flat(3);
subOne= numbersTwo.splice(2,2);
subTwo = numbersTwo.splice(2,2);
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)
// Convert the numbersThree array to one level element.

// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array
numbersThreee = numbersThree.flat(4);
subbOne= numbersThreee.splice(2,2);
subbTwo = numbersThreee.splice(2,2);
subThree= numbersThreee.splice(0,2);
subFour = numbersThreee.splice(0,2);
subFive = numbersThreee.splice(0,2);


// Use forEach to log all the elements of numberThree array
console.log(numbersThree);
numbersThree.forEach(element => console.log(element));
// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map
doubleNumbers = numbersThree.flat(4);
doubleNumbers.map(num => num *2);
// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map
tripeNumbers = numbersThree.flat(4);
tripeNumbers.map(num =>num * 3);

// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map
halfNumbers = numbersThree.flat(4);
halfNumbers.map(num =>num/2);
// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array
oddNumbers = numbersThree.flat(4);
oddNumbers.filter(num =>num %2 == 1);
// Create a new variable named evenNumbers that store all the even numbers in numbersThree array
evenNumbers = numbersThree.flat(4);
evenNumbers.filter(num =>num %2 == 0);
// Find the index of 10 in numbersThree array
index10 = numbersThree.flat(4);
index10.indexOf(10);
// Reverse the values of numbersThree array
reverse=numbersThree.flat(4);
reverse.reverse();
// Reverse the values of numbersTwo array
reverse2=numbersTwo.flat(3);
reverse2.reverse();
// Join all fruits with '-', convert to uppercase and log it
join=fruits.join('-');
console.log(join.toUpperCase());
// Join all fruits with '&', convert to lowercase and log it
join1=fruits.join('&');
console.log(join1.toLowerCase());