import rem from 'polished/lib/helpers/rem';

var getSize = function getSize(props) {
  var length = rem("".concat(props.size, "px"), '14px');
  return "height: ".concat(length, "; width: ").concat(length, ";");
};

export { getSize };
