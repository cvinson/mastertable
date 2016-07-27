var mt = require('./');
var test = require('tape');

test('degreesToPoints', function(assert) {
  assert.plan(7);
  assert.strictEquals(mt.degreesToPoints(1), 1, '(1 => 1)');
  assert.strictEquals(mt.degreesToPoints(2), 3, '(2 => 3)');
  assert.strictEquals(mt.degreesToPoints(3), 6, '(3 => 6)');
  assert.strictEquals(mt.degreesToPoints(4), 10, '(4 => 10)');
  assert.strictEquals(mt.degreesToPoints(5), 15, '(5 => 15)');
  assert.strictEquals(mt.degreesToPoints(39), 780, '(39 => 780)');
  assert.strictEquals(mt.degreesToPoints(40), 820, '(40 => 820)');
});

test('pointsToDegrees', function(assert) {
  assert.plan(7);
  assert.strictEquals(mt.pointsToDegrees(1), 1, '(1 => 1)');
  assert.strictEquals(mt.pointsToDegrees(3), 2, '(3 => 2)');
  assert.strictEquals(mt.pointsToDegrees(6), 3, '(6 => 3)');
  assert.strictEquals(mt.pointsToDegrees(10), 4, '(4 => 10)');
  assert.strictEquals(mt.pointsToDegrees(15), 5, '(15 => 5)');
  assert.strictEquals(mt.pointsToDegrees(780), 39, '(780 => 39)');
  assert.strictEquals(mt.pointsToDegrees(820), 40, '(820 => 40)');
});
