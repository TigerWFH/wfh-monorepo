(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.index = {}, global.React));
}(this, (function (exports, React) { 'use strict';

    function Mouse(props) {
        return (React.createElement("div", null, "MouseComponent With lerna"));
    }

    exports.Mouse = Mouse;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
