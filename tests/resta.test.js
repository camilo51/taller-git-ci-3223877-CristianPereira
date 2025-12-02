import test from 'node:test';
import assert from 'node:assert/strict';

const resta = (a, b) => {
  return a - b;
};

test('resta 5 - 3 = 2', () => {
  assert.equal(resta(5, 3), 2);
});
