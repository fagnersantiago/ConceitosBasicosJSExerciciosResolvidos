//this code return user's account data

class Account {
  constructor() {
    this.userData = [
      {
        name: "Fagner Santiago",
        accountNamber: 123456,
        agency: 1256,
        income: 1000,
        outcome: 1400,
      },
    ];
  }
}

class Belance extends Account {
  constructor() {
    super();

    const withdraw = () => {
      const outcomeUser = this.userData.map((find) => find.outcome.toFixed(2));
      const lessThanIncomeUser = this.userData.filter(
        (value) => value.outcome > value.income
      );
      if (lessThanIncomeUser > outcomeUser) {
        return console.log(`Valor do Saque é maior que valor do Saldo`);
      } else {
        console.log(`Saque: R$:-${outcomeUser}`);
      }
    };

    withdraw();

    const deposit = () => {
      const userDeposit = this.userData.map((userDeposit) =>
        (userDeposit.income += 200).toFixed(2)
      );

      console.log(`depósito: R$:${userDeposit}`);
    };

    deposit();

    const statement = () => {
      this.userData.map((data) => {
        console.log("Agencia:", data.agency);
        console.log("Numero da conta:", data.accountNamber);
        console.log("Nome titular:", data.name);
      });

      const statmentUser = this.userData.map((balance) =>
        (balance.income - balance.outcome).toFixed(2)
      );

      // console.log(`Numéro da conta :${userNameDataAcount.accountNamber}`);
      // console.log(`Nome do Titular :${userNameDataAcount.accountNamber}`);
      // console.log(`Saldo: R$:${statmentUser}`);
      console.log(`Saldo atual:${this.userData.map((value) => value.income)}`);
    };

    statement();
  }
}

const results = new Belance();
