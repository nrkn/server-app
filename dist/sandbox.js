"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const dom = _1.div({ id: 'foo' }, _1.ul(_1.li(_1.span('Hello')), _1.li(_1.span('World'))));
console.log(dom.outerHTML);
//# sourceMappingURL=sandbox.js.map