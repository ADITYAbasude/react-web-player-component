import React, { Component } from "react";
import { Props, PropsWithOptional } from "./props.interface";
import PlayerControls from "./PlayerControls";

/**
* Player component
* 
* @param {Props} props - the props of the component
* @returns {JSX.Element} the rendered component
 */
class Player extends Component<PropsWithOptional> {
  videoRef: React.RefObject<HTMLVideoElement>;
  state = {
    showControls: false,
    fullScreen: false,
  };
  constructor(props: Props) {
    super(props);
    this.videoRef = React.createRef();
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
        } else {
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

    return (
      <div
        className="wp-player-container"
        id="control-container"
        style={{
          position: "relative",
          width: width,
          height: height,
        }}
      >
        <PlayerControls
          videoRef={this.videoRef}
          onSeeking={this.props.onSeeking}
          color={this.props.color}
        />
        <video
          ref={this.videoRef}
          controls={false}
          src={url}
          id="wp-video"
          style={{
            height: this.state.fullScreen ? "100%" : height,
            width: this.state.fullScreen ? "100%" : width,
          }}
        />
      </div>
    );
  }
}

export default Player;
