function add (x) {
    let array = x
    let sum = 0
    for (i = 0; i < array.length; i++) {
        sum += array[i]
    }
    console.log(sum)
}

function dropLowest (x) {
    x.sort()
    x.shift()
    console.log(x)
    add(x)
}

function fourDSix () {
    let array = []
    for (i = 0; i < 4; i++) {
    array.push(Math.floor((Math.random() * 6) + 1))
    }    
    console.log(array)
    dropLowest(array)
}

console.log(fourDSix())