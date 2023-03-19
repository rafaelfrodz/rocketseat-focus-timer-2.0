// default import 
import {Controls} from "./controls.js"
import {Timer} from "./timer.js" 
import { elements } from "./elements.js"
import Sound from "./sounds.js"
import Events from "./events.js"

const {
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
    buttonSoundFire
} = elements

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonAdd
})

const timer = Timer({
    minutesDisplay, 
    secondsDisplay, 
    resetControls: controls.reset,
})

const sound = Sound()

Events ({controls, timer, sound})

