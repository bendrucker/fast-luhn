'use strict';

import test from 'tape';
import luhn from '../';


test('Luhn', (t) => {

  t.ok(luhn('4242424242424242'), 'passing');
  t.notOk(luhn('4242424242424241'), 'failing');
  t.equal(luhn(''), false, 'falsy');
  t.end();

});
