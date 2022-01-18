let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopleName = persons.map(a=>a.name);
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map(b=>b.grade);
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map(a=>a.sex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let filteredName= peopleName.filter(a=>a[0].includes('J') || a[0].includes('P'));
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let filteredName2= peopleName.filter(a=>a[0].includes('A') || a[0].includes('C'));
// Log all the filtered male ('M') in persons array
let filteredMale = persons.filter(function(findMale){
  if(findMale.sex.includes('M')){
    return findMale.name;
  }
})
// Log all the filtered female ('F') in persons array
let filteredFemale = persons.filter(function(findFemale){
  if(findFemale.sex.includes('F')){
    return findFemale.name;
  }
})
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
let filteredFemaleCJ = persons.filter(function(findFemale){
  if(findFemale.sex.includes('F')){
    return persons.filter(a=>a.name[0].includes('C') || a.name[0].includes('J'));
  }
})
// Log all the even numbers from peopleGrade array
let evenPeople = peopleGrade.filter(a=> a %2==0);
// Find the first name that starts with 'J' in persons array and log the object
let personJ = persons.filter(a=>a.name[0].includes('J'));
console.log(personJ[0]);
// Find the first name that starts with 'P' in persons array and log the object
let personP = persons.filter(a=>a.name[0].includes('P'));
console.log(personP[0]);
// Find the first name that starts with 'J', grade is greater than 10 and is a female
let personJ10F = persons.filter(a=>a.name[0].includes('J') && a.grade > 10 && a.sex.includes('F'));
console.log(personJ10F);
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter(a=>a.sex.includes('F'));
console.log(femalePersons);
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter(a=>a.sex.includes('M'));
console.log(malePersons);
// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((a,b)=> a+b,0);
// Find the average grade
let gradeAverage = peopleGrade.reduce((a,b)=> a+b/peopleGrade.length,0);
// Find the average grade of male
maleGrade = filteredMale.map(a=>a.grade);
maleAvgGrade = maleGrade.reduce((a,b)=>a+b/maleGrade.length,0);
console.log(maleAvgGrade);

// Find the average grade of female
femaleGrade = filteredFemale.map(a=>a.grade);
femaleAvgGrade = femaleGrade.reduce((a,b)=>a+b/femaleGrade.length,0);
console.log(femaleAvgGrade);
// Find the highest grade
let highestGrade = peopleGrade.sort((a,b)=>a-b);
console.log(highestGrade[highestGrade.length - 1])
// Find the highest grade in male
let highestGradeM = maleGrade.sort((a,b)=>a-b);
console.log(highestGradeM[highestGradeM.length - 1]);
// Find the highest grade in female
let highestGradeF = femaleGrade.sort((a,b)=>a-b);
console.log(highestGradeF[highestGradeF.length - 1]);
// Find the highest grade for people whose name starts with 'J' or 'P'
let highestGradeJP = persons.filter(a=> a.name.includes('J') ||  a.name.includes('P'));
let gradeJP = highestGradeJP.map(a=>a.grade);
let lastJP=gradeJP.sort((a,b)=>a-b);
console.log(lastJP[lastJP.length - 1]);


// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort((a,b)=>a-b);
//yes
// Sort the peopleGrade in descending order
peopleGrade.sort((a,b)=>b-a);
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
let pG=[...peopleGrade].sort((a,b)=>b-a);
// Sort the array peopelName in ascending `ABCD..Za....z`
peopleName.sort();
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
[...peopleName].sort();