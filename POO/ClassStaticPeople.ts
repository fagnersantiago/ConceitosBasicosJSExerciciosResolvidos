//entendo o método estáticos
export class StaticPeople {
  constructor(
    public name: string,
    nickname: string,
    cpf: string,
    age: string
  ) {}

  static createPeople(name: string, nickname: string): StaticPeople {
    return new StaticPeople(name, nickname, "00.0000.000-00", "12");
  }
}

const people = StaticPeople.createPeople("fagner", "santiago");

console.log(people);
