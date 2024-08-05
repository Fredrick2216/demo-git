console.log("1")
console.log("2")

// fetch used for API calls
const res = fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
        return res.json(); //async ==>pro
    })
    .then((api) => {
        console.log(api);
    })
    //.catch((err) => {
    //console.log("Error:",err);
    //})

async function fetchData() {

    try {

        // await only under async function
        const res2 = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data = await res2.json()
        console.log(data)
    } catch (err) {
        console.log(err);
    } finally {
        console.log("hello");
    }

}



fetchData()