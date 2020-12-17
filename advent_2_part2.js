const fs = require('fs')

const input = fs
  .readFileSync('input_2.txt')
  .toString()
  .trim()
  .split('\n')
  .map(row => row.split(': '))
  .map(row => [row[0].split(' '), row[1]].flat())
  .map(row => [row[0].split('-'), row[1], row[2]].flat())

console.log(input)

let validCounter = 0

input.forEach(row => {
  const letter = row[2]
  const string = row[3]
  const pos1 = row[0] - 1
  const pos2 = row[1] - 1

  if (
    string[pos1] === letter ? string[pos2] !== letter : string[pos2] === letter
  ) {
    validCounter++
  }
})

console.log(validCounter)
