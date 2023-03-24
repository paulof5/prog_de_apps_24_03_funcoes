//Armazenando uma função em uma variável
let imprimirSoma = function (a, b) {
  console.log(a + b);
};
imprimirSoma(2, 3);
//Armazenando um função arrow em uma variável
const soma = (a, b) => {
  return a + b;
};
//função arrow
let num1;
let num2;

let somar = () => {
  let resultado = console.log(num1 + num2);
};

somar((num1 = 10), (num2 = 20));
//retorno implicito

//função arrow reduzida
const subtracao = (a, b) => a - b;

//funções armazenadas dentro de objetos
let calculadora = {
  soma: function (a, b) {
    console.log(a + b);
  },
  subtrai: function (a, b) {
    console.log(a - b);
  },
  multiplica: function (a, b) {
    console.log(a * b);
  },
  divide: function (a, b) {
    console.log(a / b);
  }
};

calculadora.soma(100, 10);
calculadora.subtrai(15, 20);
calculadora.multiplica(5, 2);
calculadora.divide(60, 20);
