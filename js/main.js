// default import 

import { Timer } from "./timer.js" 
import { elements } from "./elements.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import controlsVolume from "./controlsVolume.js"

const {
    minutesDisplay,
    secondsDisplay,
} = elements

const timer = Timer({
    minutesDisplay, 
    secondsDisplay, 
})

const sound = Sound()

Events ({ timer, sound})
controlsVolume({sound})
