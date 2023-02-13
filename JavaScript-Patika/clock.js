const fname = prompt ("Lütfen adınızı giriniz  : ")
const lname = prompt ("Lütfen soyadınızı giriniz  : ")

let nameLabel = document.querySelector("#myName")

nameLabel.innerHTML = `${fname} ${lname}`

let current = new Date();

let dayName = new Date().toLocaleDateString('tr', { weekday:"long"})



let timeClock = `${current.toLocaleTimeString()}`
let currentTime = document.querySelector("#myClock")
currentTime.innerHTML = `${timeClock} ${dayName}`

