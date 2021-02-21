let strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    if (smarthome.ReadNoise(AnalogPin.P1) > 30) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(100)
        if (smarthome.ReadNoise(AnalogPin.P1) > 40) {
            strip.showColor(neopixel.colors(NeoPixelColors.Orange))
            basic.pause(100)
            if (smarthome.ReadNoise(AnalogPin.P1) > 50) {
                strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
                basic.pause(100)
                if (smarthome.ReadNoise(AnalogPin.P1) > 60) {
                    strip.showColor(neopixel.colors(NeoPixelColors.Green))
                    basic.pause(100)
                    if (smarthome.ReadNoise(AnalogPin.P1) > 70) {
                        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
                        basic.pause(100)
                    }
                }
            }
        }
    }
})
basic.forever(function () {
	
})
