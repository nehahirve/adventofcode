const fs = require('fs')
const map = fs
  .readFileSync('input_3.txt')
  .toString()
  .split('\n')
  .map(row => row.split(''))

const slopes = [
  { x: 1, y: 1 },
  { x: 3, y: 1 },
  { x: 5, y: 1 },
  { x: 7, y: 1 },
  { x: 1, y: 2 }
]

let product = 1

for (let slope of slopes) {
  product *= countTrees(slope)
}

console.log(product)

function countTrees(slope) {
  let trees = 0
  let pos = { x: 0, y: 0 }
  for (pos.y = slope.y; pos.y < map.length; pos.y += slope.y) {
    pos.x = (pos.x + slope.x) % map[0].length
    if (map[pos.y][pos.x] === '#') {
      trees++
    }
  }
  return trees
}
