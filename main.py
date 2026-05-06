def on_gesture_shake():
    global happy
    happy += 0 + 1
    led.stop_animation()
    basic.show_leds("""
        . # . # .
        . # . # .
        . # . # .
        # . . . #
        . # # # .
        """)
    basic.show_leds("""
        . . . # .
        . . . # .
        . . . # .
        # . . . #
        . # # # .
        """)
    basic.show_leds("""
        . # . # .
        . # . # .
        . # . # .
        # . . . #
        . # # # .
        """)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_a():
    global hunger
    hunger += 0 + 1
    basic.show_leds("""
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        """)
    basic.show_leds("""
        . # . # .
        . . . . .
        . . . . .
        . # # # .
        . # # # .
        """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.clear_screen()
    if health == 1:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            """)
    elif health == 2:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            # . . . .
            """)
    elif health == 3:
        basic.show_leds("""
            . . . . .
            . . . . .
            # . . . .
            # . . . .
            # . . . .
            """)
    elif health == 4:
        basic.show_leds("""
            . . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            """)
    elif health >= 5:
        basic.show_leds("""
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            """)
    elif health >= 6:
        basic.show_leds("""
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # . . .
            """)
    elif False:
        basic.show_leds("""
            # . . . .
            # . . . .
            # . . . .
            # # . . .
            # # . . .
            """)
    elif health >= 8:
        basic.show_leds("""
            # . . . .
            # . . . .
            # # . . .
            # # . . .
            # # . . .
            """)
    elif health >= 9:
        basic.show_leds("""
            # . . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            """)
    elif health >= 10:
        basic.show_leds("""
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            """)
    else:
        pass
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global health
    health += 0 + 1
    basic.show_leds("""
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        """)
    basic.show_leds("""
        . # . . .
        # # # . #
        # # # . #
        . # # # .
        . . # . .
        """)
    basic.show_leds("""
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        """)
input.on_button_pressed(Button.B, on_button_pressed_b)

health = 0
hunger = 5
health = 5
happy = 5
basic.show_leds("""
    . # # # .
    # # # # #
    # # # # #
    # # # # #
    . # # # .
    """)
basic.show_leds("""
    . # # # .
    # . # # #
    # # # # #
    # # # # #
    . # # # .
    """)
basic.show_leds("""
    . # # # .
    # . # # #
    # # . # #
    # # # # #
    . # # # .
    """)
basic.show_leds("""
    . # # # .
    # . # # #
    # # . # #
    # # # . #
    . # # # .
    """)
basic.show_leds("""
    . # # # .
    # . # # #
    # # . # #
    # # # . #
    . # # # .
    """)
basic.show_leds("""
    . . . # .
    # . # # #
    # # . # #
    # # # . #
    . # # # .
    """)
basic.show_leds("""
    . . . . .
    # . . . .
    # # . . .
    # # # . .
    . # # # .
    """)
basic.show_leds("""
    . . . . .
    . . . . .
    # # . . .
    . # # . .
    . # # # .
    """)
basic.show_leds("""
    . . . . .
    . . . . .
    # # . . .
    . # # . .
    . # # # .
    """)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . # # . .
    . # # # .
    """)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . # # # .
    """)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . # # # .
    . # . # .
    """)
basic.show_leds("""
    . . . . .
    . . . . .
    . # # # .
    . # . # .
    . # . # .
    """)
basic.show_leds("""
    . . . . .
    . # # # .
    . # . # .
    . # . # .
    # # # # #
    """)
basic.show_leds("""
    . # # # .
    . # . # .
    . # . # .
    # # # # #
    . # # # .
    """)
if health > 5:
    health = 5

def on_every_interval():
    basic.clear_screen()
loops.every_interval(60000, on_every_interval)

def on_forever():
    global health
    basic.pause(5000)
    if health <= 2:
        basic.show_leds("""
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            """)
        basic.show_leds("""
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            """)
    elif health == 15:
        basic.show_leds("""
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            # . . . #
            . . . . .
            . # # # .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            # . . . #
            . . . . .
            . # # # .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            """)
    elif health >= 4:
        basic.show_leds("""
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            """)
        basic.show_leds("""
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            """)
    if hunger < 2:
        health += 0 - 1
    elif happy < 2:
        health += 0 - 1
    basic.pause(100)
    if health <= 0:
        basic.show_icon(IconNames.SKULL)
basic.forever(on_forever)

def on_forever2():
    global happy, health, hunger
    basic.pause(15000)
    happy += 0 - 1
    health += 0 - 1
    hunger += 0 - 1
basic.forever(on_forever2)
