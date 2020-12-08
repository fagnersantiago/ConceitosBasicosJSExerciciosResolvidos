const delay = () => new Promise ( resolve => setTimeout( resolve, 5000)) 

const onePerSecond = async () => {

    await delay(console.log('5s'))
}

onePerSecond()