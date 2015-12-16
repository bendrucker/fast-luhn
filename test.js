'use strict'

var test = require('tape')
var luhn = require('./')

/**
 * Test Credit Card Account Numbers
 * {@link https://www.paypalobjects.com/en_US/vhelp/paypalmanager_help/credit_card_numbers.htm}
 * {@link http://tools.bin63.com/credit-card-number-validator-generator}
 */

test('Empty string', function (t) {
  t.equal(luhn(''), false, 'falsy')
  t.end()
})

test('Wrong number', function (t) {
  t.notOk(luhn('4242424242424241'), 'failing')
  t.end()
})

test('American Express', function (t) {
  t.ok(luhn('378282246310005'), 'passing')
  t.ok(luhn('371449635398431'), 'passing')
  t.end()
})

test('American Express Corporate', function (t) {
  t.ok(luhn('378734493671000'), 'passing')
  t.end()
})

test('Australian BankCard', function (t) {
  t.ok(luhn('5610591081018250'), 'passing')
  t.end()
})

test('China UnionPay', function (t) {
  t.ok(luhn('56022138100428121'), 'passing')
  t.end()
})

test('Dankort (PBS)', function (t) {
  t.ok(luhn('5019717010103742'), 'passing')
  t.end()
})

test('Diners Club Carte Blanche', function (t) {
  t.ok(luhn('30529410444923'), 'passing')
  t.ok(luhn('30453336803361'), 'passing')
  t.end()
})

test('Diners Club enRoute', function (t) {
  t.ok(luhn('201814502241137'), 'passing')
  t.ok(luhn('201783933075697'), 'passing')
  t.end()
})

test('Diners Club International', function (t) {
  t.ok(luhn('36611986743252'), 'passing')
  t.ok(luhn('36067766880899'), 'passing')
  t.end()
})

test('Diners Club United States & Canada', function (t) {
  t.ok(luhn('5452110172443227'), 'passing')
  t.ok(luhn('5482383186508475'), 'passing')
  t.end()
})

test('Discover', function (t) {
  t.ok(luhn('6011111111111117'), 'passing')
  t.ok(luhn('6011000990139424'), 'passing')
  t.end()
})

test('InstaPayment', function (t) {
  t.ok(luhn('6397614271197382'), 'passing')
  t.ok(luhn('6399886206611061'), 'passing')
  t.end()
})

test('JCB', function (t) {
  t.ok(luhn('3530111333300000'), 'passing')
  t.ok(luhn('3566002020360505'), 'passing')
  t.end()
})

test('Laser', function (t) {
  t.ok(luhn('6304315975430642093'), 'passing')
  t.ok(luhn('6706793257408015918'), 'passing')
  t.end()
})

test('Maestro', function (t) {
  t.ok(luhn('6759001613173580'), 'passing')
  t.ok(luhn('58938174776839514'), 'passing')
  t.end()
})

test('MasterCard', function (t) {
  t.ok(luhn('5555555555554444'), 'passing')
  t.ok(luhn('5105105105105100'), 'passing')
  t.end()
})

test('Solo', function (t) {
  t.ok(luhn('6767920776702119'), 'passing')
  t.ok(luhn('6767709326528276'), 'passing')
  t.end()
})

test('Switch/Solo (Paymentech)', function (t) {
  t.ok(luhn('6331101999990016'), 'passing')
  t.ok(luhn('4936457137842251'), 'passing')
  t.end()
})

test('Visa', function (t) {
  t.ok(luhn('4012888888881881'), 'passing')
  t.ok(luhn('4222222222222'), 'passing')
  t.end()
})

test('VISA Electron', function (t) {
  t.ok(luhn('4905245994973195'), 'passing')
  t.ok(luhn('4346130225611'), 'passing')
  t.end()
})
