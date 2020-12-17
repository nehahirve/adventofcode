const fs = require('fs')
const { start } = require('repl')
let input = fs.readFileSync('input.txt').toString()
input = input
  .split('\n')
  .map(item => +item)
  .sort((a, b) => a - b)

let startIndex = 0
let endIndex = input.length - 1

function find(startIndex, endIndex) {
  if (input[startIndex] + input[endIndex] === 2020) {
    return [
      input[startIndex] * input[endIndex],
      input[startIndex],
      input[endIndex]
    ]
  } else {
    if (input[startIndex] + input[endIndex] > 2020) {
      endIndex -= 1
      return find(startIndex, endIndex)
    } else {
      startIndex += 1
      return find(startIndex, endIndex)
    }
  }
}

let answer = find(startIndex, endIndex)

console.log(answer, 855 + 1165)
