import styled from 'styled-components';
import { getSize } from './helpers/getSize.js';

// prop color overrides theme color
var SIconWrapper = styled.span.withConfig({
  displayName: "styled__SIconWrapper",
  componentId: "sc-1b42ci0-0"
})(["display:inline-flex;", ";color:", ";> svg{", ";max-height:100%;max-width:100%;overflow:hidden;pointer-events:none;}"], getSize, function (_ref) {
  var color = _ref.color;
  return color;
}, getSize);
styled.p.withConfig({
  displayName: "styled__SErrorMsg",
  componentId: "sc-1b42ci0-1"
})(["align-items:center;display:inline-flex;font-size:10px;height:", ";justify-content:center;margin:0;text-align:center;width:", ";"], function (_ref2) {
  var size = _ref2.size;
  return "".concat(size, "px");
}, function (_ref3) {
  var size = _ref3.size;
  return "".concat(size, "px");
});

export { SIconWrapper };
