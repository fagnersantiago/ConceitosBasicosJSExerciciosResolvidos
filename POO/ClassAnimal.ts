export abstract class Animal {
  constructor(public name: string) {}
  makeNoise(): void {}
}

export class Dog extends Animal {
  makeNoise(): void {
    console.log(`${this.name} está latindo`);
  }
}

export class Cat extends Animal {
  makeNoise(): void {
    console.log(`${this.name} está miando`);
  }
}
