let sepantaColor0 = document.querySelector("#sepanta-color0")

let sepantaColor1 = document.querySelector("#sepanta-color1")
let sepantaColor2 = document.querySelector("#sepanta-color2")
let sepantaColor3 = document.querySelector("#sepanta-color3")

let imgsepantaColor0 = document.querySelector("#sepantaimg-color0")
let imgsepantaColor1 = document.querySelector("#sepantaimg-color1")
let imgsepantaColor2 = document.querySelector("#sepantaimg-color2")
let imgsepantaColor3 = document.querySelector("#sepantaimg-color3")

sepantaColor1.addEventListener("click", function () {

    imgsepantaColor1.classList.remove("d-none")
    imgsepantaColor0.classList.add("d-none")
    imgsepantaColor2.classList.add("d-none")
    imgsepantaColor3.classList.add("d-none")


})
sepantaColor2.addEventListener("click", function () {

    imgsepantaColor2.classList.remove("d-none")
    imgsepantaColor0.classList.add("d-none")
    imgsepantaColor1.classList.add("d-none")
    imgsepantaColor3.classList.add("d-none")

})
sepantaColor0.addEventListener("click", function () {

    imgsepantaColor3.classList.remove("d-none")
    imgsepantaColor0.classList.add("d-none")
    imgsepantaColor1.classList.add("d-none")
    imgsepantaColor2.classList.add("d-none")


})
sepantaColor3.addEventListener("click", function () {

    imgsepantaColor3.classList.add("d-none")
    imgsepantaColor0.classList.remove("d-none")
    imgsepantaColor1.classList.add("d-none")
    imgsepantaColor2.classList.add("d-none")


})
let secound = 65920
let showTimer = document.querySelector(".showTimer")
let showmin = document.querySelector(".minutes")
let showsecond = document.querySelector(".secound")
let showHours = document.querySelector(".Hours")

let totalSeconds = 18 * 3600 + 40 * 60 + 30

setInterval(() => {
    totalSeconds = totalSeconds - 1

    let displaySeconds = totalSeconds % 60
    let displayMinutes = Math.floor(totalSeconds / 60) % 60
    let displayHours = Math.floor(totalSeconds / 3600)

    showmin.innerHTML = `${displayMinutes}`
    showsecond.innerHTML = `${displaySeconds}`
    showHours.innerHTML = `${displayHours}`

}, 1000);
fetch('./partials/header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
  })
  .catch(err => console.error('خطا در لود هدر:', err));



