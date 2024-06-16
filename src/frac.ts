export class Frac {
  private _amount: number;
  constructor(amount: number) {
    this._amount = amount;
  }
  times(multiplier: number): Frac {
    return new Frac(this._amount * multiplier);
  }

  equals(object: Object): boolean {
    const dollar: Frac = object as Frac;
    return this._amount === dollar._amount;
  }
}
