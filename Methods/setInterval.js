function timer(){
    console.log("I am the timer")
}

const time = setInterval(() => {
    timer()
}, 5000);