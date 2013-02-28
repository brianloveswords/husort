const BYTE = 1;
const KILOBYTE = BYTE * 1024;
const MEGABYTE = KILOBYTE * 1024;
const GIGABYTE = MEGABYTE * 1024;
const TERABYTE = GIGABYTE * 1024;
const PETABYTE = TERABYTE * 1024;
const ZETABYTE = PETABYTE * 1024;
const YOTTABYTE = ZETABYTE * 1024

const SIZES = {
  'B': BYTE,
  'K': KILOBYTE,
  'M': MEGABYTE,
  'G': GIGABYTE,
  'T': TERABYTE,
  'Z': ZETABYTE,
  'Y': YOTTABYTE
}

const sizeRegex = /([0-9]+(?:.[0-9]+)?)(B|K|M|G|T)\s/;
function toBytes(string) {
  return parseInt(string.replace(sizeRegex, function (match, number, qualifier) {
    return number * (SIZES[qualifier.toUpperCase()] || NaN) + ' ';
  }), 10);
}

function husort(array) {
  return array.sort(function (a, b) {
    return (toBytes(a) - toBytes(b));
  });
}

husort.toBytes = toBytes;
husort.SIZES = SIZES;
module.exports = husort;