import { elements } from "./elements.js"

const { 
    volumeFlorest,
    volumeRain,
    volumeCoffee,
    volumeFire
 } = elements

export default function ({
    sound
}) {

    volumeFlorest.addEventListener('input', () => {
        let volume = volumeFlorest.value 
        if (volume == 10) {
            volume = 1
        } else {
            volume = volume / 10
        }
        sound.bgFlorest.volume = volume
        
    })

    volumeRain.addEventListener('input', () => {
        let volume = volumeRain.value 
        if (volume == 10) {
            volume = 1
        } else {
            volume = volume / 10
        }
        sound.bgRain.volume = volume
        
    })

    volumeCoffee.addEventListener('input', () => {
        let volume = volumeCoffee.value 
        if (volume == 10) {
            volume = 1
        } else {
            volume = volume / 10
        }
        sound.bgCoffee.volume = volume
        
    })

    volumeFire.addEventListener('input', () => {
        let volume = volumeFire.value 
        if (volume == 10) {
            volume = 1
        } else {
            volume = volume / 10
        }
        sound.bgFire.volume = volume  
    })

}