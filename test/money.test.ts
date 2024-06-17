import { Money } from '../src/money';

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
