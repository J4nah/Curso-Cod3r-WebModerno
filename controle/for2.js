const notas = [8, 7.1, 4.2, 5.2, 10, 5, 8.3]

for (let i in notas ) {
    console.log(i, '= ' + notas[i])
}


const pessoa = {
    nome: 'José',
    sobrenome: 'Pereira',
    idade: 33,
    peso: 80
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}