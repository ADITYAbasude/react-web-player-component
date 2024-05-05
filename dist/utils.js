"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTime = void 0;
const convertTime = (time) => {
    if (time) {
        const hours = Math.floor(time / 60);
        const minutes = time % 60;
        const convertedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
        return convertedTime;
    }
    return '0';
};
exports.convertTime = convertTime;
