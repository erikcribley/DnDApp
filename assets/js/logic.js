// Die Functions
function dFour () {
    let roll = Math.floor((Math.random() * 4) + 1)
    return roll
}

function dSix () {
    let roll = Math.floor((Math.random() * 6) + 1)
    return roll
}

function dEight () {
    let roll = Math.floor((Math.random() * 8) + 1)
    return roll
}

function dTen () {
    let roll = Math.floor((Math.random() * 10) + 1)
    return roll
}

function dTwelve () {
    let roll = Math.floor((Math.random() * 12) + 1)
    return roll
}

//Score generation functions
function add (x) {
    let array = x
    let sum = 0
    for (i = 0; i < array.length; i++) {
        sum += array[i]
    }
    console.log(sum)
    return sum
}

function dropLowest (x) {
    x.sort()
    x.shift()
    console.log(x)
    return x
}

function fourDSix () {
    let array = []
    for (i = 0; i < 4; i++) {
    array.push(dSix())
    }
    console.log(array)
    return array
}

function threeDSix () {
    let array = []
    for (i = 0; i < 3; i++) {
        array.push(dSix())
    }
    console.log(array)
    return array
}

//Score Generation methods
function standard () {
    let abilities = []
    for (j = 0; j < 6; j++) {
        abilities.push(add(dropLowest(fourDSix())))
    }
    console.log(abilities)
    return abilities
}

function classic () {
    let abilities = []
    for (j = 0; j < 6; j++) {
        abilities.push(add(threeDSix()))
    }
    console.log(abilities)
    return(abilities)
}