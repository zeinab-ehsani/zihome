let showTimer = document.querySelector("#timer")

let total = 4 * 60 * 60

function harchi() {
    hours = Math.floor(total / 3600)
    minutes = Math.floor((total % 3600) / 60)
    seconds = total % 60


    showTimer.innerHTML = [hours, minutes, seconds]
        .map(n => String(n).padStart(2, "0"))
        .join(" : ")
}
harchi()




const interval = setInterval(() => {
    total--
    harchi()
    if (total <= 0) {
        clearInterval(interval)
    }
}, 1000)


let showTimerleft = document.querySelector("#timer-left")
let totalTimerLeft = 4 * 60 * 60

function time() {
    hours = Math.floor(totalTimerLeft / 3600)

    minutes = Math.floor((totalTimerLeft % 3600) / 60)
    seconds = totalTimerLeft % 60
    showTimerleft.innerHTML = [hours, minutes, seconds]
        .map(n => String(n).padStart(2, "0"))
        .join(" : ")

}

time()

const intervalleft = setInterval(() => {
    totalTimerLeft--
    time()
    if (totalTimerLeft <= 0) {
        clearInterval(intervalleft)
    }



}, 1000);