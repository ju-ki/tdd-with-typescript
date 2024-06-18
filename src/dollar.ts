import { Money } from './money';

export class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
}
