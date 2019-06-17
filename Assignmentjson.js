var obj = {"aliceblue" : [240, 248, 255], "antiquewhite" : [250, 235, 215], "xyz" : [10, 20, 30],"abc" : [5,5,5] };
//var arr = [key, value];
var obj1={};
for(var [key, value] of Object.entries(obj)){
var sum = 0;
    for(var i of value){
     sum=sum + i;
     //arr[key, value]=(`"${key}":${sum}`);
    // obj1[key,sum] ;
    }
    //arr[key,value]=(`"${key}":${sum}`);
    obj1[key] = sum ;
   // document.write("{"+obj1[key, value]+"}");
}
document.write( JSON.stringify(obj1));
//document.write("{"+arr[key, value]+"}");
