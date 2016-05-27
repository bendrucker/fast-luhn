'use strict'

module.exports = (function (array) {
  return function luhn (number) {
    if (typeof number !== 'string') throw new TypeError('Expected string input')
    if (!number) return false
    var length = number.length
    var bit = 1
    var sum = 0
    var value

    while (length) {
      value = parseInt(number.charAt(--length), 10)
      sum += (bit ^= 1) ? array[value] : value
    }

    return !!sum && sum % 10 === 0
  }
}([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]))
