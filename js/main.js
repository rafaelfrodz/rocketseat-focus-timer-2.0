// default import 

import {Timer} from "./timer.js" 
import { elements } from "./elements.js"
import Sound from "./sounds.js"
import Events from "./events.js"

const {
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonStop,
    buttonAdd,
    buttonDecrement,
    buttonSoundFlorest,
    buttonSoundRain,
    buttonSoundCoffee,
    buttonSoundFire
} = elements



const timer = Timer({
    minutesDisplay, 
    secondsDisplay, 
})

const sound = Sound()

Events ({ timer, sound})

