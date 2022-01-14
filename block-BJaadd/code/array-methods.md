Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
    - Parameter: takes single argument which can be a value.
    - Return: concatenates the elements of array with the specified value.
    - Example:
      ```js
      let numbers =[1,3,5];
      numbers.join('-'); //'1-3-5'
      let colors = ['red','green','blue'];
      colors.join('.'); //'red.green.blue'
      let toss=['heads','tails'];
      toss.join('/'); //'heads/tails'
      ```
    - `join` accepts a value and add it between all the elements of array in simple words it joins them as the function name suggests itself.
    - No it doesnt mutate the original array.

3. `flat`
    - Parameter: flat() or flat(depth) where depth defines upto the number of arrays to be concatenated into single.'depth' is optional.
    - Return: Returns a new array with all sub-arrays concatenated into a single array. 
    - Example:
      ```js
        let array1=[1,2,[3,4],5];
        array1.flat(); // [1,2,3,4,5]
        let array2=[10,[5,10],20,[5,10,[15,20]],30,40];
        array2.flat(2)// []10, 5, 10, 20, 5, 10, 15, 20, 30, 40]
        let array3 = ['hi',['namaste','hello',['swagat hai','namaskar'],'wassup'],'yo'];
        array3.flat(3);// ['hi', 'namaste', 'hello', 'swagat hai', 'namaskar', 'wassup', 'yo']
      ```
    -`flat` accepts depth which is optional and creates a new array which removes all nested arrays inside it without removing the elements. Resulting into a single array.
    -No it doesnt mutate the array.
4. `push`
    - Parameter: push(element) or push(element 1, element2,...,elementN) so upto n elements can be pushed into an array.
    - Return: When elements are pushed using push(),it gets added to the end of the array and it returns the new length of the array as output.
    - Example:
      ```js
        let numbers=[1,2,3,4,5];
        numbers.push(6,7,8,9);// 9
        let colors=['red','green','blue'];
        colors.push('white');//4
        let evenNo=[2,4,6];
        evenNo.push(8,10);//5
      ```
    -`push` takes elements as input and add to the end of the same array.Returns the new length of the array as output.
    -It mutates the array.

5. `indexOf`
    - Parameter: indexOf(searchelement) or indexof(searchElement, starting Index) takes argument of any element user wishes to search for.
    - Return: Returns index of the element present in that array otherwise returns -1.
    - Example:
      ```js
        let numbers=[1,2,3,4];
        numbers.indexOf(4);//3
        let colors=['red','green','blue'];
        colors.indexOf('green');//1
        let actors=['salman','shahrukh','amir','akshay','saif','nagarjun','sachin'];
        actors.indexOf('sachin',2);//6
      ```
    -`indexOf` takes search element which user wishes to search for in a array which is defined.And if that element is present in that array it returns the position of that array or index as value.
    - It does not mutate the array.
6. `lastIndexOf`
    - Parameter: lastIndexOf(searchElement, fromIndex) fromIndex is optional and searchElement is the value user wishes to search for.
    - Return: It returns the last known occurrence of the search element and gives its position as output.
    - Example:
      ```js
        let numbers= [1,2,3,1,4];
        numbers.lastIndexOf(1);// 3
        let colors = ['red','green','blue','white','green','yellow'];
        colors.lastIndexOf('green',5);//4
        let sirnames=['khan','patel','patil','raj','kumar','khan'];
        sirnames.lastIndexOf('khan');// 5
      ```
    -`lastIndexOf` takes an element as a search value and searches for it in the array and returns its last known postion . If an element is repeating itself in that array it will give its last repitive values index. and if fromIndex is defined while declaring lastIndexOf then it will search backwards from that index.
    - No it doesnt mutate the array.

7. `includes`
    - Parameter: includes(searchElement, fromIndex), second argument fromIndex is optional where as searchElement takes value user wishes to search for.
    - Return: Return true if searchElement is present in the array and false otherwise.
    - Example:
      ```js
        let numbers=[1,2,3,4];
        numbers.includes(1);//true
        let numbers=[1,2,3,4];
        numbers.includes('1');//false
        let colors=['red','green','blue'];
        colors.include('white'); // false
      ```
    -`includes` returns boolean value of either true or false depending upon the searchterm present in the array or not.
    -No it doesnot mutate the array.

