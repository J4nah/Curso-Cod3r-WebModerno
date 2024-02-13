//escopo criado quando uma função é declarada
// permite a função acessar e manipular as variaveia externas a função

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())