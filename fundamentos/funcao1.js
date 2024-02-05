// FUNCAO SEM RETORNO

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2 , 4)

// FUNCAO COM RETORNO 

function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))