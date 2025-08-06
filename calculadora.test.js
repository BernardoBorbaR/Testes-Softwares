const { somar, subtrair, multiplicar, dividir, porcentagem } = require('./calculadora');

test('deve somar dois números corretamente', () => {
  expect(somar(5, 3)).toBe(8);
});

test('deve somar dois números corretamente', () => {
  expect(somar(-5, 3)).toBe(-2);
});

test('deve retornar NaN ao somar null com número', () => {
  expect(somar(null, 3)).toBe(3);
});

test('deve retornar NaN ao somar undefined com número', () => {
  expect(somar(undefined, 3)).toBe(NaN);
});

test('deve subtrair dois números corretamente', () => {
  expect(subtrair(10, 4)).toBe(6);
});

test('deve subtrair dois números corretamente', () => {
  expect(subtrair(-5, -3)).toBe(-2);
});

test('deve retornar NaN ao subtrair null de número', () => {
  expect(subtrair(null, 4)).toBe(-4);
});

test('deve retornar NaN ao subtrair undefined de número', () => {
  expect(subtrair(undefined, 4)).toBe(NaN);
});

test('deve multiplicar dois números corretamente', () => {
  expect(multiplicar(4, 3)).toBe(12);
});

test('deve multiplicar dois números corretamente', () => {
  expect(multiplicar(-4, 3)).toBe(-12);
});

test('deve retornar NaN ao multiplicar null por número', () => {
  expect(multiplicar(null, 3)).toBe(0);
});

test('deve retornar NaN ao multiplicar undefined por número', () => {
  expect(multiplicar(undefined, 3)).toBe(NaN);
});

test('deve dividir dois números corretamente', () => {
  expect(dividir(9, 3)).toBe(3);
});

test('deve dividir dois números corretamente', () => {
  expect(dividir(-9, 3)).toBe(-3);
});

test('deve retornar NaN ao dividir null por número', () => {
  expect(dividir(null, 3)).toBe(0);
});

test('deve lançar erro ao dividir por zero, mesmo com null', () => {
  expect(() => dividir(null, 0)).toThrow('Divisor não pode ser zero');
});

test('deve retornar NaN ao dividir undefined por número', () => {
  expect(dividir(undefined, 3)).toBe(NaN);
});

test('deve lançar erro ao dividir por zero', () => {
  expect(() => dividir(9, 0)).toThrow('Divisor não pode ser zero');
});

test('deve calcular a porcentagem corretamente', () => {
  expect(porcentagem(50, 20)).toBe(10);
});

test('deve calcular a porcentagem corretamente', () => {
  expect(porcentagem(-50, 20)).toBe(-10);
});

test('deve retornar NaN ao calcular porcentagem com null', () => {
  expect(porcentagem(null, 20)).toBe(0);
});

test('deve retornar NaN ao calcular porcentagem com undefined', () => {
  expect(porcentagem(undefined, 20)).toBe(NaN);
});