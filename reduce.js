var value = [1,3,5]
var totle = value.reduce(function(prev, next){
     return prev + next;
},0)
console.log(totle);