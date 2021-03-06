input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    pins.servoSetPulse(AnalogPin.P2, 0)
})
input.onButtonPressed(Button.A, function () {
    pins.servoSetPulse(AnalogPin.P2, 1500)
    basic.showIcon(IconNames.Happy)
    pins.servoWritePin(AnalogPin.P2, 0)
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    pins.servoSetPulse(AnalogPin.P2, 1500)
    basic.showIcon(IconNames.Sad)
    pins.servoWritePin(AnalogPin.P2, 180)
    basic.pause(500)
})
let strip = neopixel.create(DigitalPin.P1, 6, NeoPixelMode.RGB)
strip.setBrightness(30)
pins.servoWritePin(AnalogPin.P2, 90)
pins.servoSetPulse(AnalogPin.P2, 1500)
basic.forever(function () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Orange))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Purple))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Violet))
    strip.show()
    basic.pause(500)
    strip.clear()
    strip.show()
    basic.pause(500)
})
