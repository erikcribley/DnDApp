//dice functions
dice = (n, side) => {
  let array = []
  for (i = 0; i < n; i++) {
    array.push(Math.floor((Math.random() * side) + 1))
  }
  console.log(array)
  return array
}

dropLowest = (arr) => {
  arr.sort()
  arr.shift()
  console.log(arr)
  return arr
}

add = (arr) => {
  let sum = 0
  for (i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  console.log(sum)
  return sum
}

rerollOnes = (arr) => {
  for (i = 0; i < arr.length; i++) {
    while (arr[i] === 1) {
      arr.splice(i, 1, Math.floor((Math.random() * 6) + 1))
    }
  }
  console.log(arr)
  return arr
}

//ability score generation functions
standard = () => {
  let abilities = []
  for (j = 0; j < 6; j++) {
    abilities.push(add(dropLowest(dice(4, 6))))
  }
  console.log(abilities)
  return abilities
}

classic = () => {
  let abilities = []
  for (j = 0; j < 6; j++) {
    abilities.push(add(dice(3, 6)))
  }
  console.log(abilities)
  return(abilities)
}

op = () => {
  let abilities = []
  for (j = 0; j < 6; j++) {
    abilities.push(add(dropLowest(rerollOnes(dice(4, 6)))))
  }
  console.log(abilities)
  return abilities
}

//advantage & disadvantage
advantage = () => {
  let roll = dice(2, 20)
  if (roll[0] >= roll[1]) {
    return roll[0]
  } else {
    return roll[1]
  }
}

disadvantage = () => {
  let roll = dice(2, 20)
  if (roll[0] <= roll[1]) {
    return roll[0]
  } else {
    return roll[1]
  }
}

modifier = (n) => {
  return Math.floor((n - 10) / 2)
}