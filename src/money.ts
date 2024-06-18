import { Expression } from './expression';

export class Money implements Expression {
  protected amount: number;
  protected currency: string;
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  equals(object: Object): boolean {
    const money: Money = object as Money;
    return this.amount === money.amount && this.equalsCurrency(money.currency);
  }

  equalsCurrency(currency: string): boolean {
    return currency === this.currency;
  }

  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  static frac(amount: number): Money {
    return new Money(amount, 'CHF');
  }

  plus(addend: Money): Expression {
    return new Money(this.amount + addend.amount, this.currency);
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }
  getCurrency(): string {
    return this.currency;
  }
}
