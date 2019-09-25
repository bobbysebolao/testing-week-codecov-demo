var test = require('tape');
var sum = require('./sum');

test('Example test', function(t) {
  t.pass();
  t.end();
});

test('Sum function adds two numbers together', function(t) {
  const actual = sum(2,3);
  const expected = 5;
  t.equal(actual, expected, "Input of 2,3 returns 5");
  t.end();
});
