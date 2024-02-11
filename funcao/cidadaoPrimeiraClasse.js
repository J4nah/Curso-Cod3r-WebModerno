//funçao em JS é First-Class Object (Citizens)
//Higher-Order Function

//criar de forma literal
function fun1() { }

//armazenar em uma variavel
const fun2 = function () { }

//armazenar em um array
const array = [function(a, b ) {return a + b}, fun1, fun2]

//armazenar em atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

//passar função como parametro
function run(fun) {
    fun()
}

//uma função pode retornar/conter uma função

function soma(a, b) {
    return function (c) {
        console.log('A soma é: ' + (a + b + c))
    }
}

soma (5, 4)(3)