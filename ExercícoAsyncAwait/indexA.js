const delay = () => new Promise((resolve) => { setTimeout(() => { resolve ("ok")}, 5000)});

async function onePerSecond(){

  console.log(await delay())
}
onePerSecond();


