//Object.preventExtensions -> nao permite extensoes.

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensivel:', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca'; // preventExtensions não irá permitir a criação de novos atributos.
delete produto.tag;
console.log(produto);

//Object.seal

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva'; //nao permite adicionar nem excluir novos atributos no objeto.
delete pessoa.nome;
pessoa.idade = 29;

console.log(pessoa);

//Object.freeze = selado + valores constantes -> nao consegue alterar nem adicionar ou excluir qualquer atributo do objeto.