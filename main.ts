input.onButtonPressed(Button.AB, function () {
    sprite = 0
    basic.showNumber(randint(1, 6))
    basic.showNumber(randint(1, 6))
    basic.showNumber(randint(1, 6))
    basic.showNumber(randint(1, 6))
    basic.showNumber(randint(1, 6))
    basic.pause(200)
    basic.showNumber(randint(1, 6))
    basic.pause(500)
    basic.showNumber(randint(1, 6))
    basic.pause(1000)
    sprite = randint(1, 6)
    for (let index = 0; index < 20; index++) {
        basic.pause(5000)
        basic.showNumber(sprite)
    }
})
let sprite = 0
let Apple = 0
if (Apple == 1) {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
if (Apple == 2) {
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
if (Apple == 3) {
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
if (Apple == 4) {
    basic.showLeds(`
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
if (Apple == 5) {
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
if (Apple == 6) {
    basic.showLeds(`
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
if (Apple == 7) {
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
if (Apple == 8) {
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
if (Apple == 9) {
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        `)
}
if (Apple == 10) {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
}
if (Apple == 11) {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
}
if (Apple == 12) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        `)
}
if (Apple == 13) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
if (Apple == 14) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        `)
}
if (Apple == 15) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
}
if (Apple == 16) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        `)
}
if (Apple == 17) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        `)
}
if (Apple == 18) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        `)
}
if (Apple == 19) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        . . . . .
        `)
}
if (Apple == 20) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        `)
}
if (Apple == 21) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
}
if (Apple == 22) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        `)
}
if (Apple == 23) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
}
if (Apple == 24) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        `)
}
if (Apple == 25) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
}
basic.forever(function () {
	
})
