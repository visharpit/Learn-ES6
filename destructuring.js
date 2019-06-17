const obj = { name : "Arpit", age : "24", born : "jabalpur"}

console.log(obj);
console.log(obj.age);
console.log(obj.name);
console.log(obj.born);

const names = obj.name;
console.log(names);

const ages = obj.age;
console.log(ages);

const borns = obj.born;
console.log(borns);

   /*Destructuring*/

const {name , age, born} = obj;

console.log(name);
console.log(age);
console.log(born);

   /*template string*/

document.write("my name is"+name+"my age is"+age+"I was born in"+born);
document.write("<br>");
document.write(`my name is ${name}. my age is ${age}. I was born in ${born}.`);