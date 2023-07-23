let a='salam sasan.khobi sasan?'
let b=a.replace('sasan','mamad')
console.log(b)

let c=a.concat('??',b)
console.log(c)

let text = "5";
let padded = text.padStart(4,"xynvbknxdxbnjkxdgbn");
console.log(padded)


let number=[11,15,12,48,98,45,54,12]
console.log(number)

console.log('push 85,75,65')
number.push(85,75,65);
console.log(number)

console.log('pop')
number.pop();
console.log(number)
 
console.log('shift')
number.shift();
console.log(number)

console.log("unshift '1','2'")
number.unshift('1','2');
console.log(number)

console.log(number.includes('2'))

console.log(number.find((item)=>{
    item='2'
}))
console.log(number.findIndex((item)=>{
    item='85'
}))

let forchi=number.forEach((item)=>{
    item+=10
    console.log(item)
})
console.log(forchi)

console.log('map\n\n\n\b')
let MAs=number.map((item)=>{
    item+=10
    console.log(item)
})
console.log(MAs)