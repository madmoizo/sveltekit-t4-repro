import { S as pop, Q as push } from "../../chunks/index.js";
function _layout($$payload, $$props) {
  push();
  const { children } = $$props;
  children($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _layout as default
};
