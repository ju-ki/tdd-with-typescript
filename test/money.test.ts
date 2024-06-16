import { Dollar } from '../src/dollar';
import { Frac } from '../src/frac';

test('equal dollar test', () => {
  const five = new Dollar(5);
  let product = five.times(2);
  expect(new Dollar(10).equals(product)).toBe(true);
  product = five.times(3);
  expect(new Dollar(15).equals(product)).toBe(true);
});

test('test equality', () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
  expect(new Frac(5).equals(new Frac(5))).toBe(true);
});

test('not test equality', () => {
  expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  expect(new Frac(5).equals(new Frac(6))).toBe(false);
});

test('equal Frac test', () => {
  const five = new Frac(5);
  let product = five.times(2);
  expect(new Frac(10).equals(product)).toBe(true);
  product = five.times(3);
  expect(new Frac(15).equals(product)).toBe(true);
});

test('equal frac and dollar test', () => {
  expect(new Dollar(5).equals(new Frac(5))).toBe(false);
});
