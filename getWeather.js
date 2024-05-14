async function weather() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27°")
        }, 2000)
    })
    let bangaloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("18°")
        }, 5000)
    })
    // delhiWeather.then(alert)
    // bangaloreWeather.then(alert)
    console.log("Fetching Delhi weather please wait....")
    let delhiW = await delhiWeather
    console.log(`Fetched Delhi weather: ${delhiW}`)

    console.log("Fetching Banglore weather please wait....")
    let bangaloreW = await bangaloreWeather
    console.log(`Fetched Bangalore weather: ${bangaloreW}`)

    return [delhiW, bangaloreW]
}

const getInfo = async () => {
    console.log("Hey this is get Info and it is waiting...")
}

const main1 = async () => {
    console.log("Welcome to weather data center")
    let a = await weather()
    let b = await getInfo()
}
main1()