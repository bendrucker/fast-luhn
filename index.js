'use strict'

module.exports = (function (array) {
  return function luhn (number) {
    if (typeof number !== 'string') throw new TypeError('Expected string input')
    if (!number) return false
    const trimmed = number.replace(/[ -]/g, '')
    let length = trimmed.length
    let bit = 1
    let sum = 0
    let value

    while (length) {
      value = parseInt(trimmed.charAt(--length), 10)
      bit ^= 1
      sum += bit ? array[value] : value
    }

    return sum % 10 === 0
  }
}([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]))
