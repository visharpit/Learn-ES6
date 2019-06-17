var arr = [10,20,30,40,50]
var newarr = arr.map(function(value, i,arr){
   return value > 20;

})
console.log(newarr);
