function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error("Divisor não pode ser zero");
  }
  return a / b;
}

function porcentagem(a, b) {
    return (a / 100) * b;
}

module.exports = { somar, subtrair, multiplicar, dividir, porcentagem };
//exemplo somar
console.log("Soma:");
console.log(5 + null);
console.log(-5 + 3);
console.log(null + 3);
console.log(undefined + 3);

//exemplo subtrair
console.log("Subtração:");
console.log(10 - 4);
console.log(null - 4);
console.log(-5 - -3);
console.log(undefined - 4);

//exemplo multiplicar
console.log("Multiplicação:");
console.log(4 * 3);
console.log(-4 * 3);
console.log(null * 3);
console.log(undefined * 3);

//exemplo dividir
console.log("Divisão:");
console.log(9 / 3);
console.log(-9 / 3);
console.log(null / 3);
console.log(undefined / 3);

//exemplo porcentagem
console.log("Porcentagem:");
console.log(50 / 100 * 20);
console.log(-50 / 100 * 20);
console.log(null / 100 * 20);
console.log(undefined / 100 * 20);