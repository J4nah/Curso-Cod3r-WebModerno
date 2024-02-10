console.log('01)', '1' == 1) // == igualdade
console.log('02)', '1' === 1) // === estritamente igual
console.log('03)', '3' != 3) // != diferente
console.log('04)', '3' !== 3) // !== estritamente diferente

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)

console.log('09)', d1 === d2)
console.log('10)', d1 == d2) // como aqui é solicitado endereço de memoria o resultado é false.
console.log('11)', d1.getTime === d2.getTime) // já aqui o que é solicitado é o horario, e esse sim é o mesmo nos dois casos.

console.log('12)', undefined == null)
console.log('13)', undefined === null)
