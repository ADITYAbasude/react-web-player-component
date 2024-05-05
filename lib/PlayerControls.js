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
const PlayIcon_1 = __importDefault(require("./icons/PlayIcon"));
const PauseIcon_1 = __importDefault(require("./icons/PauseIcon"));
const PlayerBottomContent_1 = __importDefault(require("./PlayerBottomContent"));
class PlayerControls extends react_1.Component {
    constructor(props) {
        super(props);
        this.onSeekingChange = (isSeeking) => {
            this.setState({ isSeeking });
        };
        this.onPlayPauseButtonClick = (isPlaying) => {
            this.setState({ isPlaying });
        };
        // handle play pause event
        this.handlePlayPauseButtonClick = () => {
            if (this.props.videoRef && this.props.videoRef.current) {
                const video = this.props.videoRef.current;
                if (video && video.paused) {
                    video.play();
                    this.setState({ isPlaying: true });
                }
                else {
                    video.pause();
                    this.setState({ isPlaying: false });
                }
            }
        };
        this.state = {
            isPlaying: false,
            isMuted: false,
            isLooped: false,
            isFullScreen: false,
            volume: 1,
            isSeeking: false,
        };
        this.handlePlayPauseButtonClick =
            this.handlePlayPauseButtonClick.bind(this);
    }
    // handle volume of video
    render() {
        const { isPlaying, isSeeking } = this.state;
        const { videoRef } = this.props;
        if (videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) {
            videoRef.current.onended = () => {
                this.setState({ isPlaying: false });
            };
        }
        return (react_1.default.createElement("div", { className: `${isSeeking ? "wp-control-panel" : "wp-control-panel-hover"}` },
            react_1.default.createElement("button", { className: "wp-control-button wp-play-pause", "aria-label": "play/pause", onClick: this.handlePlayPauseButtonClick }, isPlaying ? react_1.default.createElement(PauseIcon_1.default, { size: "50" }) : react_1.default.createElement(PlayIcon_1.default, { size: "50" })),
            react_1.default.createElement(PlayerBottomContent_1.default, { onSeekingChange: this.onSeekingChange, onPlayPauseButtonClick: this.onPlayPauseButtonClick, videoRef: videoRef, isPlaying: isPlaying, onSeeking: this.props.onSeeking, color: this.props.color })));
    }
}
exports.default = PlayerControls;
