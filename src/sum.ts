import { Bank } from './bank';
import { Expression } from './expression';
import { Money } from './money';

export class Sum implements Expression {
  augend: Expression;
  addend: Expression;
  constructor(augend: Expression, addend: Expression) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(bank: Bank, to: string): Money {
    const amount: number = this.augend.reduce(bank, to).getAmount() + this.addend.reduce(bank, to).getAmount();
    return new Money(amount, to);
  }

  public plus(addend: Expression): Expression {
    return addend;
  }
}
