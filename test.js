'use strict'

var test = require('tape')
var luhn = require('./')

test(function (t) {
  t.ok(luhn('4242424242424242'), 'passing')
  t.notOk(luhn('4242424242424241'), 'failing')
  t.equal(luhn(''), false, 'falsy')
  t.equal(luhn(undefined), false, 'falsy')
  t.equal(luhn(null), false, 'falsy')
  t.throws(function () { luhn(12345) }, /TypeError/, 'invalid type')
  t.end()
})
