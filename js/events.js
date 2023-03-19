import { elements } from "./elements.js"

const {
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


export default function ({
    controls,
    timer,
    sound   
}) {
    buttonPlay.addEventListener('click', () => {
        controls.play()
        timer.countdown()
        sound.pressButton()
    })
    
    buttonPause.addEventListener('click', () => {
        controls.pause()
        timer.hold()
        sound.pressButton()
    })
    
    buttonStop.addEventListener('click', () => {
        controls.reset()
        timer.reset()
        sound.pressButton()
    })
    
    buttonSoundOn.addEventListener('click', () => {
        buttonSoundOn.classList.add('hide')
        buttonSoundOff.classList.remove('hide')
        sound.bgAudio.pause()
    })
    
    buttonSoundOff.addEventListener('click', () => {
        buttonSoundOff.classList.add('hide')
        buttonSoundOn.classList.remove('hide')
        sound.bgAudio.play()
    })
    
    buttonSet.addEventListener('click', () => {
      let newMinutes = controls.getMinutes()
    
      if (!newMinutes) {
        timer.reset()
        return
      }
    
      timer.updateDisplay(newMinutes, 0)
      timer.updateMinutes(newMinutes)
    })

}