8. `reverse`
    - Parameter: reverse() takes no arguments.
    - Return: Returns the reverse of the array where first array element becomes last and vice versa last array element becomes first.
    - Example:
      ```js
        let numbers=[1,2,3,4,5];
        numbers.reverse(); // [5,4,3,2,1]
        let colors=['red','green','blue'];
        colors.reverse();//['blue','green','red']
        let toss = ['heads','tails'];
        toss.reverse();// ['tails','heads']
      ```
    -`reverse` takes no arguments while returns the exact same length of the array but in reverse order where first element becomes last and last element becomes first.
    - Yes it does mutate the array.

9. `every`
    - Parameter: every(callback function cb, element) where callback function checks certain conditions
    - Return: returns true or false depending on whether all elements in the array pass the test called by callback function or not.
    - Example:
      ```js
        let numbers=[1,2,3,4];
        let exist= (num)=> num > 0;
        console.log(numbers.every(num));// true
        let colors=['red','green','blue'];
        let color=(color)=>color.length>1;
        console.log(colors.every(color)); // true
        let colors=['red','green','blue'];
        let color=(color)=>color.length>3;
        console.log(colors.every(color)); // false
      ```
    -`every` returns true if all the test performed on elements of array to be pass, otherwise false.
    -No it does not mutate the array.

10. `shift`
    - Parameter: shift() takes no arguments.
    - Return: shift() removes first element of the array and returns that element
    - Example:
      ```js
        let numbers=[1,2,3,4];
        numbers.shift(); // [1]
        let colors=['red','green','blue'];
        colors.shift(); // ['red']
        let toss= ['heads','tails'];
        toss.shift();// ['heads']
      ```
    -`shift` removes first element of the array and returns the element as output.
    -Yes it mutates the array.
11. `splice`
    - Parameter: splice(start, deleteCount, item1) .
    - Return: Returns array containing deleted elements.Otherwise empty array.
    - Example:
      ``` js
        let season=['summer','winter'];
        season.splice(1,0,'rainy'); //[]
        let zodiac = ['ares','taurus','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces'];
        zodiac.splice(2,1,'Gemini'); // ['cancer']
        let evenNo=[2,4,5,8,10];
        evenNo.splice(2,1,6);//[5]
      ```
    - `splice`- spilce() methods removes element at start index according to delete count also furthur elements can be added at particular start index.
    - Yes it mutates the array.
12. `find`
    - Parameter: find(callback function,element).
    - Return: find() returns first element on furthur operation on calling function.
    - Example:
      ``` js
        let divBy10 = [5,10,20,25];
        let num = divBy10.find(number => number%10 === 0);
        console.log(num);//10
        let firstOddNo = [3,1,5,9];
        let num = firstOddNo.find(number => number %2 ==1);
        console.log(num);//3
        let names = ['Rohan','Shreyas','Nagesh','Barka'];
        let ogName = names.find(ogname => ogname === 'Rohan');
        console.log(ogName);//Rohan
      ```
      -`find` undefined is returned if none of the values satisfy the test condition provided by the callback function. Returns first element of the array on successful test passing.
      - No it does not mutate the array.
13. `unshift`
    - Parameter: unshift() takes N elements of arguments.
    - Return: it adds one or more elements into the starting of the array and returns the new length of the array.
    - Example:
      ```js
        let numbers=[1,2,3,4];
        numbers.unshift(5,6,7);// 7
        let oddNo=[1,3,5,7];
        oddNo.unshift(9,11); // 6
        let letters = ['a','b','c','d'];
        letters.unshift('e','f','g'); // 7
      ```
    -`unshift` takes n arguments and add them at the starting of the array and returns the new length of the array as output.
    - Yes it mutates the array.
14. `findIndex`
    - Parameter: findIndex(callback function, element)
    - Return: findIndex() method returns the index of the first element which satisfies the test condition.
    - Example:
      ``` js
        let city=['Pune','Mumbai','Nashik','Solapur','Kolhapur'];
        let home = city.findIndex(cityy=> cityy == 'Solapur');
        console.log(home);//3
        let games=['Fortnite','PUBG','Sekiro','Valorant'];
        let myFav= games.findIndex(fav => fav == 'Fortnite');
        console.log(myFav);//0
        let gadgets=['TV','Mobile','iPad','Kindle','SmartWatch'];
        let myGadget=gadgets.findIndex(gadget => gadget == "iPad");
        console.log(myGadget);//2
      ```
    -`findIndex` returns the index of first element found on success of callback function.
    -No it does not mutate the array.
