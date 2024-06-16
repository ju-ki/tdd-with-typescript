import { Money } from './money';

export class Frac extends Money {
  constructor(amount: number) {
    super(amount);
  }
  times(multiplier: number): Frac {
    return new Frac(this.amount * multiplier);
  }
}
