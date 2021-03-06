'use strict';

var _ = require('lodash');

function init() {

  function direction() {
    return direction;
  }

  direction.label = 'BG direction';
  direction.pluginType = 'bg-status';

  direction.setProperties = function setProperties (sbx) {
    sbx.offerProperty('direction', function setDirection ( ) {
      return direction.info(_.last(sbx.data.sgvs));
    });
  };

  direction.updateVisualisation = function updateVisualisation (sbx) {
    var prop = sbx.properties.direction;

    if (sbx.lastSGVMgdl() < 39) {
      prop.value = 'CGM ERROR';
      prop.label = '✖';
    }

    sbx.pluginBase.updatePillText(direction, {
      label: prop.label
      , directText: true
    });
  };

  direction.info = function info(sgv) {
    var result = { display: null };

    if (!sgv) { return result; }

    result.value = sgv.direction;
    result.label = directionToChar(result.value);
    result.entity = charToEntity(result.label);

    return result;
  };

  var dir2Char = {
    NONE: '⇼'
    , DoubleUp: '⇈'
    , SingleUp: '↑'
    , FortyFiveUp: '↗'
    , Flat: '→'
    , FortyFiveDown: '↘'
    , SingleDown: '↓'
    , DoubleDown: '⇊'
    , 'NOT COMPUTABLE': '-'
    , 'RATE OUT OF RANGE': '⇕'
  };

  function charToEntity(char) {
    return char && char.length && '&#' + char.charCodeAt(0) + ';';
  }

  function directionToChar(direction) {
    return dir2Char[direction] || '-';
  }

  return direction();

}

module.exports = init;