const fs = require('fs')

const input = fs
  .readFileSync('input2.txt')
  .toString()
  .trim()
  .split('\n')
  .map(row =>
    [row]
      .flatMap(row => row.split(': '))
      .flatMap(row => row.split('-').flatMap(row => row.split(' ')))
  )

let validCounter = 0

input.forEach(row => {
  const letter = row[2]
  const string = row[3]
  const pos1 = row[0] - 1
  const pos2 = row[1] - 1

  if (
    string[pos1] === letter ? string[pos2] !== letter : string[pos2] === letter
  )
    validCounter++
})
