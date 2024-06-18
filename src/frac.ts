import { Money } from './money';

export class Frac extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
}
