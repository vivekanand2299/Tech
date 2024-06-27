import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import "./VideoPlayerControls.css"; // You can style this as per your requirements

const VideoPlayerControls = ({ isPlaying, setIsPlaying, videoRef }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const intervalRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeChange = (e) => {
    const newTime = parseInt(e.target.value, 10);
    setCurrentTime(newTime);
    videoRef.current.currentTime = newTime;
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTime(videoRef.current.currentTime);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(timeInSeconds % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="video-controls">
      <button onClick={handlePlayPause} className="play-pause-button">
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
      <div className="video-timeline">
        <input
          type="range"
          className="timeline"
          value={currentTime}
          max={videoRef.current ? videoRef.current.duration : 100}
          onChange={handleTimeChange}
        />
      </div>
      <div className="video-time">
        <span>{formatTime(currentTime)}</span> /{" "}
        <span>
          {formatTime(videoRef.current ? videoRef.current.duration : 0)}
        </span>
      </div>
    </div>
  );
};

export default VideoPlayerControls;
