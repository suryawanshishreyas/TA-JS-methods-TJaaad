Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
    - Paramter: No parameter is required.
    - Return : A new string converted to upper case.
    - Example:
    ``` js
      let hero = 'Daredevil';
      hero.toupperCase(); // "DAREDEVIL"
      let villain = 'Wilson Fisk';
      villain.toupperCase(); //"WILSON FISK"
      let savior = 'Punisher';
      savior.toupperCase(); // 'PUNISHER'
      ```
    'toupperCase' return the string into uppercase values(string).

3. `toLowerCase`
    - Parameter: No parameter is required.
    - Return: A new string converted to lower case.
    - Example
    ``` js
      let hero ='Daredevil';
      hero.tolowerCase(); //'daredevil'
      let villain ='Wilson Fisk';
      villain.tolowerCase(); // 'wilson fisk'
      let savior = 'Punisher';
      savior.tolowerCase(); // 'punisher'
      ```
    'tolowerCase' returns the string into lowercase values(string).
4. `trim`
    - Parameter: No parameter is required
    - Return : String with whitespaces removed from its start and end.
    - Example
    ``` js
      let hero = '   Daredevil   ';
      hero.trim(); // 'Daredevil'
      let villain = '    Wilson    Fisk   ';
      villain.trim(); // 'Wilson Fisk'
      let savior = '    Punisher    '
      savior.trim(); //'Punisher'
      ```
    `trim` return with a string free of any whitespaces.
5. `trimEnd`
    - Parameter: No parameters are required.
    - Return: String with whitespaces removed from the end of the calling string.
    - Example:
    ``` js
      let hero = '   Daredevil   ';
      hero.trimEnd(); // '   Daredevil'
      let villain = '    Wilson    Fisk   ';
      villain.trimEnd(); // '   Wilson Fisk'
      let savior = '    Punisher    '
      savior.trimEnd(); //'   Punisher'
      ```
    `trimEnd` removes all whitespaces at the end of calling string.
