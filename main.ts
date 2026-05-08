input.onGesture(Gesture.Shake, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . # #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . # #
        . . . . #
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        # # # # #
        . # # # .
        `)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
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
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    if (hunger == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    } else if (hunger == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            # . . . .
            `)
    } else if (hunger == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else if (hunger == 4) {
        basic.showLeds(`
            . . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else if (hunger == 5) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else if (hunger == 6) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # . . .
            `)
    } else if (hunger == 7) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # # . . .
            # # . . .
            `)
    } else if (hunger == 8) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    } else if (hunger == 9) {
        basic.showLeds(`
            # . . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    } else if (hunger == 10) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    } else if (hunger == 11) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # # . .
            `)
    } else if (hunger == 12) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # # . .
            # # # . .
            `)
    } else if (hunger == 12) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # # . .
            # # # . .
            `)
    } else if (hunger == 13) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # # . .
            # # # . .
            # # # . .
            `)
    } else if (hunger == 14) {
        basic.showLeds(`
            # # . . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
    } else if (hunger == 15) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
    } else if (hunger == 16) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # # .
            `)
    } else if (hunger == 17) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # # .
            # # # # .
            `)
    } else if (hunger == 18) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # # .
            # # # # .
            # # # # .
            `)
    } else if (hunger == 19) {
        basic.showLeds(`
            # # # . .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    } else if (hunger == 20) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    } else if (hunger == 21) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # #
            `)
    } else if (hunger == 22) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # #
            # # # # #
            `)
    } else if (hunger == 23) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (hunger == 24) {
        basic.showLeds(`
            # # # # .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (hunger >= 25) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    if (happy == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    } else if (happy == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            # . . . .
            `)
    } else if (happy == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else if (happy == 4) {
        basic.showLeds(`
            . . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else if (happy == 5) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else if (happy == 6) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # . . .
            `)
    } else if (happy == 7) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # # . . .
            # # . . .
            `)
    } else if (happy == 8) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    } else if (happy == 9) {
        basic.showLeds(`
            # . . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    } else if (happy == 10) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    } else if (happy == 11) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # # . .
            `)
    } else if (happy == 12) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # # . .
            # # # . .
            `)
    } else if (happy == 12) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # # . .
            # # # . .
            `)
    } else if (happy == 13) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # # . .
            # # # . .
            # # # . .
            `)
    } else if (happy == 14) {
        basic.showLeds(`
            # # . . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
    } else if (happy == 15) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
    } else if (happy == 16) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # # .
            `)
    } else if (happy == 17) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # # .
            # # # # .
            `)
    } else if (happy == 18) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # # .
            # # # # .
            # # # # .
            `)
    } else if (happy == 19) {
        basic.showLeds(`
            # # # . .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    } else if (happy == 20) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    } else if (happy == 21) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # #
            `)
    } else if (happy == 22) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # #
            # # # # #
            `)
    } else if (happy == 23) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (happy == 24) {
        basic.showLeds(`
            # # # # .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (happy >= 25) {
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
    } else if (health >= 25) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
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
let happy = 0
let health = 0
let hunger = 0
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
hunger = 5
health = 5
happy = 5
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
if (hunger > 5) {
    hunger = 5
}
if (happy > 5) {
    happy = 5
}
basic.forever(function () {
    if (health <= 2) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
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
    } else if (health == 3) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
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
    if (health > 25) {
        health = 25
    }
    if (hunger > 25) {
        hunger = 25
    }
    if (happy > 25) {
        happy = 25
    }
})
basic.forever(function () {
    while (happy >= 6) {
        basic.pause(10000)
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
basic.forever(function () {
    basic.pause(6000)
    if (hunger > 3) {
        health += 0 + 1
    } else if (happy > 5) {
        health += 0 + 1
    }
})
loops.everyInterval(8000, function () {
    happy += 0 - 1
    health += 0 - 1
    hunger += 0 - 1
})
