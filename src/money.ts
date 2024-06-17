export abstract class Money {
  protected amount: number;
  protected currency: string;
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  equals(object: Object): boolean {
    const money: Money = object as Money;
    return this.amount === money.amount && object instanceof this.constructor;
  }

  static dollar(amount: number): Money {
    return new Dollar(amount, 'USD');
  }

  static frac(amount: number): Money {
    return new Frac(amount, 'CHF');
  }
  abstract times(multiplier: number): Money;
  getCurrency(): string {
    return this.currency;
  }
}

import { Dollar } from './dollar';
import { Frac } from './frac';
