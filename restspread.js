           
                  /* Rest*/

/*var showCategories = function(productid, ...b){
    console.log(b instanceof Array);
}
showCategories(123456, 'Arpit','nipun','Anjali');*/

/*var showCategories = function(productid, ...b){
    console.log(b);
}
showCategories(123456, 'Arpit','nipun','Anjali');*/

/*var showCategories = function(productid, ...b){
    console.log(b.length);
}
showCategories(123456, 'Arpit','nipun','Anjali');*/

/*var showCategories = function(productid, ...b){
    console.log(arguments.length);
}
showCategories(123456, 'Arpit','nipun','Anjali')*/;

                /* Spread*/

/*var Arr = [15,20,25];
var find = Math.max(...Arr);
console.log(find);*/               

/*var Arr = [15,20,25];
var find = [...Arr];
console.log(find);*/


/*var find = Array(...[ , , ]);
console.log(find);*/

var find = Math.max(..."43215");
console.log(find);               