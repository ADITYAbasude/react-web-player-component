import React from "react";
import { Component } from "react";

import FullScreenIcon from "./icons/FullScreenIcon";
import VolumeIcon from "./icons/VolumeIcon";
import MuteIcon from "./icons/MuteIcon";
import PauseIcon from "./icons/PauseIcon";
import PlayIcon from "./icons/PlayIcon";
import { convertTime } from "./utils";

interface PlayerBottomContentState {
  isSeeking: boolean;
  isMuted: boolean;
  isLooped: boolean;
  isFullScreen: boolean;
  currentVideoTime: number;
  videoDuration: number;
}

class PlayerBottomContent extends Component<
  {
    videoRef?: React.RefObject<HTMLVideoElement>;
    onSeekingChange: (isSeeking: boolean) => void;
    onPlayPauseButtonClick: (isPlaying: boolean) => void;
    isPlaying: boolean;
    onSeeking?: () => void;
    color?: string;
  },
  PlayerBottomContentState
> {
  state = {
    isMuted: false,
    isLooped: false,
    isFullScreen: false,
    volume: 1,
    isSeeking: false,
    currentVideoTime: 0,
    videoDuration: 0,
  };

  componentDidMount() {
    const { videoRef } = this.props;
    if (videoRef && videoRef.current) {
      videoRef.current.addEventListener(
        "loadedmetadata",
        this.handleVideoMetadata
      );
    }
  }

  componentWillUnmount() {
    const { videoRef } = this.props;
    if (videoRef && videoRef.current) {
      videoRef.current.removeEventListener(
        "loadedmetadata",
        this.handleVideoMetadata
      );
    }
  }

  handleVideoMetadata = () => {
    const { videoRef } = this.props;
    if (videoRef && videoRef.current) {
      this.setState({
        videoDuration: videoRef.current.duration,
      });
    }
  };

  iconsSize = "18";

  handleMouseDown = (e: any) => {
    this.setState({
      isSeeking: true,
    });
    document.addEventListener("mousemove", this.handleMouseMove);
    document.addEventListener("mouseup", this.handleMouseUp);
    this.props.onSeekingChange(true);
    this.props.videoRef?.current?.pause();
    this.props.onPlayPauseButtonClick(false);
    if (this.props.videoRef && this.props.videoRef.current) {
      this.props.videoRef.current.currentTime =
        (e.clientX / window.innerWidth) *
        (this.props.videoRef.current.duration ?? 0);
    }
  };

  handleMouseMove = (e: any) => {
    const seekbar = document.getElementById("seekbar")?.getBoundingClientRect();
    const progress = document.getElementById("progress");

    if (this.state.isSeeking && seekbar) {
      let seekPos = e.clientX - seekbar.left;
      let seekPercent = seekPos / seekbar.width;
      seekPos = Math.min(Math.max(0, seekPos), seekbar.width);

      if (progress) {
        progress.style.transform = `scaleX(${seekPercent})`;
      }

      this.props.videoRef?.current?.pause();
      this.props.onPlayPauseButtonClick(false);
      if (
        this.props.videoRef?.current &&
        !isNaN(this.props.videoRef.current.duration)
      ) {
        const duration = this.props.videoRef.current.duration;
        const currentTime = (e.clientX / window.innerWidth) * duration;
        this.props.videoRef.current.currentTime = currentTime;
      }
    }
    this.props.onSeeking?.();
  };

  handleVolume = () => {
    if (this.props.videoRef && this.props.videoRef.current) {
      const video = this.props.videoRef.current;
      if (video.muted) {
        video.muted = false;
        this.setState({ isMuted: false });
      } else {
        video.muted = true;
        this.setState({ isMuted: true });
      }
    }
  };

  handleFullScreen = () => {
    if (this.props.videoRef && this.props.videoRef.current) {
      const container = document.getElementById("control-container");
      if (!document.fullscreenElement && container) {
        if (container.requestFullscreen) {
          container.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    }
  };

  // handle play pause event
  handlePlayPauseButtonClick = () => {
    if (this.props.videoRef && this.props.videoRef.current) {
      const video = this.props.videoRef.current;
      if (video && video.paused) {
        video.play();
        this.props.onPlayPauseButtonClick(true);
      } else {
        video.pause();
        this.props.onPlayPauseButtonClick(false);
      }
    }
  };

  handleMouseUp = (e: any) => {
    this.setState({
      isSeeking: false,
    });
    document.removeEventListener("mousemove", this.handleMouseMove);
    document.removeEventListener("mouseup", this.handleMouseUp);
    this.props.onSeekingChange(false);
  };

  render() {
    const { isMuted, currentVideoTime } = this
      .state as PlayerBottomContentState;

    const { isPlaying, videoRef } = this.props;
    const progress = document.getElementById("progress");

    if (videoRef?.current) {
      videoRef.current.ontimeupdate = (e: any) => {
        this.setState({
          currentVideoTime: e.target.currentTime,
        });
        if (progress) {
          progress.style.transform = `scaleX(${
            e.target.currentTime / e.target.duration
          })`;
        }
      };
    }

    return (
      <div className="wp-player-bottom-control ">
        <div className="wp-seekbar-line">
          <div
            className="wp-seekbar"
            id="seekbar"
            onMouseDown={this.handleMouseDown}
            onTouchStart={this.handleMouseDown}
            ></div>
          <div
            className="wp-current-progress"
            id="progress"
            onMouseDown={this.handleMouseDown}
            onTouchStart={this.handleMouseDown}
            style={{color: this.props.color || '#cb1010'}}
          ></div>
        </div>

        <div className="wp-player-bottom-controls-buttons">
          <div className="wp-bottom-left-controls-buttons">
            <button
              className="wp-control-button"
              aria-label="play/pause"
              onClick={this.handlePlayPauseButtonClick}
            >
              {isPlaying ? (
                <PauseIcon size={this.iconsSize} />
              ) : (
                <PlayIcon size={this.iconsSize} />
              )}
            </button>

            <div className="wp-timer">
              <span className="wp-timer-text">
                {convertTime(parseInt(currentVideoTime.toString()))}
                &nbsp;/&nbsp;
                {convertTime(parseInt(this.state.videoDuration.toString()))}
              </span>
            </div>
          </div>

          <div className="wp-bottom-right-controls-buttons">
            <button
              className="wp-control-button"
              aria-label="mute/volume"
              onClick={this.handleVolume}
            >
              {isMuted ? (
                <MuteIcon size={this.iconsSize} />
              ) : (
                <VolumeIcon size={this.iconsSize} />
              )}
            </button>
            <button
              className={"wp-control-button"}
              aria-label="fullScreen"
              onClick={this.handleFullScreen}
            >
              <FullScreenIcon size={this.iconsSize} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerBottomContent;
