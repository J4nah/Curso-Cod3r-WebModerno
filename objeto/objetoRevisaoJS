// coleção dinamica de pares chave/valor

const produto = new Object;
produto.nome ='Cadeira';
produto['marca do produto'] = 'Generica';
produto.preco = 220;


console.log(produto);
delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario:{
        nome: 'José',
        idade:36,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Maria',
        idade: 36
    }],
    calcularVAlorSeguro: function(){
        //...
    }
}

console.log(carro);
carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Av Brasil';
console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularVAlorSeguro;
console.log(carro);