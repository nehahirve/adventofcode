const fs = require('fs')
const map = fs
  .readFileSync('input_3.txt')
  .toString()
  .split('\n')
  .map(row => row.split(''))

let pos = { x: 0, y: 0 }

let trees = 0

for (let i = 1; i < map.length; i++) {
  pos.x = (pos.x + 3) % map[0].length
  pos.y = i
  if (map[pos.y][pos.x] === '#') {
    trees++
  }
}

console.log(trees)
