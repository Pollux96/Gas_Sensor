basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.showString("" + (pins.analogReadPin(AnalogPin.P3)))
})
