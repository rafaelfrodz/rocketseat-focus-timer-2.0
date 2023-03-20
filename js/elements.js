const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonPlay = document.querySelector('.button-play')
const buttonStop= document.querySelector('.button-stop')
const buttonAdd = document.querySelector('.button-add')
const buttonDecrement = document.querySelector('.button-decrement')
const buttonSoundFlorest = document.querySelector('.button-florest')
const buttonSoundRain = document.querySelector('.button-rain')
const buttonSoundCoffee = document.querySelector('.button-coffee')
const buttonSoundFire= document.querySelector('.button-fire')
const svgFillFlorest = document.querySelector('.svg-fill-florest')
const svgFillRain = document.querySelector('.svg-fill-rain')
const svgFillCoffee = document.querySelector('.svg-fill-coffee')
const svgFillFire = document.querySelector('.svg-fill-fire')
let volumeFlorest = document.querySelector('#volume-florest')
let volumeRain = document.querySelector('#volume-rain')
let volumeCoffee = document.querySelector('#volume-coffee')
let volumeFire = document.querySelector('#volume-fire')

export const elements = {
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
    volumeFlorest,
    volumeRain,
    volumeCoffee,
    volumeFire
}