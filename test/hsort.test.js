const test = require('tap').test;
const hsort = require('..');
const data = require('./data.json');

const SIZES = {
  'B': 1,
  'K': 1024,
  'M': 1024*1024,
  'G': 1024*1024*1024,
  'T': 1024*1024*1024*1024
}

test('toBytes', function (t) {
  t.same(hsort.toBytes('1.0G bones'), SIZES['G']);
  t.same(hsort.toBytes('1.0GRAPES'), 1.0);
  t.same(hsort.toBytes('1.0Klol'), 1.0);
  t.ok(isNaN(hsort.toBytes('some other thing')), 'should be NaN');
  t.end();
});

test('hsort: an array of sizes', function (t) {
  t.same(hsort(data.unsorted), data.sorted);
  t.end();
});
