const randomNumber = Math.round(Math.random() * 10)
let xAttemps = 1

function change(event) {
    event.preventDefault()

    const inputNumber = document.querySelector('#inputNumber')
    
    if(Number(inputNumber.value) == randomNumber) {
        document.querySelector(".scren1").classList.add(".hide")
        document.querySelector(".scren2 hide").classList.remove(".hide")

        document.querySelector(".screen2 h2")
        .innerText = `Você acertou em ${xAttemps} tentativa` 
    }

    xAttemps++
}

//Event

const btnTry= document.querySelector("#btnTry")
const btnReset= document.querySelector("#btnReset")
