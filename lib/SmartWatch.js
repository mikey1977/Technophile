var Watch = require('../lib/Watch');
var Tablet = require('../lib/Tablet');



function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

extend(SmartWatch.prototype, Watch.prototype);
extend(SmartWatch.prototype, Tablet.prototype);

function SmartWatch() {
  Watch.call(this);
}

module.exports = SmartWatch;