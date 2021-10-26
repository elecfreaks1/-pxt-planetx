input.onButtonPressed(Button.A, function () {
    serial.writeValue("1_b", PlanetX_Basic.Trackbit_Init_Sensor_Val(PlanetX_Basic.TrackbitChannel.One, PlanetX_Basic.TrackBit_gray.One))
    serial.writeValue("1_w", PlanetX_Basic.Trackbit_Init_Sensor_Val(PlanetX_Basic.TrackbitChannel.One, PlanetX_Basic.TrackBit_gray.Two))
    serial.writeLine("")
    serial.writeValue("2_b", PlanetX_Basic.Trackbit_Init_Sensor_Val(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackBit_gray.One))
    serial.writeValue("2_w", PlanetX_Basic.Trackbit_Init_Sensor_Val(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackBit_gray.Two))
    serial.writeLine("")
    serial.writeValue("3_b", PlanetX_Basic.Trackbit_Init_Sensor_Val(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackBit_gray.One))
    serial.writeValue("3_w", PlanetX_Basic.Trackbit_Init_Sensor_Val(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackBit_gray.Two))
    serial.writeLine("")
    serial.writeValue("4_b", PlanetX_Basic.Trackbit_Init_Sensor_Val(PlanetX_Basic.TrackbitChannel.Four, PlanetX_Basic.TrackBit_gray.One))
    serial.writeValue("4_w", PlanetX_Basic.Trackbit_Init_Sensor_Val(PlanetX_Basic.TrackbitChannel.Four, PlanetX_Basic.TrackBit_gray.Two))
    serial.writeLine("")
})
input.onButtonPressed(Button.B, function () {
    serial.writeValue("channel_1", PlanetX_Basic.TrackbitgetGray(PlanetX_Basic.TrackbitChannel.One))
    serial.writeValue("channel_2", PlanetX_Basic.TrackbitgetGray(PlanetX_Basic.TrackbitChannel.Two))
    serial.writeValue("channel_3", PlanetX_Basic.TrackbitgetGray(PlanetX_Basic.TrackbitChannel.Three))
    serial.writeValue("channel_4", PlanetX_Basic.TrackbitgetGray(PlanetX_Basic.TrackbitChannel.Four))
    serial.writeLine("")
})
basic.forever(function () {
	
})
