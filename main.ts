input.onButtonPressed(Button.A, function () {
    status += 1
    if (status == 4) {
        status = 0
    }
})
let head = 0
let status = 0
status = 0
basic.forever(function () {
    if (status == 0) {
        basic.showNumber(input.lightLevel())
    } else if (status == 1) {
        basic.showNumber(input.temperature())
    } else if (status == 2) {
        basic.showNumber(input.soundLevel())
    } else {
        head = input.compassHeading()
        if (head < 45) {
            basic.showString("N")
        } else if (head < 135) {
            basic.showString("E")
        } else if (head < 225) {
            basic.showString("S")
        } else if (head < 315) {
            basic.showString("W")
        } else {
            basic.showString("N")
        }
    }
})
