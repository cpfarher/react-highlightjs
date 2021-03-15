"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const highlight_js_1 = __importDefault(require("highlight.js"));
const copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
require("Highlight.scss");
function Highlight(props) {
    const { children, className, language, style, showCopy } = props;
    const codeRef = react_1.default.useRef();
    const [copied, setCopied] = react_1.useState(false);
    const [showCopyClipboard, setShowCopyClipboard] = react_1.useState(false);
    react_1.default.useEffect(() => {
        highlight_js_1.default.highlightBlock(codeRef.current);
    }, [props.children]);
    function copyToClipboard() {
        setCopied(true);
        copy_to_clipboard_1.default(codeRef.current.textContent);
    }
    return (react_1.default.createElement("div", { className: "highlight", onMouseOver: () => {
            setShowCopyClipboard(true);
        }, onMouseLeave: () => {
            setShowCopyClipboard(false);
            setCopied(false);
        } },
        showCopy && showCopyClipboard && (react_1.default.createElement("div", { onClick: copyToClipboard, className: "clipboard text-right" },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { size: "1x", icon: free_solid_svg_icons_1.faClipboard, title: "Copy to clipboard" }),
            ' ',
            copied ? 'Copied!' : 'Copy')),
        react_1.default.createElement("pre", { className: className, style: style },
            react_1.default.createElement("code", { className: language, ref: codeRef }, children))));
}
exports.default = Highlight;
//# sourceMappingURL=Highlight.js.map