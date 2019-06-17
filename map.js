/*var map = new Map();
map.set('name', 'Arpit');
map.set('id', '0205');
map.set('interest', ['cricket', 'sketching', 'painting']);
console.log(map.get('name'));
console.log(map.get('id'));
console.log(map.get('interest'));*/

/*var map = new Map()
map.set('name', 'Arpit');
map.set('name', 'nipun');
map.set(1, 'numbet one');
map.set(NaN, 'No value');

console.log(map.get('name'));
console.log(map.get(1));
console.log(map.get(NaN));*/

var map = new Map()
map.set('name', 'Arpit');
map.set('id', 10);

console.log(map.keys());
console.log(map.values());
console.log(map.size);

//for(let key of map.keys()){
  //  console.log(key);

 // for(let element of map){
   //   console.log(element);

   for(let [key, value] of map){
console.log(key+"-"+value);

}