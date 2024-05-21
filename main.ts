function Anzeige_Gas_Wert () {
    I2C_LCD1602.ShowString(convertToText(pins.analogReadPin(AnalogPin.P3)), 0, 1)
}
function Alarm (Aufruf: number) {
    while (pins.analogReadPin(AnalogPin.P3) <= 600) {
        I2C_LCD1602.ShowString("GAS Alarm:", 0, 0)
        Anzeige_Gas_Wert()
        music.ringTone(262)
        basic.pause(100)
        music.stopAllSounds()
    }
}
basic.showIcon(IconNames.Heart)
I2C_LCD1602.LcdInit(39)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P3) > 600) {
        Alarm(1)
    }
})
