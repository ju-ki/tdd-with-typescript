import { Dollar } from './dollar';
import { Frac } from './frac';

export abstract class Money {
  protected amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }

  equals(object: Object): boolean {
    const money: Money = object as Money;
    return this.amount === money.amount && object instanceof this.constructor;
  }

  static dollar(amount: number): Money {
    return new Dollar(amount);
  }

  static frac(amount: number): Money {
    return new Frac(amount);
  }
  abstract times(multiplier: number): Money;
}
