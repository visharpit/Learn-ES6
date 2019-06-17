class Person{
    constructor(name){
      this.name= name;
    }
    getname(){
        return this.name;
    }
    setname(name){
        this.name=name;
    } 
}
let value = new Person("Arpit");
console.log(value.getname());
value.setname("Arpit vishwakarma");
console.log(value.getname());