15. `filter`
    - Parameter: filter(callback function, element) cb acts as test function necessary to operate filter method .
    - Return: Returns a new array which pass the test condition of cb.
    - Example:
      ``` js
        let oddNo = [1,3,4,5,6,7,9];
        let odd=oddNo.filter(num => num%2==1);
        console.log(odd);// [1,3,5,7,9];
        let evenNo= [1,2,4,5,6,8];
        let even=evenNo.filter(no => no%2==0);
        console.log(even);//[2,4,6,8]
        let array=[1,"hello",3,4,"Altcampus"];
        let digits=array.filter(numbers => numbers%2===0);
        console.log(digits);//[4]
      ```
    -`filter` returns a new array which consists of passed elements from test function.
    -No it does not mutate the array.
16. `flat`
    - Parameter: flat() or flat(depth) where depth can be optional.
    - Return: returns a new array with all nested arrays concatenated upto the depth defined.
    - Example:
      ```js
        let array=[1,[2,3,5,[4,3,5,[95,5,2,4,[12,45,23,135]],123,452],123,4234]];
        array.flat(5);// [1, 2, 3, 5, 4, 3, 5, 95, 5, 2, 4, 12, 45, 23, 135, 123, 452, 123, 4234]
        array.flat(2);//[1, 2, 3, 5, 4, 3, 5, Array(5), 123, 452, 123, 4234]
        array.flat();//[1, 2, 3, 5, Array(6), 123, 4234]
      ```
    -`flat`returns a new array with all nested arrays concatenated upto the depth defined.
    -No it doesnot mutate the array.
17. `forEach`
    - Parameter: forEach(callback function, element)
    - Return: forEach() method executes once per element of an array.
    - Example:
      ```js
        let array=[1,2,3,4,5,6,7,8];
        array.forEach(number=> console.log(number%2==0? number: ""));//2 4 6 8
        array.forEach(number=> console.log(number));//1 2 3 4 5 6 7 8 
        array.forEach(number=> console.log(number - 1));// 0 1 2 3 4 5 6 7
      ```
    -`forEach` method executes once per element of an array.
    -No it doesnot mutate the array.
18. `map`
    - Parameter: map(callback function, element)
    - Return: return with a new array with results of calling function on every element in array.
    - Example:
      ```js
        let array=[1,2,3,4,5];
        array.map(num=> num* 3);//[3, 6, 9, 12, 15]
        array.map(num=> num/2);//[0.5, 1, 1.5, 2, 2.5]
        array.map(num=>num%2) //[1, 0, 1, 0, 1]
      ```
    -`map` with a new array with results of calling function on every element in array.
    -No it doesnot mutate the array.
    
19. `pop`
    - Parameter: No argument.
    - Return: pop() method removes the last element of the array remaining all others intact.
    - Example:
      ``` js
        let array=[1,2,3,4,5,6];
        array.pop();//[1,2,3,4,5] removed element [6]
        let city=['solapur','pune','mumbai','nashik'];
        city.pop();//['solapur','pune','mumbai'] removed element ['nashik']
        city.pop();//['solapur','pune']
      ```
    -`pop` removes last element of the array and returns with original length -1.
    -Yes it mutates the array.
20. `reduce`
    - Parameter: reduce(callback function, initial value)
    - Return: The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in   the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
    - Example:
      ```js
        let number=[2,4,6,8];
        let sub=(a,b)=>a-b;
        number.reduce(sub); //-16
        let add=(a,b)=> a+b;
        number.reduce(add);//20
      ```
    -`reduce` results in running the reducer across all elements of the array is a single value.
    - No it does not mutate the array.

21. `slice`
    - Parameter: slice(start,end)
    - Return:The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array
    - Example:
      ```js
        let number=[1,2,3,4,5,6];
        number.slice(2);//[3,4]
        number.slice(1,3)//[2,3,4]
        numbers.slice(1,4)//[2,3,4]
      ```
    -`slice` returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
    -No it does not mutate the array.
22. `some`
    - Parameter:some(callback function,element)
    - Return: The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false
    - Example:
      ```js
        let array = [2,4,5,6,8];
        array.some(num => num%3 === 0);// true
        let house=['city','village','beach','forest'];
        house.some(city=> city === 'city');// true
        let array=[1,'hello','hi',2,3.6,'altcampus'];
        array.some(number => number%1 === typeof(num));// false
      ```
    -`some` returns true if atleast one value in the array succeds in the callback function, otherwise false.
    - No it doesnot mutate the array.

