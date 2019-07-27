//dice functions
function dice (x, y) {
    let array = []
    for (i = 0; i < x; i++) {
        array.push(Math.floor((Math.random() * y) + 1))
    }
    console.log(array)
    return array
}

function dropLowest (x) {
    x.sort()
    x.shift()
    console.log(x)
    return x
}

function add (x) {
    let array = x
    let sum = 0
    for (i = 0; i < array.length; i++) {
        sum += array[i]
    }
    console.log(sum)
    return sum
}

//ability score generation functions
function standard () {
    let abilities = []
    for (j = 0; j < 6; j++) {
        abilities.push(add(dropLowest(dice(4, 6))))
    }
    console.log(abilities)
    return abilities
}

function classic () {
    let abilities = []
    for (j = 0; j < 6; j++) {
        abilities.push(add(dice(3, 6)))
    }
    console.log(abilities)
    return(abilities)
}