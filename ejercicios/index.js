

const suma = (a, b)=>{
    return a + b
}

suma(10, 20)


let value = 0;
function add1(sum) {
  sum(value += 1);
}
function add2(sum) {
  sum((value += 2));
}

const imprimir = (valor) => console.log(`El valor es: ${valor}`)

add2(imprimir);
add1(imprimir);

