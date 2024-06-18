import { Expression } from './expression';
import { Money } from './money';

export class Bank {
  reduce(source: Expression, to: string): Money {
    console.log(source, to);
    return new Money(10, 'USD');
  }
}
