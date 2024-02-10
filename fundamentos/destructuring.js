// desestruturação de dados em objetos.

const pessoa = {
    nome: 'José',
    idade: 32,
    endereco: {
        logradouro: 'Rua dos bobos',
        numero: 0
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome} = pessoa
console.log(sobrenome)

const {endereco: {logradouro, numero, cep}} = pessoa

console.log(logradouro, numero, cep)