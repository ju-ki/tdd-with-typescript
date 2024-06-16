export class Dollar {
  private _amount: number = 10;
  constructor(amount: number) {
    this._amount = amount;
  }
  times(multiplier: number): Dollar {
    return new Dollar(this._amount * multiplier);
  }

  get amount(): number {
    return this._amount;
  }

  equals(object: Object): boolean {
    const dollar: Dollar = object as Dollar;
    return this._amount === dollar.amount;
  }
}
