Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)){
        console.log('Recuperaçao')
    } else if (nota.entre(0, 3.99)){
        console.log('Reprovado')
    } else {
        console.log('Nota Invalida')
    }
   console.log('Fim!')
}

imprimirResultado(10)
imprimirResultado(8.99)
imprimirResultado(4)
imprimirResultado(2.1)
imprimirResultado(-2)
imprimirResultado(15)