'use strict'

module.exports = (function (array) {
  return function luhn (number) {
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


// Based on https://gist.github.com/thensg/07bd82f73a1f784a35f0

/* Calculates the Luhn checksum */
module.exports.calculate = function calculateLuhn(digits) {
  var sum = luhnSum(digits, false);
  return digits += ((sum * 9) % 10).toString();
};

/* Create a precomputed list based on doubling
   each digit, as described in luhnSum(). */
var PRECOMPUTED = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];

/* Sum each digit from right to left, and double
   every second digit. If the double exceeds 9,
   then sum its digits (i.e., 654321 -> 358341
   -> 24) */
function luhnSum(digits, even) {
  var sum = 0,
      digit = 0,
      i = digits.length;

  while (i--) {
    digit = Number(digits[i]);
    sum += (even = !even) ? PRECOMPUTED[digit] : digit;
  }

  return sum;
};

