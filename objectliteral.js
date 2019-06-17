/*var price = 10, quan = 10;
var productview = {
    price,
    quan
}
console.log(productview);*/

/*var price = 10, quan = 10;
var productview = {
    price: 20,
    quan: 20,
    calculatevalue(){
        return this.price + this.quan;
    }
}
console.log(productview.calculatevalue());*/

/*var field = "dynamicfield";
var price= 10;
var productview = {

    [field + "001125"]:price

};
console.log(productview);*/

var method = "doit";
var productview = {
    [method + "-001"](){
        console.log("Arpit vishwakarma");
    }

}
productview["doit-001"]();
