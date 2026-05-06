input.onGesture(Gesture.Shake, function () {
	
})
input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        # # # # #
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        # # # # #
        . # # # .
        `)
})
input.onButtonPressed(Button.A, function () {
    hunger += 0 + 1
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . # # # .
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    if (health == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    } else if (health == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            # . . . .
            `)
    } else if (health == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else if (health == 4) {
        basic.showLeds(`
            . . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else if (health == 5) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else if (health == 6) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # . . .
            `)
    } else if (health == 7) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # # . . .
            # # . . .
            `)
    } else if (health == 8) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    } else if (health == 9) {
        basic.showLeds(`
            # . . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    } else if (health == 10) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    } else if (health == 11) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # # . .
            `)
    } else if (health == 12) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # # . .
            # # # . .
            `)
    } else if (health == 12) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # # . .
            # # # . .
            `)
    } else if (health == 13) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # # . .
            # # # . .
            # # # . .
            `)
    } else if (health == 14) {
        basic.showLeds(`
            # # . . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
    } else if (health == 15) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
    } else if (health == 16) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # # .
            `)
    } else if (health == 17) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # # .
            # # # # .
            `)
    } else if (health == 18) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # # .
            # # # # .
            # # # # .
            `)
    } else if (health == 19) {
        basic.showLeds(`
            # # # . .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    } else if (health == 20) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    } else if (health == 21) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # #
            `)
    } else if (health == 22) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # #
            # # # # #
            `)
    } else if (health == 23) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (health == 24) {
        basic.showLeds(`
            # # # # .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (health == 25) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    health += 0 + 1
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        # # # . #
        # # # . #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    happy += 0 + 1
    basic.showLeds(`
        . # . # .
        . # . # .
        . # . # .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . # .
        . . . # .
        . . . # .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # . # .
        # . . . #
        . # # # .
        `)
})
let health = 0
let hunger = 5
health = 5
let happy = 5
basic.showLeds(`
    . # # # .
    # # # # #
    # # # # #
    # # # # #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . # # #
    # # # # #
    # # # # #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . # # #
    # # . # #
    # # # # #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . # # #
    # # . # #
    # # # . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . # # #
    # # . # #
    # # # . #
    . # # # .
    `)
basic.showLeds(`
    . . . # .
    # . # # #
    # # . # #
    # # # . #
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    # . # # #
    # # . # #
    # # # . #
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    # . # # .
    # # . # #
    # # # . #
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    # . . # .
    # # . # #
    # # # . #
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    # . . . .
    # # . # #
    # # # . #
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    # . . . .
    # # . . #
    # # # . #
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    # . . . .
    # # . . .
    # # # . #
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    # . . . .
    # # . . .
    # # # . .
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # # . . .
    # # # . .
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # . . .
    # # # . .
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # . . .
    . # # . .
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . # # . .
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . # # . .
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . # # # .
    . # . # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # # # .
    . # . # .
    . # . # .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # . # .
    # # # # #
    `)
basic.showLeds(`
    . # # # .
    . # . # .
    . # . # .
    # # # # #
    . # # # .
    `)
if (health > 5) {
    health = 5
}
basic.forever(function () {
    if (health <= 3) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else if (health == 4) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
    } else if (health >= 5) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            # # # # #
            . # # # .
            `)
    }
    if (hunger < 2) {
        health += 0 - 1
    } else if (happy < 2) {
        health += 0 - 1
    }
    basic.pause(100)
    if (health <= 0) {
        basic.showIcon(IconNames.Skull)
    }
    basic.pause(4000)
})
basic.forever(function () {
    basic.pause(12000)
    happy += 0 - 1
    health += 0 - 1
    hunger += 0 - 1
})
basic.forever(function () {
    while (happy >= 6) {
        basic.pause(8000)
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            # # # # #
            . # # # .
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            # # # # #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # # # # #
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            # # # # #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            # # # # #
            . # # # .
            `)
    }
})
