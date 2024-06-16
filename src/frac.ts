import { Money } from './money';

export class Frac extends Money {
  constructor(amount: number) {
    super(amount);
  }
  times(multiplier: number): Money {
    return new Frac(this.amount * multiplier);
  }
}
