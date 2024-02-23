function suma(a, b) {
    return a + b
}

function resta(a, b) {
    return a - b
}

let x = suma(10, 30)
let y = resta(30, 15)
/* console.log(x)
console.log(y) */


setTimeout(() => {
    let x = suma(20, 50)
    console.log(x)
}, 0)

setTimeout(() => {
    let y = resta(50, 20)
    console.log(y)
}, 0)

console.log('fin')


console.log('Hola')
console.log('Mundo')
console.log('!!!')