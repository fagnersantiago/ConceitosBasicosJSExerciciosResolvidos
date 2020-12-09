import axios from "axios";

// pegando dados da Api do github utilizando uma função com async await

async function getUser(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);

    console.log(response);
  } catch (err) {
    console.warn("Erro na API");
  }
}

getUser("fagnersantiago");

//outra forma de buscar dados de uma api utilizando async await e usando as classes em JS como o exemplo abaixo

class Github {
  static async getRepositories(repo) {
    try {
      const returResponse = await axios.get(
        `https://api.github.com/repos/${repo}`
      );

      console.log(returResponse.data);
    } catch (err) {
      console.log("Erro ao buscar repositorio");
    }
  }
}

Github.getRepositories("fagnersantiago/GoStackdesfafio06");

//temos mais uma forma de pegar usuários de uma api é usando variáveis com async await, segue o exemplo abaixo

const searchUser = async (user) => {
  try {
    const returnResponseUser = await axios.get(
      `https://api.github.com/users/${user}`
    );

    console.log(returnResponseUser);
  } catch (err) {
    console.log("Erro ao buscar usuário");
  }
};

searchUser("fagnersantiago");
