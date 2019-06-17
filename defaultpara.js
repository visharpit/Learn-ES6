/*var A=(a,b=10)=>{
    console.log(a+b);
}
A(20);*/

/*var A=(a,b=10)=>{
    console.log(a+b);
}
A(20,30);*/

var A=(a=10, b)=>{
    return a+b;
}
console.log(A(20,50));

