import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import React from 'react';
import { SIconWrapper } from '../styled.js';
import { DEFAULT_SIZE, PRIMARY_COLOR } from '../constants.js';

var _excluded = ["size", "primaryColor"];

var ApplicationSettings = function ApplicationSettings(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1.76 5.795v13.532c0 .059.051.11.11.11h5.996a.882.882 0 1 1 0 1.765H1.87c-1.03 0-1.87-.838-1.87-1.413V2.327C0 .836.836 0 1.87 0h17.467c1.03 0 1.87.812 1.87 2.327v5.54c0 .031-.065.887-.882.887a.882.882 0 0 1-.883-.882V5.795H1.76zM19.442 1.87a.11.11 0 0 0-.115-.11H1.87a.112.112 0 0 0-.11.11v2.165h17.682V1.87zm2.784 14.953a.523.523 0 0 0 .328-.407c.005-.032.003-.04 0-.05a2.083 2.083 0 0 0-.116-.28.279.279 0 0 0-.148-.126 2.98 2.98 0 0 1-1.375-1.048 1.958 1.958 0 0 1-.339-1.148 2.937 2.937 0 0 1 .254-1.247.516.516 0 0 0-.012-.41.394.394 0 0 0-.249-.223.457.457 0 0 0-.34.006 3.041 3.041 0 0 1-1.534.245 2.018 2.018 0 0 1-1.31-.721 2.984 2.984 0 0 1-.588-.946.513.513 0 0 0-.328-.286.43.43 0 0 0-.406.108.433.433 0 0 0-.137.184A2.98 2.98 0 0 1 14.91 11.8a1.94 1.94 0 0 1-1.153.348 2.98 2.98 0 0 1-1.25-.254.513.513 0 0 0-.404.008.397.397 0 0 0-.223.262.45.45 0 0 0 .005.335c.23.51.31 1.075.23 1.64-.084.484-.34.922-.704 1.217-.281.258-.61.46-.95.59a.493.493 0 0 0-.28.326.433.433 0 0 0 .11.408.433.433 0 0 0 .178.132c.524.2.98.546 1.323 1.005.245.35.37.774.353 1.19a3.125 3.125 0 0 1-.26 1.238.464.464 0 0 0 .627.596 3.033 3.033 0 0 1 1.517-.234c.58.069 1.103.386 1.421.855.184.244.34.508.467.793a.54.54 0 0 0 .38.31l.1.016a.767.767 0 0 0 .281-.138.388.388 0 0 0 .1-.132c.197-.521.533-.977.98-1.328a1.926 1.926 0 0 1 1.218-.383 2.94 2.94 0 0 1 1.243.255.514.514 0 0 0 .438-.026.425.425 0 0 0 .208-.348.446.446 0 0 0-.035-.25 3.05 3.05 0 0 1-.239-1.51c.051-.468.27-.904.602-1.211.29-.298.639-.53 1.034-.687zm1.734-.816c.051.25.053.469.007.695l-.014.063c-.015.06-.031.11-.031.095a2.176 2.176 0 0 1-1.353 1.542 1.212 1.212 0 0 0-.412.287.151.151 0 0 0-.056.088c-.021.202.01.405.09.59.16.362.215.76.163 1.143a2.095 2.095 0 0 1-1.065 1.607 2.192 2.192 0 0 1-1.935.097 1.224 1.224 0 0 0-.515-.1.186.186 0 0 0-.091.014 1.236 1.236 0 0 0-.39.539 2.054 2.054 0 0 1-.562.787c-.31.26-.676.44-1.096.536l-.105.012-.565-.014-.212-.065a2.21 2.21 0 0 1-1.444-1.247 2.132 2.132 0 0 0-.247-.416c-.085-.113-.122-.14-.17-.141-.2-.02-.402.01-.585.09a2.154 2.154 0 0 1-2.86-2.817c.072-.16.109-.335.112-.541a.216.216 0 0 0-.01-.091 1.123 1.123 0 0 0-.512-.383 2.126 2.126 0 0 1-.865-.637 2.11 2.11 0 0 1-.426-1.91 2.18 2.18 0 0 1 1.297-1.458 1.28 1.28 0 0 0 .41-.261.37.37 0 0 0 .099-.11 1.135 1.135 0 0 0-.093-.627 2.133 2.133 0 0 1-.058-1.56 2.07 2.07 0 0 1 1.153-1.266 2.186 2.186 0 0 1 1.762.002c.148.067.309.099.5.094a.188.188 0 0 0 .086-.015 1.12 1.12 0 0 0 .382-.512c.137-.345.36-.65.644-.875a2.105 2.105 0 0 1 1.921-.421 2.205 2.205 0 0 1 1.453 1.299c.053.14.133.269.262.413a.26.26 0 0 0 .132.098c.202.02.406-.012.593-.096a2.127 2.127 0 0 1 1.58-.058 2.07 2.07 0 0 1 1.256 1.152c.246.56.245 1.196-.001 1.758-.067.152-.1.315-.098.514-.003.04.007.082.007.085.135.18.32.318.54.398.429.167.786.476 1.016.883.085.16.157.327.213.492l.018.049.03.08.045.119zm-7.59 2.11c.96 0 1.743-.783 1.743-1.744 0-.962-.783-1.744-1.744-1.744s-1.743.782-1.743 1.744c0 .961.782 1.743 1.743 1.743zm0-4.898a3.154 3.154 0 1 1 0 6.309 3.154 3.154 0 0 1 0-6.309z",
    fill: "currentColor"
  })));
};

ApplicationSettings.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var ApplicationSettingsIcon = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? DEFAULT_SIZE : _ref$size,
      _ref$primaryColor = _ref.primaryColor,
      primaryColor = _ref$primaryColor === void 0 ? PRIMARY_COLOR : _ref$primaryColor,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(SIconWrapper, _extends({
    size: size,
    color: primaryColor,
    ref: ref
  }, restProps), /*#__PURE__*/React.createElement(ApplicationSettings, null));
});
ApplicationSettingsIcon.displayName = 'ApplicationSettings';

export { ApplicationSettingsIcon };