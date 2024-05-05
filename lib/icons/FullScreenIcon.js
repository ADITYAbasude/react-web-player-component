"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const FullScreenIcon = ({ size }) => {
    return (react_1.default.createElement("svg", { height: size, width: size, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("g", null,
            react_1.default.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
            react_1.default.createElement("path", { d: "M20 3h2v6h-2V5h-4V3h4zM4 3h4v2H4v4H2V3h2zm16 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z" }))));
};
exports.default = FullScreenIcon;
