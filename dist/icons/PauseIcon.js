"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const PauseIcon = ({ size }) => (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", id: "pause" },
    react_1.default.createElement("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })));
exports.default = PauseIcon;
