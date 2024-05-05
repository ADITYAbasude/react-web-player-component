"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
const PlayerControls_1 = __importDefault(require("./PlayerControls"));
/**
* Player component
*
* @param {Props} props - the props of the component
* @returns {JSX.Element} the rendered component
 */
class Player extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            showControls: false,
            fullScreen: false,
        };
        this.videoRef = react_1.default.createRef();
    }
    render() {
        const { url, height, width, onPlay, onPause } = this.props;
        const wpVideo = document.getElementById("wp-video");
        document.onfullscreenchange = () => {
            if (wpVideo) {
                if (document.fullscreenElement) {
                    this.setState({
                        fullScreen: true,
                    });
                }
                else {
                    this.setState({
                        fullScreen: false,
                    });
                }
            }
        };
        if (this.videoRef.current) {
            this.videoRef.current.onplay = () => {
                if (onPlay) {
                    onPlay();
                }
            };
            this.videoRef.current.onpause = () => {
                if (onPause) {
                    onPause();
                }
            };
        }
        return (react_1.default.createElement("div", { className: "wp-player-container", id: "control-container", style: {
                position: "relative",
                width: width,
                height: height,
            } },
            react_1.default.createElement(PlayerControls_1.default, { videoRef: this.videoRef, onSeeking: this.props.onSeeking, color: this.props.color }),
            react_1.default.createElement("video", { ref: this.videoRef, controls: false, src: url, id: "wp-video", style: {
                    height: this.state.fullScreen ? "100%" : height,
                    width: this.state.fullScreen ? "100%" : width,
                } })));
    }
}
exports.default = Player;
