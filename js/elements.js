
const cardFlorest = document.querySelector('.card-florest')
const cardRain = document.querySelector('.card-rain')
const cardCoffee = document.querySelector('.card-coffee')
const cardFire = document.querySelector('.card-fire')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonPlay = document.querySelector('.button-play')
const buttonPause = document.querySelector('.button-pause')
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
const svgFillPlay = document.querySelector('.button-play svg path')
const svgPauseWhite = document.querySelector('.svg-pause-white')
const svgPauseBlack = document.querySelector('.svg-pause-black')
const svgFillStop = document.querySelector('.button-stop svg path')
const svgFillAdd = document.querySelector('.button-add svg path')
const svgFillDecrement = document.querySelector('.button-decrement svg path')
let volumeFlorest = document.querySelector('#volume-florest')
let volumeRain = document.querySelector('#volume-rain')
let volumeCoffee = document.querySelector('#volume-coffee')
let volumeFire = document.querySelector('#volume-fire')
const buttonDarkModeWhite = document.querySelector('.dark-mode-white')
const buttonDarkModeBlack = document.querySelector('.dark-mode-black')
const body = document.querySelector('body')
const textTimer = document.querySelector('.timer')


export const elements = {
    buttonDarkModeWhite,
    buttonDarkModeBlack,
    cardFlorest,
    cardRain,
    cardCoffee,
    cardFire,
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonPause,
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
    svgPauseWhite,
    svgPauseBlack
}