//this code return user's account data

class Account {
  constructor() {
    this.userData = [
      {
        name: "Fagner Santiago",
        accountNamber: 123456,
        agency: 1256,
        income: 10,
        outcome: 0,
        bank_balance: 0,
      },
    ];
  }
}

class Belance extends Account {
  constructor() {
    super();

    const statement = () => {
      this.userData.map((data) => {
        console.log("Nome do titular:", data.name);
        console.log("Numero da conta:", data.accountNamber);
        console.log("Agencia:", data.agency);
      });

      const currentUserData = this.userData.map((balance) =>
        (balance.income + balance.bank_balance).toFixed(2)
      );
      console.log(`Saldo atual: R$: ${currentUserData} `);
    };

    statement();

    const withdraw = () => {
      const outcomeAccountUser = this.userData.map((find) =>
        find.outcome.toFixed(2)
      );
      const outcomeUser = this.userData.map((value) => (value.outcome += 200));
      const lessThanIncomeUser = this.userData.filter(
        (value) => value.income < value.outcome
      );
      if (
        lessThanIncomeUser > outcomeUser ||
        lessThanIncomeUser > outcomeAccountUser
      ) {
        return console.log(`Valor do Saque é maior que valor do Saldo`);
      } else {
        console.log(`Saque: R$:-${outcomeUser}`);
      }
    };

    withdraw();

    const deposit = () => {
      const userDeposit = this.userData.map((userDeposit) =>
        (userDeposit.income = 200).toFixed(2)
      );

      console.log(`depósito: R$:${userDeposit} `);
    };
  }
}

const balance = new Belance();
