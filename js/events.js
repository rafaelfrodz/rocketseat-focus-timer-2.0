import { elements } from "./elements.js"

const {
    buttonDarkModeWhite,
    buttonDarkModeBlack,
    cardFlorest,
    cardRain,
    cardCoffee,
    cardFire,
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonStop,
    buttonAdd,
    buttonDecrement,
    buttonSoundFlorest,
    buttonSoundRain,
    buttonSoundCoffee,
    buttonSoundFire,
    svgFillFlorest,
    svgFillRain,
    svgFillCoffee,
    svgFillFire,
    svgFillPlay,
    svgFillStop,
    svgFillAdd,
    svgFillDecrement,
    volumeFlorest,
    volumeRain,
    volumeCoffee,
    volumeFire,
    body,
    textTimer,
} = elements
        
let playSoundFlores = true
let playSoundRain = true
let playSoundCoffee = true
let playSoundFire = true


export default function ({
    timer,
    sound   
}) {

    buttonDarkModeWhite.addEventListener('click', () => {
        body.classList.add('body-dark')
        textTimer.classList.add('timer-dark')
        svgFillPlay.classList.add('button-dark-fill')
        svgFillStop.classList.add('button-dark-fill')
        svgFillAdd.classList.add('button-dark-fill')
        svgFillDecrement.classList.add('button-dark-fill')
        svgFillFlorest.classList.add('button-dark-fill')
        svgFillRain.classList.add('button-dark-fill')
        svgFillCoffee.classList.add('button-dark-fill')
        svgFillFire.classList.add('button-dark-fill')
        cardFlorest.classList.add('card-dark')
        cardRain.classList.add('card-dark')
        cardCoffee.classList.add('card-dark')
        cardFire.classList.add('card-dark')
        buttonDarkModeWhite.classList.add('hide')
        buttonDarkModeBlack.classList.remove('hide')
    })

    buttonDarkModeBlack.addEventListener('click', () => {
        body.classList.remove('body-dark')
        textTimer.classList.remove('timer-dark')
        svgFillPlay.classList.remove('button-dark-fill')
        svgFillStop.classList.remove('button-dark-fill')
        svgFillAdd.classList.remove('button-dark-fill')
        svgFillDecrement.classList.remove('button-dark-fill')
        svgFillFlorest.classList.remove('button-dark-fill')
        svgFillRain.classList.remove('button-dark-fill')
        svgFillCoffee.classList.remove('button-dark-fill')
        svgFillFire.classList.remove('button-dark-fill')
        cardFlorest.classList.remove('card-dark')
        cardRain.classList.remove('card-dark')
        cardCoffee.classList.remove('card-dark')
        cardFire.classList.remove('card-dark')
        buttonDarkModeWhite.classList.remove('hide')
        buttonDarkModeBlack.classList.add('hide')

    })


    buttonPlay.addEventListener('click', () => {
        timer.countdown()
        sound.pressButton()
    })
    
    buttonStop.addEventListener('click', () => {
        timer.reset()
        sound.pressButton()
    })

    buttonAdd.addEventListener('click', () => {
        timer.addFiveMinutes()
        sound.pressButton()
    })

    buttonDecrement.addEventListener('click', () => {
        timer.removeFiveMinutos()
        sound.pressButton()
    })
    
    buttonSoundFlorest.addEventListener('click', () => {
        document.querySelector('.cards-sounds-buttons div').classList.toggle('button-clicked')
        svgFillFlorest.classList.toggle('button-clicked-fill')

        sound.pressButton()
        if (playSoundFlores) {
            sound.bgFlorest.play()
            playSoundFlores = false
        } else {
            sound.bgFlorest.pause()
            playSoundFlores = true
        }
     
    })
    
    buttonSoundRain.addEventListener('click', () => {
        cardRain.classList.toggle('button-clicked')
        svgFillRain.classList.toggle('button-clicked-fill')

        sound.pressButton()
        if (playSoundRain) {
            sound.bgRain.play()
            playSoundRain = false
        } else {
            sound.bgRain.pause()
            playSoundRain = true
        }
    })

    buttonSoundCoffee.addEventListener('click', () => {
        cardCoffee.classList.toggle('button-clicked')
        svgFillCoffee.classList.toggle('button-clicked-fill')
       
        sound.pressButton()
        if (playSoundCoffee) {
            sound.bgCoffee.play()
            playSoundCoffee = false
        } else {
            sound.bgCoffee.pause()
            playSoundCoffee = true
        }
    })
    
    buttonSoundFire.addEventListener('click', () => {
        cardFire.classList.toggle('button-clicked')
        svgFillFire.classList.toggle('button-clicked-fill')
        
        sound.pressButton()
        if (playSoundFire) {
            sound.bgFire.play()
            playSoundFire = false
        } else {
            sound.bgFire.pause()
            playSoundFire = true
        }
    })


}