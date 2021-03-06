'use strict';


var levels = {
  URGENT: 2
  , WARN: 1
  , INFO: 0
  , LOW: -1
  , LOWEST: -2
  , NONE: -3
};

var level2Display = {
  '2': 'Urgent'
  , '1':'Warning'
  , '0': 'Info'
  , '-1': 'Low'
  , '-2': 'Lowest'
  , '-3': 'None'
};

levels.toDisplay = function toDisplay(level) {
  var key = level !== undefined && level.toString();
  return key && level2Display[key] || 'Unknown';
};

levels.toLowerCase = function toLowerCase(level) {
  return levels.toDisplay(level).toLowerCase();
};


module.exports = levels;