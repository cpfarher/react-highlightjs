"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const highlight_js_1 = __importDefault(require("highlight.js"));
function Highlight(props) {
    const { children, className, language, style } = props;
    const codeRef = react_1.default.useRef();
    react_1.default.useEffect(() => {
        highlight_js_1.default.highlightBlock(codeRef.current);
    }, []);
    return (react_1.default.createElement("pre", { className: className, style: style },
        react_1.default.createElement("code", { className: language, ref: codeRef }, children)));
}
exports.default = Highlight;
//# sourceMappingURL=Highlight.js.map