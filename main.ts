input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 255, 255, 0)
        basic.pause(500)
        Right.showColor(neopixel.colors(NeoPixelColors.Black))
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 0, 0)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 5; index++) {
        Left.showColor(neopixel.colors(NeoPixelColors.Yellow))
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 255, 255, 0)
        basic.pause(500)
        Left.showColor(neopixel.colors(NeoPixelColors.Black))
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 0, 0, 0)
        basic.pause(500)
    }
})
let Right: neopixel.Strip = null
let Left: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
Left = strip.range(0, 1)
Right = strip.range(1, 1)
basic.forever(function () {
	
})
