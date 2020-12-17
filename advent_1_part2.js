const fs = require('fs')
let input = fs.readFileSync('input.txt').toString()
input = input
  .split('\n')
  .map(item => +item)
  .sort((a, b) => a - b)

// let startIndex = 0
// let endIndex = input.length - 1
let answer

for (let index in input) {
  let startIndex = 0
  let endIndex = input.length - 1
  let sum = 2020 - input[index]
  if (!answer) {
    answer = find(startIndex, endIndex, sum) * input[index]
  }
}

function find(startIndex, endIndex, sum) {
  if (startIndex >= endIndex) {
    return null
  }
  if (input[startIndex] + input[endIndex] === sum) {
    return input[startIndex] * input[endIndex]
  } else {
    if (input[startIndex] + input[endIndex] > sum) {
      endIndex -= 1
      return find(startIndex, endIndex, sum)
    } else {
      startIndex += 1
      return find(startIndex, endIndex, sum)
    }
  }
}

console.log(answer)
