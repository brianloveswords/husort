const test = require('tap').test;
const husort = require('..');
const data = require('./data.json');

test('toBytes', function (t) {
  t.same(husort.toBytes('1.0G bones'), husort.SIZES['G']);
  t.same(husort.toBytes('1.0GRAPES'), 1.0);
  t.same(husort.toBytes('1.0Klol'), 1.0);
  t.ok(isNaN(husort.toBytes('some other thing')), 'should be NaN');
  t.end();
});

test('husort: an array of sizes', function (t) {
  t.same(husort(data.unsorted), data.sorted);
  t.end();
});
