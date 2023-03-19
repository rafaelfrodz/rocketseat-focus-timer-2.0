import { elements } from "./elements.js"

const {
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
    svgFillFire
} = elements
        
let playSoundFlores = true
let playSoundRain = true
let playSoundCoffee = true
let playSoundFire = true


export default function ({
    timer,
    sound   
}) {
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
    
    buttonSoundFlorest.addEventListener('click', () => {
        buttonSoundFlorest.classList.toggle('button-clicked')
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
        buttonSoundRain.classList.toggle('button-clicked')
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
        buttonSoundCoffee.classList.toggle('button-clicked')
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
        buttonSoundFire.classList.toggle('button-clicked')
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