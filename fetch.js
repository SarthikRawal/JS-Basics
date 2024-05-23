// Basic fetch API call example to get Time details
const url = "http://worldtimeapi.org/api/timezone/Asia/Kolkata"


// directly consoling the response 
async function getData(){
    const res = await fetch(url)
    console.log(res)
}

// Converting the fetched data into Json format then consoling it
async function getData(){
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
}

getData()