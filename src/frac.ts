import { Money } from './money';

export class Frac extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
  times(multiplier: number): Money {
    return Money.frac(this.amount * multiplier);
  }
}
