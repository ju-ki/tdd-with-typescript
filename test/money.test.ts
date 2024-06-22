import { Money } from '../src/money';
import { Bank } from '../src/bank';
import { Sum } from '../src/sum';
import { Expression } from '../src/expression';

test('equal dollar test', () => {
  const five = Money.dollar(5) as Money;
  let product = five.times(2);
  expect(Money.dollar(10).equals(product)).toBe(true);
  product = five.times(3);
  expect(Money.dollar(15).equals(product)).toBe(true);
});

test('test equality', () => {
  expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
  expect(Money.frac(5).equals(Money.frac(5))).toBe(true);
});

test('not test equality', () => {
  expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
  expect(Money.frac(5).equals(Money.frac(6))).toBe(false);
});

test('equal Frac test', () => {
  const five = Money.frac(5) as Money;
  let product = five.times(2);
  expect(Money.frac(10).equals(product)).toBe(true);
  product = five.times(3);
  expect(Money.frac(15).equals(product)).toBe(true);
});

test('equal frac and dollar test', () => {
  expect(Money.dollar(5).equals(Money.frac(5))).toBe(false);
});

test('test currency', () => {
  expect(Money.dollar(1).getCurrency()).toBe('USD');
  expect(Money.frac(1).getCurrency()).toBe('CHF');
});

test('simple addition test', () => {
  const five = Money.dollar(5);
  const sum = five.plus(five);

  const bank = new Bank();
  const reduced = bank.reduce(sum, 'USD');
  expect(Money.dollar(10).equals(reduced)).toBe(true);
});

test('simple puls return sum test', () => {
  const five = Money.dollar(5);
  const result = five.plus(five);
  const sum = result as Sum;
  expect(five.equals(sum.augend)).toBe(true);
  expect(five.equals(sum.addend)).toBe(true);
});

test('test reduce sum', () => {
  const sum = new Sum(Money.dollar(3), Money.dollar(4));
  const bank = new Bank();
  const result = bank.reduce(sum, 'USD');
  expect(Money.dollar(7).equals(result)).toBe(true);
});

test('test reduce different currencies', () => {
  const bank = new Bank();
  bank.addRate('CHF', 'USD', 2);
  const result = bank.reduce(Money.frac(2), 'USD');
  expect(Money.dollar(1).equals(result)).toBe(true);
});

test('test identify currency', () => {
  expect(1 === new Bank().rate('USD', 'USD')).toBe(true);
});

test('test array equals', () => {
  const array = [1, 2, 3];
  expect(array.every((num) => [1, 2, 3].includes(num))).toBe(true);
});

test('test mixed Addition', () => {
  const fiveBucks = Money.dollar(5) as Expression;
  const testFrancs = Money.frac(10) as Expression;
  const bank = new Bank();
  bank.addRate('CHF', 'USD', 2);
  const result = bank.reduce(fiveBucks.plus(testFrancs), 'USD');
  console.log(result);
  expect(Money.dollar(10).equals(result)).toBe(true);
});
