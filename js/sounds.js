export default function () {
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const bgAudio = new Audio("/sounds/fire.wav")
    const bgFlorest = new Audio("/sounds/florest.wav")
    const bgRain = new Audio("/sounds/rain.wav")
    const bgCoffee = new Audio("/sounds/coffee.wav")
    const bgFire = new Audio("/sounds/fire.wav")

    bgAudio.loop = true
    
    

    function pressButton() {
        buttonPressAudio.play()
    }

    function timeEnd() {
        kitchenTimer.play()
    }

    return{
        pressButton,
        timeEnd,
        bgAudio,
        bgFlorest,
        bgRain,
        bgCoffee,
        bgFire
    }
}