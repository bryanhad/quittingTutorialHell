const hour = document.querySelector('#hour')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')
const ms = document.querySelector('#ms')

const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const resetButton = document.querySelector('#reset')

let hourNumber = 0
let minNumber = 0
let secNumber = 0
let msNumber = 0
let timer = false


startButton.addEventListener('click', () => {
    timer = true
    stopWatch()
})
stopButton.addEventListener('click', () => {
    timer = false
})
resetButton.addEventListener('click', () => {
    timer = false

    msNumber = 0
    secNumber = 0
    minNumber = 0
    hourNumber = 0

    ms.innerHTML = `00`
    sec.innerHTML = `00`
    min.innerHTML = `00`
    hour.innerHTML = `00`
})

const stopWatch = () => {
    if (timer) {
        msNumber++

        if (msNumber >= 100) {
            secNumber++
            msNumber = 0
        }

        if (secNumber >= 60) {
            minNumber++
            secNumber = 0
        }

        if (minNumber >= 60) {
            hourNumber++
            minNumber = 0
        }

        let msString = msNumber
        let secString = secNumber
        let minString = minNumber
        let hourString = hourNumber

        if (msString < 10) {
            msString = `0${msNumber}`
        }
        if (secString < 10) {
            secString = `0${secNumber}`
        }
        if (minString < 10) {
            minString = `0${minNumber}`
        }
        if (hourString < 10) {
            hourString = `0${hourNumber}`
        }

        ms.innerHTML = msString
        sec.innerHTML = secString
        min.innerHTML = minString
        hour.innerHTML = hourString

        // refer to the stopwatch function to run in again after 10ms of delay.
        setTimeout(stopWatch, 10)
    }
}