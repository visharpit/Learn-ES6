
        /*FIRST ASSIGNMENT*/
/*var  aliceblue = [240, 248, 255];
var  antiquewhite = [250,235,215];

var obj = {aliceblue, antiquewhite} ;
var myJSON1 = JSON.stringify(obj);

document.write(myJSON1);*/


        /*SECOND ASSIGNMENT*/
/*var  aliceblue = [240, 248, 255];
var  antiquewhite = [250, 235, 215];

var sum1 = aliceblue.reduce(function(prev, next){
    return prev + next;
},0)

var sum2 = antiquewhite.reduce(function(prev, next){
    return prev + next;
},0)

aliceblue = sum1;
antiquewhite = sum2;

var obj = {aliceblue, antiquewhite} ;
var myJSON = JSON.stringify(obj);

document.write(myJSON);*/


/*var  obj = {"aliceblue" : [240, 248, 255], "antiquewhite" : [250, 235, 215]};

var sum1 = obj.aliceblue.reduce(function(prev, next){
    return prev + next;
},0)

var sum2 = obj.antiquewhite.reduce(function(prev, next){
    return prev + next;
},0)

obj.aliceblue = sum1;
obj.antiquewhite = sum2;

var myJSON = JSON.stringify(obj);
document.write(myJSON);*/


/*var aliceblue = [240, 248, 255];
var sum = 0;

for(i=0; i<aliceblue.length; i++)
{
   sum = sum + aliceblue[i];
}
document.write(sum);*/

var  arr = [aliceblue =  [240, 248, 255], antiquewhite = [250, 235, 215], xyz = [10,20,10], abc = [50,30,20]];
 //var arr1=[];
 //var obj={};

for(var i of arr){
        var sum=0;
     // obj={i};
            for(var j of i){
            
                sum = sum +j;
                //arr1=sum;
                }
       
         //document.write( (JSON.stringify({arr1})));
        document.write( (JSON.stringify({sum})));
        //document.write(Obj.Keys(arr[i]));

}


//Object.Keys($scope.modelName.name[i])

//console.log(sum);


/*var  obj = {"aliceblue" : [240, 248, 255], "antiquewhite" : [250, 235, 215]};

var sum =0;
var arr=[Object.values(obj)];
for (var i=0; i<arr.length; i++)
{
        //var arr1 =[arr[i]];
        //console.log(arr1);

        //var j = Object.values(obj);
        for(var k=0; k<i.length; k++)
        {
           sum = sum + i[k];
        
        } 
        console.log(sum);
                 
}*/


