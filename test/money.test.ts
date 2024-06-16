import { Dollar } from '../src/dollar';
import { Frac } from '../src/frac';

test('equal dollar test', () => {
  const five = new Dollar(5);
  let product = five.times(2);
  expect(new Dollar(10)).toEqual(product);
  product = five.times(3);
  expect(new Dollar(15)).toEqual(product);
});

test('test equality', () => {
  expect(new Dollar(5)).toEqual(new Dollar(5));
});

test('not test equality', () => {
  expect(new Dollar(5)).not.toEqual(new Dollar(6));
});

test('equal Frac test', () => {
  const five = new Frac(5);
  let product = five.times(2);
  expect(new Frac(10)).toEqual(product);
  product = five.times(3);
  expect(new Frac(15)).toEqual(product);
});
