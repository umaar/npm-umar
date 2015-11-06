
import test from 'ava';
import umar from './';

test('Has a name property', t => {
	t.is(typeof umar, 'object');
	t.is(umar.name, 'Umar Hansa');
	t.end();
});
