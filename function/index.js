
// let number=[11,15,12,48,98,45,54,12]
// console.log(number)

// //push add to end
// console.log('push 85,75,65')
// number.push(85,75,65);
// console.log(number)

// // rmove from end
// console.log('pop') 
// number.pop();
// console.log(number)
 
// // remove from start
// console.log('shift')
// number.shift();
// console.log(number)

// console.log("unshift '1','2'")
// number.unshift('1','2');
// console.log(number)

// console.log(number.includes('2'))

// let index=number.findIndex(()=>{
//     item=48
// })
// console.log(number.indexOf(48))

// console.log(index)


// let forchi=number.forEach((item)=>{
//     item+=10
//     console.log(item)
// })
// console.log(forchi)

// console.log('map\n\n\n\b')
// let MAs=number.map((item)=>{
//     item+=10
//     console.log(item)
// })
// console.log(MAs)
// --------------------------------------------------
// let d=[1,2]
// console.log(d);
// console.log(d.concat([3,4]));
// console.log(d.concat(5,6));



// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];
  
//   let user = users.find(item => item.id == 1);
  
//   alert(user.name); // John

// let users = [1,2,3,2,2];
  
//   let user = users.find(item => item== );
  
//   alert(user); // John


//   let results = arr.filter(function(item, index, array) {
//     // if true item is pushed to results and the iteration continues
//     // returns empty array if nothing found
//   });

// console.log(users.indexOf(2))
//  let a=users.filter((item,index)=>users.indexOf(item)===index);
//  console.log(a);

// const myArray = [1,2,3,2,2,9,8,7];
// const mySet = new Set(myArray);
// console.log(mySet);
// console.log(mySet.add(6));
// console.log(mySet.add('6'));
// console.log(mySet.add({ channelName: 'JavaScript Mastery' }));
// console.log(mySet.add([ 1, 2, 3 ]));


// ----------------------------------------------------------------------------

//push add to end
//pop rmove from end
//unshift add to start
//shift remove from start

// ---------- Splice ----------

// arr.splice(start, deleteCount,[ elem1, ..., elemN])

// let arr = ["I", "study", "JavaScript", "right", "now"];  
// arr.splice(0, 3, "Let's", "dance");// remove 3 first elements and replace them with another
// alert( arr ) // now ["Let's", "dance", "right", "now"]
// ----------------------------------------------------------------------------

// ---------- concat ----------

// let arr = [1, 2];

// // create an array from: arr and [3,4]
// alert( arr.concat([3, 4]) ); // 1,2,3,4

// // create an array from: arr and [3,4] and [5,6]
// alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// // create an array from: arr and [3,4], then add values 5 and 6
// alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

// ----------------------------------------------------------------------------

// ---------- Searching in array ----------

// indexOf/lastIndexOf and includes

// let fruits = ['Apple', 'Orange', 'Apple','Benana']
// console.log(fruits);
// console.log(`fruits.indexOf('Apple')  ${fruits.indexOf('Apple')}`); // 0 (first Apple)
// console.log( `fruits.lastIndexOf('Apple') ${fruits.lastIndexOf('Apple')} ` ); // 2 (last Apple)
// console.log(` fruits.includes('benana') ${fruits.includes('benana')} ` )
// console.log(` fruits.includes('Benana') ${fruits.includes('Benana')} ` )

// ----------------------------------------------------------------------------


let arr = [1,2,3,4,54,3,2,9,8,54,98];
console.log(arr);


// ---------- find and findIndex/findLastIndex ----------

// let result = arr.find(function(item, index, array) {
//     // if true is returned, item is returned and iteration is stopped
//     // for falsy scenario returns undefined
//   });
// item is the element.
// index is its index.
// array is the array itself.

let indexOf=arr.indexOf(54)
console.log(`arr.find(54)          ${indexOf}`);

let lastIndexOf=arr.lastIndexOf(54)
console.log(`arr.findIndex(54)     ${lastIndexOf}`);

let includes=arr.includes(54)
console.log(`arr.findLastIndex(54) ${includes} '\n'`);

console.log('The find and findIndex/findLastIndex must have a function \n ')
let find=arr.find((item)=>item===54)
console.log(`arr.find((item)=>item===54)         ${find}`);

let findIndex=arr.findIndex((item)=>item===54)
console.log(`arr.findIndex((item)=>item===54)     ${findIndex}`);

let findLastIndex=arr.findLastIndex((item)=>item===54)
console.log(`arr.findLastIndex((item)=>item===54) ${findLastIndex}`);
// ----------------------------------------------------------------------------

// ---------- filter ----------

// let results = arr.filter(function(item, index, array) {
//     // if true item is pushed to results and the iteration continues
//     // returns empty array if nothing found
//   });
let filter=(arr.map((item)=>item)).filter((item,index)=>item===54 && index!=4)
console.log(`arr.filter((item,index)=>item===54 && index!=4)  ${filter}`);
// ----------------------------------------------------------------------------

// ---------- map ----------

// The arr.map method is one of the most useful and often used.
// It calls the function for each element of the array and returns the array of results.

// let newArr = arr.map(function(item, index, array) {
//     // returns the new value instead of item
//   });

// let newArr = arr.map(function(item) {
//     return item 
//   });
let newArr=arr.map((item)=>item)
  console.log( `let newArr=arr.map((item)=>item)   ${newArr}`)

// ----------------------------------------------------------------------------

// ---------- sort(fn) ----------

// arr.sort(function(a, b) { return a - b; });
// arr.sort( (a, b) => a - b );
console.log( `newArr.sort( (a, b) => a - b )     ${ newArr.sort( (a, b) => a - b )}`);
console.log( `newArr.sort( (a, b) => b - a )     ${ newArr.sort( (a, b) => b - a )}`);

// ----------------------------------------------------------------------------

// ---------- reduce/reduceRight ----------

// let value = arr.reduce(function(accumulator, item, index, array) {
//     // ...
//   }, [initial]);
// accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).

let sum = arr.reduce((sum, current) => sum + current, 0);
console.log(`arr.reduce((sum, current) => sum + current, 0)    ${sum}`); 

let multiple = arr.reduce((multiple, current) => multiple * current, 1);
console.log(`arr.reduce((sum, current) => multiple * current, 1);   ${multiple}`); 

// ----------------------------------------------------------------------------

// ---------- Iterate: forEach ----------

// arr.forEach(function(item, index, array) {
//     // ... do something with item
//   });

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     alert(`${item} is at index ${index} in ${array}`);
//   });

let foreach=arr.forEach((item)=>item*2)
console.log(`arr.forEach((item)=>item*2  ${arr.forEach((item)=>item*2)}`)


// ----------------------------------------------------------------------------

// ----------split and join and Reverse----------

let names = 'Bilbo, Gandalf, Nazgul';
console.log('names=' , names)

let split= names.split(', ');
console.log( "names.split(', ')" , split )
// for (let name of split) {
//   console.log( `A message to ${name}.` ); // A message to Bilbo  (and other names)
// }
let reverse=split.reverse()
console.log('split.reverse()' , reverse);

let join=split.join('<>')
console.log("split.join('<>')" , join)
 