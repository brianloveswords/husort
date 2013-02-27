const sizeMultipliers = {
  'B': 1,
  'K': 1024,
  'M': 1024*1024,
  'G': 1024*1024*1024,
  'T': 1024*1024*1024*1024
}

const sizeRegex = /([0-9]+(?:.[0-9]+)?)(B|K|M|G|T)\s/;
function toBytes(string) {
  return parseInt(string.replace(sizeRegex, function (match, number, qualifier) {
    return number * (sizeMultipliers[qualifier.toUpperCase()] || NaN) + ' ';
  }), 10);
}

function hsort(array) {
  return array.sort(function (a, b) {
    return (toBytes(a) - toBytes(b));
  });
}

hsort.toBytes = toBytes;
module.exports = hsort;