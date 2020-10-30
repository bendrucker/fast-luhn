'use strict'

const test = require('tape')
const luhn = require('./')

test(function (t) {
  t.ok(luhn('4242424242424242'), 'passing')
  t.ok(luhn('0000000000000000'), 'passing')
  t.notOk(luhn('4242424242424241'), 'failing')
  t.equal(luhn(''), false, 'falsy')
  t.end()
})
