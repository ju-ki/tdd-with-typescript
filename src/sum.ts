import { Expression } from './expression';
import { Money } from './money';

export class Sum implements Expression {
  augend: Money = new Money(0, '');
  addend: Money = new Money(0, '');
  constructor(augend: Money, addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(to: string): Money {
    const amount: number = this.augend.getAmount() + this.addend.getAmount();
    return new Money(amount, to);
  }
}
