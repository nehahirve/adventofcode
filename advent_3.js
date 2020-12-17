const fs = require('fs')

const input = fs
  .readFileSync('input_3.txt')
  .toString()
  .trim()
  .split('\n')
  .map(row => row.split(': '))
  .map(row => [row[0].split(' '), row[1]].flat())
  .map(row => [row[0].split('-'), row[1], row[2]].flat())

// console.log(input)

let validCounter = 0

input.forEach(row => {
  const instances = row[3].split(row[2]).length - 1
  if (instances >= row[0] && instances <= row[1]) {
    validCounter++
  }
})

console.log(validCounter)
