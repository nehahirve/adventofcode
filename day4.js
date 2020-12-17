const fs = require('fs')

const input = fs
  .readFileSync('input4.txt')
  .toString()
  .trim()
  .split('\n\n')
  .map(string =>
    string
      .replace(/\n/g, ' ')
      .split(' ')
      .map(pair => pair.split(':')[0])
  )

const validPassports = input
  .map(passport => {
    return passport.length < 7
      ? false
      : passport.length > 7
      ? true
      : passport.includes('cid')
      ? false
      : true
  })
  .filter(item => item).length

console.log(validPassports)
