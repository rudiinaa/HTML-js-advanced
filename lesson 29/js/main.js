var programmingLanguage=['Java Script','Java','Python']
console.log(programmingLanguage);
console.log(programmingLanguage[0]);

console.log("kemi shtuar nje element ne fund te listes")
programmingLanguage.push('php')
console.log(programmingLanguage);

console.log("kemi hek nje element te fund te listes")
programmingLanguage.pop()
console.log(programmingLanguage);

console.log("kemi shtuar nje element ne fillim te listes")
programmingLanguage.unshift('c#')
console.log(programmingLanguage);

console.log("kemi hek nje element ne fillim te listes")
programmingLanguage.shift()
console.log(programmingLanguage);

programmingLanguage.splice(0,2,'ruby')
console.log(programmingLanguage);

console.log(Math.random()*3)
console.log(Math.floor(Math.random()*3))

var students=['Liza','Rudina'];
var[s1,s2]=students;

console.log(s2);
console.log(s1);

var places=['Paris','LosAngelos','Berlin','Milano'];
var[firstplace, ,secondplace]=places;

console.log(secondplace);

var numbers=[1,2,3,4,5,6,7,8];
var[first,second,...otherNumbers]=numbers
console.log(first);
console.log(second);
console.log(otherNumbers.toString())

