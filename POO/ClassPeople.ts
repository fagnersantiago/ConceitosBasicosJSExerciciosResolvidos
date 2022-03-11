//Abstração
export class People {
  private name: string;
  private nickname: string;

  constructor(name: string, nickname: string) {
    this.name = name;
    this.nickname = nickname;
  }
}

const people = new People("fagner", "santiago");
