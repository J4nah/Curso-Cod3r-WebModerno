//JSON -> formato textual mais usado no mercado atualmente...

const obj = {a: 1, b: 2, c: 3, soma(){return a + b + c}};
console.log(JSON.stringify(obj)) //a função é excluido no JSON, justamente por ser um formato textual.


//console.log(JSON.parse("{a: 1, b: 2, c: 3}"));
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"));
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'));
console.log(JSON.parse('{"a": 1.7, "b": "String", "c": true , "d": {}, "e": []}'));