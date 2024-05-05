"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const MuteIcon = ({ size }) => (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    react_1.default.createElement("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }),
    react_1.default.createElement("line", { x1: "23", y1: "9", x2: "17", y2: "15" }),
    react_1.default.createElement("line", { x1: "17", y1: "9", x2: "23", y2: "15" })));
exports.default = MuteIcon;
