"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const FullScreenIcon_1 = __importDefault(require("./icons/FullScreenIcon"));
const VolumeIcon_1 = __importDefault(require("./icons/VolumeIcon"));
const MuteIcon_1 = __importDefault(require("./icons/MuteIcon"));
const PauseIcon_1 = __importDefault(require("./icons/PauseIcon"));
const PlayIcon_1 = __importDefault(require("./icons/PlayIcon"));
const utils_1 = require("./utils");
class PlayerBottomContent extends react_2.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isMuted: false,
            isLooped: false,
            isFullScreen: false,
            volume: 1,
            isSeeking: false,
            currentVideoTime: 0,
            videoDuration: 0,
        };
        this.handleVideoMetadata = () => {
            const { videoRef } = this.props;
            if (videoRef && videoRef.current) {
                this.setState({
                    videoDuration: videoRef.current.duration,
                });
            }
        };
        this.iconsSize = "18";
        this.handleMouseDown = (e) => {
            var _a, _b, _c;
            this.setState({
                isSeeking: true,
            });
            document.addEventListener("mousemove", this.handleMouseMove);
            document.addEventListener("mouseup", this.handleMouseUp);
            this.props.onSeekingChange(true);
            (_b = (_a = this.props.videoRef) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.pause();
            this.props.onPlayPauseButtonClick(false);
            if (this.props.videoRef && this.props.videoRef.current) {
                this.props.videoRef.current.currentTime =
                    (e.clientX / window.innerWidth) *
                        ((_c = this.props.videoRef.current.duration) !== null && _c !== void 0 ? _c : 0);
            }
        };
        this.handleMouseMove = (e) => {
            var _a, _b, _c, _d, _e, _f;
            const seekbar = (_a = document.getElementById("seekbar")) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            const progress = document.getElementById("progress");
            if (this.state.isSeeking && seekbar) {
                let seekPos = e.clientX - seekbar.left;
                let seekPercent = seekPos / seekbar.width;
                seekPos = Math.min(Math.max(0, seekPos), seekbar.width);
                if (progress) {
                    progress.style.transform = `scaleX(${seekPercent})`;
                }
                (_c = (_b = this.props.videoRef) === null || _b === void 0 ? void 0 : _b.current) === null || _c === void 0 ? void 0 : _c.pause();
                this.props.onPlayPauseButtonClick(false);
                if (((_d = this.props.videoRef) === null || _d === void 0 ? void 0 : _d.current) &&
                    !isNaN(this.props.videoRef.current.duration)) {
                    const duration = this.props.videoRef.current.duration;
                    const currentTime = (e.clientX / window.innerWidth) * duration;
                    this.props.videoRef.current.currentTime = currentTime;
                }
            }
            (_f = (_e = this.props).onSeeking) === null || _f === void 0 ? void 0 : _f.call(_e);
        };
        this.handleVolume = () => {
            if (this.props.videoRef && this.props.videoRef.current) {
                const video = this.props.videoRef.current;
                if (video.muted) {
                    video.muted = false;
                    this.setState({ isMuted: false });
                }
                else {
                    video.muted = true;
                    this.setState({ isMuted: true });
                }
            }
        };
        this.handleFullScreen = () => {
            if (this.props.videoRef && this.props.videoRef.current) {
                const container = document.getElementById("control-container");
                if (!document.fullscreenElement && container) {
                    if (container.requestFullscreen) {
                        container.requestFullscreen();
                    }
                }
                else {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    }
                }
            }
        };
        // handle play pause event
        this.handlePlayPauseButtonClick = () => {
            if (this.props.videoRef && this.props.videoRef.current) {
                const video = this.props.videoRef.current;
                if (video && video.paused) {
                    video.play();
                    this.props.onPlayPauseButtonClick(true);
                }
                else {
                    video.pause();
                    this.props.onPlayPauseButtonClick(false);
                }
            }
        };
        this.handleMouseUp = (e) => {
            this.setState({
                isSeeking: false,
            });
            document.removeEventListener("mousemove", this.handleMouseMove);
            document.removeEventListener("mouseup", this.handleMouseUp);
            this.props.onSeekingChange(false);
        };
    }
    componentDidMount() {
        const { videoRef } = this.props;
        if (videoRef && videoRef.current) {
            videoRef.current.addEventListener("loadedmetadata", this.handleVideoMetadata);
        }
    }
    componentWillUnmount() {
        const { videoRef } = this.props;
        if (videoRef && videoRef.current) {
            videoRef.current.removeEventListener("loadedmetadata", this.handleVideoMetadata);
        }
    }
    render() {
        const { isMuted, currentVideoTime } = this
            .state;
        const { isPlaying, videoRef } = this.props;
        const progress = document.getElementById("progress");
        if (videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) {
            videoRef.current.ontimeupdate = (e) => {
                this.setState({
                    currentVideoTime: e.target.currentTime,
                });
                if (progress) {
                    progress.style.transform = `scaleX(${e.target.currentTime / e.target.duration})`;
                }
            };
        }
        return (react_1.default.createElement("div", { className: "wp-player-bottom-control " },
            react_1.default.createElement("div", { className: "wp-seekbar-line" },
                react_1.default.createElement("div", { className: "wp-seekbar", id: "seekbar", onMouseDown: this.handleMouseDown, onTouchStart: this.handleMouseDown }),
                react_1.default.createElement("div", { className: "wp-current-progress", id: "progress", onMouseDown: this.handleMouseDown, onTouchStart: this.handleMouseDown, style: { color: this.props.color || '#cb1010' } })),
            react_1.default.createElement("div", { className: "wp-player-bottom-controls-buttons" },
                react_1.default.createElement("div", { className: "wp-bottom-left-controls-buttons" },
                    react_1.default.createElement("button", { className: "wp-control-button", "aria-label": "play/pause", onClick: this.handlePlayPauseButtonClick }, isPlaying ? (react_1.default.createElement(PauseIcon_1.default, { size: this.iconsSize })) : (react_1.default.createElement(PlayIcon_1.default, { size: this.iconsSize }))),
                    react_1.default.createElement("div", { className: "wp-timer" },
                        react_1.default.createElement("span", { className: "wp-timer-text" },
                            (0, utils_1.convertTime)(parseInt(currentVideoTime.toString())),
                            "\u00A0/\u00A0",
                            (0, utils_1.convertTime)(parseInt(this.state.videoDuration.toString()))))),
                react_1.default.createElement("div", { className: "wp-bottom-right-controls-buttons" },
                    react_1.default.createElement("button", { className: "wp-control-button", "aria-label": "mute/volume", onClick: this.handleVolume }, isMuted ? (react_1.default.createElement(MuteIcon_1.default, { size: this.iconsSize })) : (react_1.default.createElement(VolumeIcon_1.default, { size: this.iconsSize }))),
                    react_1.default.createElement("button", { className: "wp-control-button", "aria-label": "fullScreen", onClick: this.handleFullScreen },
                        react_1.default.createElement(FullScreenIcon_1.default, { size: this.iconsSize }))))));
    }
}
exports.default = PlayerBottomContent;
