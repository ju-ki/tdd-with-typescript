import { Bank } from './bank';
import { Expression } from './expression';
import { Sum } from './sum';

export class Money implements Expression {
  protected amount: number;
  protected currency: string;
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  getAmount(): number {
    return this.amount;
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

  public plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }

  times(multiplier: number): Expression {
    return new Money(this.amount * multiplier, this.currency);
  }

  public reduce(bank: Bank, to: string) {
    const rate: number = bank.rate(this.currency, to);
    return new Money(this.amount / rate, to);
  }

  getCurrency(): string {
    return this.currency;
  }
}
