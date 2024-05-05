import React, { Component, useState } from "react";
import PlayIcon from "./icons/PlayIcon";
import PauseIcon from "./icons/PauseIcon";
import PlayerBottomContent from "./PlayerBottomContent";

class PlayerControls extends Component<{
  videoRef?: React.RefObject<HTMLVideoElement>;
  onSeeking?: () => void;
  color?: string 
}> {
  constructor(props: any) {
    super(props);
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

  onSeekingChange = (isSeeking: boolean) => {
    this.setState({ isSeeking });
  };

  onPlayPauseButtonClick = (isPlaying: boolean) => {
    this.setState({ isPlaying });
  };

  // handle play pause event
  handlePlayPauseButtonClick = () => {
    if (this.props.videoRef && this.props.videoRef.current) {
      const video = this.props.videoRef.current;
      if (video && video.paused) {
        video.play();
        this.setState({ isPlaying: true });
      } else {
        video.pause();
        this.setState({ isPlaying: false });
      }
    }
  };
  // handle volume of video

  render() {
    const { isPlaying, isSeeking } = this.state as {
      isPlaying: boolean;
      isSeeking: boolean;
    };
    const { videoRef } = this.props;

    if (videoRef?.current) {
      videoRef.current.onended = () => {
        this.setState({ isPlaying: false });
      }
    }

    return (
      <div
        className={`${
          isSeeking ? "wp-control-panel" : "wp-control-panel-hover"
        }`}
      >
        <button
          className="wp-control-button wp-play-pause"
          aria-label="play/pause"
          onClick={this.handlePlayPauseButtonClick}
        >
          {isPlaying ? <PauseIcon size="50" /> : <PlayIcon size="50" />}
        </button>

        <PlayerBottomContent
          onSeekingChange={this.onSeekingChange}
          onPlayPauseButtonClick={this.onPlayPauseButtonClick}
          videoRef={videoRef}
          isPlaying={isPlaying}
          onSeeking={this.props.onSeeking}
          color={this.props.color}
        />
      </div>
    );
  }
}

export default PlayerControls;
