'use strict'

var test = require('tape')
var luhn = require('./')

test(function (t) {
  t.ok(luhn('4242424242424242'), 'passing')
  t.notOk(luhn('4242424242424241'), 'failing')
  t.equal(luhn(''), false, 'falsy')
  t.end()
})

test(function(t){
  t.ok( luhn( luhn.create('123456') ), 'passing')
  t.ok( luhn( luhn.create('7654321') ), 'passing')
  t.end()
})
