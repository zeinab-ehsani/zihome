let secound = 60
let showTimer = document.querySelector("#timer")


setInterval(() => {
    secound = secound - 1
    showTimer.innerHTML= `timer
    ${secound}
    `
},1000

);