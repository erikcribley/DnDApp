function dropLowest (x) {
    x.sort()
    x.shift()
    console.log(x)
}

function fourDSix () {
    let array = []
    for (i = 0; i < 4; i++) {
    array.push(Math.floor((Math.random() * 6) + 1))
    }    
    console.log(array)
    dropLowest(array)
}

fourDSix()