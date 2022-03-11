export abstract class Animal {
  constructor(public name: string) {}
  makeNoise(): void {}
}

export class Dog extends Animal {
  makeNoise(): void {
    console.log(`${this.name} está latindo`);
  }
}