6. `trimStart`
    - Parameter: No parameters are required.
    - Return: String with whitespaces removed the start of the calling string.
    - Example:
    ``` js
      let hero = '   Daredevil   ';
      hero.trimStart(); // 'Daredevil   '
      let villain = '    Wilson    Fisk   ';
      villain.trimStart(); // 'Wilson Fisk   '
      let savior = '    Punisher    '
      savior.trimStart(); //'Punisher   '
7. `concat`
    - Parameter: One or more strings to concatenate with.
    - Return : New string with combined text of the strings provided.
    - Example:
    ``` js
      let hero ='Daredevil';
      hero.concat("is a Vigilante"); //' Daredevil is a Vigilante'
      "Hello ".concat(hero); // 'Hello Daredevil'
      "Hello ".concat(hero, " Welcome to Hells Kitchen"); //'Hello Daredevil Welcome to Hells Kitchen'
    ```
    `concat` helps concatenating one or more strings to a combined string provided with new value.

8. `endsWith`
    - Parameter: character or value to be searched at the end of the string.
    - Return: Returns true if the given parameter is present at the end of string.
    - Example:
    ``` js
      let hero ='Daredevil';
      hero.endsWith('l'); // true
      hero.endsWith('L'); //false (JS is case sensitive as 'l' is different from 'L').
      hero.endsWith(8); //false
    ```
    `endsWith` helps searching for the desired string at the end of string provided.

9. `includes`
    - Parameter: includes(searchString), includes(searchString, position)
      String to be searched for within the string.
    - Return: returns true if the search string is present in the given string.
    - Example: 
    ``` js
      let hero = "Batman";
      hero.includes('Bat'); // true
      hero.includes('Man'); // false (JS is case sensitive with lower and uppercase values)
      hero.includes('   Batman   '); // false
    ```
    `includes` helps identifying the identical string in the given string. returns true if its present otherwise false.

10. `indexOf`
    - Parameter: includes index(searchValue)
                 index(searchValue, fromIndex)
    - Return: Index of the first occurrence of the searchValue, or -1 if not found.
    - Example:
    ``` js
      let hero= 'Who is Spiderman?';
      hero.indexOf('Who'); // returns 0
      hero.indexOf('who'); // returns -1
      hero.indexOf('Spiderman',5); // returns 7
    ```
  `indexOf` helps finding the index of any searchterm located in the given string.

11. `lastIndexOf`
    - Parameter: lastIndexOf(searchvalue)
    lastIndexOf(searchvalue, fromIndex) 
    - Return: Index of last occurrence of the search value or -1 if not found.
    - Example:
    ``` js
      let hero = "Aquaman from Atlantis is a drunk man with gods power";
      hero.lastIndexOf('drunk'); // returns 27
      hero.lastIndexOf('man') // returns 33
      hero.lastIndexOf('Man') // returns -1
    ```
  `lastIndexOf` helps finding the last known index of search term provided if its getting repeated in the given string. It is not necessary for string to repeat the given string , it will return with index number otherwise.

12. `padEnd`
    - Parameter: padEnd(targetLength)
      padEnd(targetLength, padString)
    -Return: returns with string of target length and end the current string with padString.
    - Example:
    ``` js
      let hero = "Monkey D Loofy";
      hero.padEnd(20, "!"); // 'Monkey D Loofy!!!!!!'
      hero.padEnd(10,'?');//'Monkey D Loofy'
      hero.padEnd(0); // 'Monkey D Loofy'
    ```
  `padEnd` creates a string of defined length from user and if provided with some other string it will be continued after the end of the current string which is 'padString'.

13. `padStart`
    - Parameter: padStart(targetLength)
      padStart(targetLength, padString) this is optional.
    - Return: Returns a string of specified targetLength with padString applied at the start.
    - Example:
    ``` js
      let hero = "Soldiers of India";
      hero.padStart('33','Real Heroes are ');// 'Real Heroes are Soldiers of India'
      hero.padStart('50', 'Army of Indian Soldiers'); // 'Army of Indian SoldiersArmy of InSoldiers of India'
      hero.padStart('50', '******');// '*********************************Soldiers of India'
    ```
  `padStart` creates a string of defined length from user and if provided with some other string it will be written at the start of the current string which is padString.
14. `repeat`
    - Parameter: An interger with values from 0 and +Infinity , which indicates the no. of times the string is going to repeat.
    - Return: A new string with provided number of times it is going to repeat.
    - Example:
    ``` js
      let hero = "A soldier is never off duty";
      hero.repeat(5)//'A soldier is never off dutyA soldier is never off dutyA soldier is never off dutyA soldier is never off dutyA soldier is never off duty'
      let hero = "Tanjiro";
      hero.repeat(3) // 'TanjiroTanjiroTanjiro"
    ```
  `repeat` creates a new string of provided input with multiple times provided with appropriate input between 0 to +infinity.
15. `replace`
    - Parameter: takes input as a string to be replaced in the given string
      str.replace('textToBeReplaced','inputString')
    - Return: Returns a new string with changes in current string which gets replaced by input string from user.
    - Example:
    ``` js
      let hero = "Spiderman";
      hero.replace('Spider','Bat');// 'Batman'
      let savior = "A solider is never on duty";
      savior.replace('on','off');//'A solider is never off duty'
      ```
  `replace` returns input string with the string replaced by input string.

16. `slice`
    - Parameter: slice(beginIndex) extracts string from the given index.
      slice(beginIndex, endIndex) endIndex is optional
    - Return: A new string with extracted/omitted given part of it.
    - Example: 
    ``` js
      let hero = "A soldier is never off duty";
      hero.slice(5); //'dier is never off duty'
      hero.slice(-5)// 'duty'
      hero.slice(5.9);//'dier is never off duty'
    ```
  `slice` returns with extracted part of string provided with indexes to be omitted from or extracted from.
17. `split`
    - Parameter: split()
    split(separator)
    split(separator, limit)
    - Return: Array of strings , split at every point where separator is found in the string.
    - Example:
    ``` js
      let hero =" Batman And Superman";
      hero.split(' ',3); // ['Batman', 'And', 'Superman']
      hero.split('',3); //['B', 'a', 't']
      hero.split(10); // ['Batman And Superman']
    ```
  `split` returns with the array of strings depending on the separator and limit provided as arguments.

18. `substring`
    - Parameter: substring(indexStart)
    substring(indexStart, indexEnd)
    - Return : returns the string between the provided index as input.
    - Example: 
    ``` js
      let hero= "Batman loves Oracle but likes the company of Wonder Woman";
      hero.substring(5,25)//'n loves Oracle but l'
      hero.substring(25,5) // 'n loves Oracle but l'
      hero.substring(-5,-10)// ''
    ```
  `substring` checks whetther beginIndex < endIndex if false it swapps them and returns output as string between those given indices.

